import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Edit, Search, Plus, RefreshCw } from 'lucide-react';
import { useOutletContext } from "react-router-dom";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";



// กำหนดสีสำหรับแต่ละ Status
const statusColors = {
  Available: 'bg-green-100 text-green-800 border-green-300',      // ว่าง - สีเขียว
  Occupied: 'bg-blue-100 text-blue-800 border-blue-300',          // มีผู้เข้าพัก - สีน้ำเงิน
  Reserved: 'bg-purple-100 text-purple-800 border-purple-300',    // จอง - สีม่วง
  Cleaning: 'bg-yellow-100 text-yellow-800 border-yellow-300',    // กำลังทำความสะอาด - สีเหลือง
  Maintenance: 'bg-orange-100 text-orange-800 border-orange-300', // ซ่อมบำรุง - สีส้ม
};


export default function AdminRoomLists() {

  // เก็บข้อมูลห้องพักทั้งหมด (ใช้ useState เพื่อให้สามารถอัพเดทข้อมูลได้)
  const { API } = useOutletContext();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // เก็บคำค้นหาที่ user พิมพ์
  const [searchTerm, setSearchTerm] = useState('');
  // เก็บตัวกรองต่างๆ
  const [statusFilter, setStatusFilter] = useState('all');  // กรองตาม status
  const [typeFilter, setTypeFilter] = useState('all');      // กรองตามประเภทห้อง
  const [floorFilter, setFloorFilter] = useState('all');    // กรองตามชั้น
  // เก็บข้อมูลห้องที่กำลังแก้ไข
  // เก็บสถานะการเปิด/ปิด dialog สำหรับแก้ไขข้อมูล
  const [editingRoom, setEditingRoom] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // สร้าง Room
  const [addingRoom, setAddingRoom] = useState(null);
  const [isAddRoomDialogOpen, setIsAddRoomDialogOpen] = useState(false);
  const [newRoom, setNewRoom] = useState({
    roomNumber: '',
    type: 'Single',
    floor: 1,
    roomRate: '',
    imagelink: '',
    size: '',
    additional1: '',
    additional2: '',
    additional3: ''
  });

  // filter rooms logic
  const filteredRooms = rooms.filter(room => {
    // ตรวจสอบว่าเลขห้องหรือชื่อผู้เข้าพักตรงกับคำค้นหาหรือไม่
    console.log("room : ", room)
    const matchesSearch = room.roomNumber.toString().includes(searchTerm) ||
                         room.currentGuest?.firstname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.currentGuest?.lastname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         `${room.currentGuest?.firstname?.toLowerCase().includes(searchTerm.toLowerCase())} ${room.currentGuest?.flastname?.toLowerCase().includes(searchTerm.toLowerCase())}`
    // ตรวจสอบว่าตรงกับตัวกรอง status หรือไม่ (ถ้าเลือก 'all' จะไม่กรอง)
    const matchesStatus = statusFilter === 'all' || room.status === statusFilter;
    // ตรวจสอบว่าตรงกับตัวกรองประเภทห้องหรือไม่
    const matchesType = typeFilter === 'all' || room.type === typeFilter;
    // ตรวจสอบว่าตรงกับตัวกรองชั้นหรือไม่
    const matchesFloor = floorFilter === 'all' || room.floor.toString() === floorFilter;

    // ต้องผ่านเงื่อนไขทุกข้อถึงจะแสดงผล (AND logic)
    return matchesSearch && matchesStatus && matchesType && matchesFloor;
  });

  // fetch data
  const fetchRooms = async () => {
      try {
        const response = await axios.get(`${API}/rooms/`);

        if (response.data){
          setRooms(response.data.data);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching rooms:", err);
        setError("Can't fetching rooms data");
        setLoading(false);
      }
    };
  useEffect(() => {
    fetchRooms();
  }, []);


  // ฟังก์ชันเมื่อกดปุ่มแก้ไขห้อง
  const handleRoomEdit = (room) => {
    // สร้างตัวแปรใหม่เพื่อเก็บค่าที่ทำความสะอาดแล้ว
    const cleanedData = {
      ...room,
      // ถ้ามีค่า size ให้ดึงเอาเฉพาะตัวเลขออกมา
      size: room.size ? room.size.replace(" m²", "") : ""
    };
    // คัดลอกข้อมูลห้องที่จะแก้ไข (ใช้ spread operator เพื่อไม่ให้แก้ไขข้อมูลต้นฉบับโดยตรง)
    // และเปิด dialog สำหรับแก้ไข
    setEditingRoom({...cleanedData});
    setIsDialogOpen(true);
  };
  // ฟังก์ชันบันทึกการแก้ไข
  const handleSaveRoomEdit = async () => {
      try {
          const prepNewRoomData = {
          ...editingRoom,
          size: `${editingRoom.size} m²` // แปลงจาก 25 เป็น "25 m²" ที่นี่
        }
        setLoading(true);

        await axios.patch(
          `${API}/rooms/${editingRoom.roomNumber}`,
          prepNewRoomData
        );

        // อัพเดทข้อมูลห้องในรายการ และใช้ .map() เพื่อวนลูปและเปลี่ยนข้อมูลห้องที่มี id ตรงกัน
        await fetchRooms();

        // ปิด dialog พร้อมล้างข้อมูลห้องที่กำลังแก้ไข
        setIsDialogOpen(false);
        setEditingRoom(null);

        console.log("Update successful and UI refreshed");

      } catch (err) {
        console.error("Error editing rooms data:", err);
        alert("Failed to Edit the data")
      } finally {
        setLoading(false);
    }
  };
  // เมื่อกดปุ่มลบห้อง
  const handleDeleteRoom = async () => {
  if (!window.confirm("Are you sure you want to delete this room? This action cannot be undone.")) return;

  try {
    // สมมติว่า Backend ใช้ห้องเลขที่ในการลบ หรือใช้ ID
    const response = await axios.delete(`${API}/rooms/${editingRoom.roomNumber}`);

    if (response.data.success) {
      setIsDialogOpen(false); // ปิด Dialog
      fetchRooms();           // ดึงข้อมูลใหม่มาโชว์ (ห้องที่ลบไปจะหายไป)
      alert("Room deleted successfully");
    }
  } catch (err) {
    console.error("Delete error:", err);
    alert(err.response?.data?.message || "Failed to delete room");
  }
};


  // เมื่อกดปุ่ม add new room
  const handleEditCreateRoom = () => {
    setAddingRoom(true);
    setIsAddRoomDialogOpen(true);
  };
  // เมื่อบันทึก new room
  const handleSaveADDRoom = async () => {
    try {
      setLoading(true);
      // ส่งข้อมูล newRoom ทั้ง Object ไปที่ Backend

      const prepNewRoomData = {
        ...newRoom,
        size: `${newRoom.size} m²` // แปลงจาก 25 เป็น "25 m²" ที่นี่
      }

      const response = await axios.post(`${API}/rooms/`, prepNewRoomData);

      if (response.data.success) {
        // ปิด Dialog และล้างฟอร์ม
        setIsAddRoomDialogOpen(false);
        setNewRoom({
          roomNumber: '',
          type: 'Single',
          floor: 1,
          roomRate: '',
          imagelink: '',
          size: '',
          additional1: '',
          additional2: '',
          additional3: ''
       });

        // อัปเดต State rooms by fetching from api again เพื่อให้ UI แสดงห้องใหม่ทันที
        await fetchRooms();
        alert("Room added successfully!");
      }
    } catch (err) {
      console.error("Error adding room:", err);
      alert(err.response?.data?.message || "Failed to add room");
    } finally {
      setLoading(false);
    }
  };

  // ฟังก์ชันสำหรับ Reset สถานะห้องเป็น Available และล้างชื่อแขก
const handleResetRoom = async (room) => {
  if (!window.confirm(`Are you sure you want to reset Room ${room.roomNumber}? This will set status to Available and clear guest data.`)) return;

  try {
    setLoading(true);
    // ยิง Patch ไปที่ API ของ Room โดยตรง
    await axios.patch(`${API}/rooms/${room.roomNumber}`, {
      status: "Available",
      currentGuest: null
    });

    // ดึงข้อมูลใหม่เพื่ออัปเดต UI
    await fetchRooms();
    alert(`Room ${room.roomNumber} has been reset.`);

  } catch (err) {
    console.error("Error resetting room:", err);
    alert(err.response?.data?.message || "Failed to reset room");
  } finally {
    setLoading(false);
  }
};

  // ใช้ .filter() เพื่อนับจำนวนห้องที่มี status แต่ละประเภท
  const statusCounts = {
    Available: rooms.filter(r => r.status === 'Available').length,
    Occupied: rooms.filter(r => r.status === 'Occupied').length,
    Reserved: rooms.filter(r => r.status === 'Reserved').length,
    Cleaning: rooms.filter(r => r.status === 'Cleaning').length,
    Maintenance: rooms.filter(r => r.status === 'Maintenance').length,
  };

  if (loading) return <div className="p-10 text-center">Loading rooms...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  console.log(rooms)

  return (

    <div className="m-5 flex flex-col gap-6 w-full">
      {/* HEADER - ส่วนหัวของหน้า */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Room Management</h1>
        <Button
        className="gap-2 rounded-lg"
        onClick={() => handleEditCreateRoom()}
        >
          <Plus size={16} />
          Add Room
        </Button>
      </div>
      {/* STATUS SUMMARY - สรุปจำนวนห้องแต่ละ Status */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* วนลูปแสดงการ์ดสรุปแต่ละ status */}
        {Object.entries(statusCounts).map(([status, count]) => (
          <div key={status} className={`rounded-lg p-4 border-2 ${statusColors[status]}`}>
            <p className="text-sm font-medium">{status}</p>
            <p className="text-2xl font-bold">{count}</p>
          </div>
        ))}
      </div>

      {/* ============================================ */}
      {/* FILTERS AND SEARCH - ส่วนค้นหาและกรองข้อมูล */}
      {/* ============================================ */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* ช่องค้นหา */}
            <div className="md:col-span-2">
              <Label className="pb-2">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by room number or guest name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            {/* ตัวกรอง Status */}
            <div>
              <Label className="pb-2">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="Occupied">Occupied</SelectItem>
                  <SelectItem value="Reserved">Reserved</SelectItem>
                  <SelectItem value="Cleaning">Cleaning</SelectItem>
                  <SelectItem value="Maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* ตัวกรองประเภทห้อง */}
            <div>
              <Label className="pb-2">Room Type</Label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Single">Single</SelectItem>
                  <SelectItem value="Double">Double</SelectItem>
                  <SelectItem value="Twin">Twin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* ตัวกรองชั้น */}
            <div>
              <Label className="pb-2">Floor</Label>
              <Select value={floorFilter} onValueChange={setFloorFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Floors</SelectItem>
                  <SelectItem value="1">Floor 1</SelectItem>
                  <SelectItem value="2">Floor 2</SelectItem>
                  <SelectItem value="3">Floor 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* ============================================ */}
      {/* ROOM DISPLAY - แสดงรายการห้องพัก */}
      {/* ============================================ */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* หัวตาราง */}
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Room</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Floor</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Room Rate</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Guest</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Notes</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
                </tr>
              </thead>
              {/* ข้อมูลในตาราง */}
              <tbody className="divide-y">
                {/* วนลูปแสดงแต่ละแถว */}
                {filteredRooms.map(room => (
                  <tr key={room.roomNumber} className="hover:bg-muted/50">
                    <td className="px-4 py-3 text-sm">
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {room.roomNumber}
                        </span>
                        <span className="text-xs text-gray-400">
                          {room._id}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">{room.type}</td>
                    <td className="px-4 py-3">{room.floor}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[room.status]}`}>
                        {room.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">฿{room.roomRate}</td>
                    <td className="px-4 py-3 text-sm">
                      {room.currentGuest ? (
                        <div className="flex flex-col">
                          <span className="font-medium">
                            {room.currentGuest.firstname} {room.currentGuest.lastname}
                          </span>
                          <span className="text-xs text-gray-400">
                            {room.currentGuest._id}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground max-w-xs truncate">
                      {room.notes || '-'}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2"> {/* เพิ่ม flex gap เพื่อจัดวางปุ่ม */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRoomEdit(room)}
                        >
                          <Edit size={16} />
                        </Button>

                        {/* ปุ่ม Reset Room ใหม่ */}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-orange-500 hover:text-orange-700 hover:bg-orange-50"
                          onClick={() => handleResetRoom(room)}
                          title="Reset Room Status"
                        >
                          <RefreshCw size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>


      {/* EDIT DIALOG - หน้าต่างสำหรับแก้ไขข้อมูลห้อง */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader className="pb-5">
            <DialogTitle>Edit Room {editingRoom?.id}</DialogTitle>
            <DialogDescription>
              Update room details and status
            </DialogDescription>
          </DialogHeader>

          {/* แสดงฟอร์มถ้ามีข้อมูลห้องที่กำลังแก้ไข */}
          {editingRoom && (
            <div className="space-y-4">
              {/* Floor */}
              <div>
                <Label className="pb-2">Floor</Label>
                <Input
                  className="w-1/5"
                  type="number"
                  value={editingRoom.floor}
                  onChange={(e) => setEditingRoom({ ...editingRoom, floor: parseInt(e.target.value) })}
                />
              </div>

              {/* เลือกประเภทห้อง */}
              <div>
                <Label className="pb-2">Room Type</Label>
                <Select
                  value={editingRoom.type}
                  onValueChange={(value) => setEditingRoom({ ...editingRoom, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Single">Single</SelectItem>
                    <SelectItem value="Double">Double</SelectItem>
                    <SelectItem value="Twin">Twin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* เลือก Status */}
              <div>
                <Label className="pb-2">Status</Label>
                <Select
                  value={editingRoom.status}
                  onValueChange={(value) => setEditingRoom({ ...editingRoom, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Available">Available</SelectItem>
                    <SelectItem value="Occupied">Occupied</SelectItem>
                    <SelectItem value="Reserved">Reserved</SelectItem>
                    <SelectItem value="Cleaning">Cleaning</SelectItem>
                    <SelectItem value="Maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* ใส่ราคา */}
              <div>
                <Label className="pb-2">Room Rate</Label>
                <div className="flex items-center gap-2">
                  <Input
                    className="w-1/5"
                    type="number"
                    value={editingRoom.roomRate}
                    onChange={(e) => setEditingRoom({ ...editingRoom, roomRate: parseInt(e.target.value) })}
                  />
                  <span>฿</span>
                </div>
              </div>

              {/* รูปห้อง */}
              <div>
                <Label className="pb-2">Image Link</Label>
                <Input
                  value={editingRoom.imagelink || ''}
                  onChange={(e) => setEditingRoom({ ...editingRoom, imagelink: e.target.value })}
                  placeholder="e.g. https://imageurl.com/001.png"
                />
              </div>

              {/* Size */}
              <div>
                <Label className="pb-2">Size</Label>
                <div className="flex items-center gap-2">
                    <Input
                    className="w-1/5"
                    type="number"
                    value={editingRoom.size || ''}
                    onChange={(e) => setEditingRoom({ ...editingRoom, size: e.target.value })}
                />
                  <span>m²</span>
                </div>
              </div>

              {/* Additionals */}
              <div>
                <Label className="pb-2">Additionals</Label>
                <div className='flex flex-col gap-2'>
                  <Input
                    value={editingRoom.additional1 || ''}
                    onChange={(e) => setEditingRoom({ ...editingRoom, additional1: e.target.value })}
                    placeholder="e.g. Free Wi-Fi, Shower & Toiletries, Capacity N guests"
                  />
                  <Input
                    value={editingRoom.additional2 || ''}
                    onChange={(e) => setEditingRoom({ ...editingRoom, additional2: e.target.value })}
                    placeholder="e.g. Free Wi-Fi, Shower & Toiletries, Capacity N guests"
                  />
                  <Input
                    value={editingRoom.additional3 || ''}
                    onChange={(e) => setEditingRoom({ ...editingRoom, additional3: e.target.value })}
                    placeholder="e.g. Free Wi-Fi, Shower & Toiletries, Capacity N guests"
                  />
                </div>
              </div>

              {/* ใส่หมายเหตุ */}
              <div>
                <Label className="pb-2">Notes</Label>
                <Textarea
                  value={editingRoom.notes}
                  onChange={(e) => setEditingRoom({ ...editingRoom, notes: e.target.value })}
                  placeholder="Add notes about the room"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* ปุ่มด้านล่าง Dialog */}
          <DialogFooter className="flex flex-row! justify-between! items-center w-full mt-6">
             {/* DELETE */}
            <Button className="rounded-lg" variant='destructive' onClick={handleDeleteRoom}>
              Delete
            </Button>

            {/* ปุ่มบันทึก */}
            <Button className="rounded-lg" onClick={handleSaveRoomEdit}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* ADD ROOM DIALOG */}
      <Dialog
      open={isAddRoomDialogOpen}
      onOpenChange={(open) => {
        // 1. อัปเดตสถานะการเปิด/ปิดตามปกติ
        setIsAddRoomDialogOpen(open);

        // 2. ถ้า open เป็น false (กำลังจะปิด) ให้ล้างข้อมูล
        if (!open) {
          setNewRoom({
            roomNumber: '',
            type: 'Single',
            floor: 1,
            roomRate: '',
            notes: '',
            size: '',
            additional1: '',
            additional2: '',
            additional3: ''
          });
          // ถ้ามีการเก็บ Error Message ไว้ ก็ควรล้างตรงนี้ด้วยครับ
          // setErrorMessage("");
        }
      }}>
        <DialogContent className="max-w-md">
          <DialogHeader className="pb-5">
            <DialogTitle>Add Room</DialogTitle>
            <DialogDescription>
              Add new room with details
            </DialogDescription>
          </DialogHeader>

          {/* แสดงฟอร์มถ้ามีการกดปุ่มเพิ่มห้อง */}
          {addingRoom && (
            <div className="space-y-4">
              {/* ใส่เลขห้อง */}
              <div>
                <Label className="pb-2">Room Number</Label>
                <Input
                  className="w-1/5"
                  type="number"
                  value={newRoom.roomNumber}
                  onChange={(e) => setNewRoom({ ...newRoom, roomNumber: e.target.value })}
                  placeholder="e.g. 101"
                />
              </div>

              {/* Floor */}
              <div>
                <Label className="pb-2">Floor</Label>
                <Input
                  className="w-1/5"
                  type="number"
                  value={newRoom.floor}
                  onChange={(e) => setNewRoom({ ...newRoom, floor: parseInt(e.target.value) })}
                />
              </div>

              {/* Room Type */}
              <div>
                <Label className="pb-2">Room Type</Label>
                <Select
                  value={newRoom.type}
                  onValueChange={(value) => setNewRoom({ ...newRoom, type: value })}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Single">Single</SelectItem>
                    <SelectItem value="Double">Double</SelectItem>
                    <SelectItem value="Twin">Twin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Room Rate */}
              <div>
                <Label className="pb-2">Room Rate</Label>
                <div className="flex items-center gap-2">
                  <Input
                    className="w-1/5"
                    type="number"
                    value={newRoom.roomRate}
                    onChange={(e) => setNewRoom({ ...newRoom, roomRate: parseInt(e.target.value) })}
                  />
                  <span>฿</span>
                </div>
              </div>

              {/* imagelink */}
              <div>
                <Label className="pb-2">imagelink</Label>
                <Input
                  value={newRoom.imagelink}
                  onChange={(e) => setNewRoom({ ...newRoom, imagelink: e.target.value })}
                  placeholder="e.g. https://imageurl.com/001.png"
                />
              </div>

              {/* Size */}
              <div>
                <Label className="pb-2">Size</Label>
                <div className="flex items-center gap-2">
                    <Input
                    className="w-1/5"
                    type="number"
                    value={newRoom.size}
                    onChange={(e) => setNewRoom({ ...newRoom, size: e.target.value })}
                />
                  <span>m²</span>
                </div>
              </div>

              {/* Additionals */}
              <div>
                <Label className="pb-2">Additionals</Label>
                <div className='flex flex-col gap-2'>
                  <Input
                    value={newRoom.additional1}
                    onChange={(e) => setNewRoom({ ...newRoom, additional1: e.target.value })}
                    placeholder="e.g. Free Wi-Fi, Shower & Toiletries, Capacity N guests"
                  />
                  <Input
                    value={newRoom.additional2}
                    onChange={(e) => setNewRoom({ ...newRoom, additional2: e.target.value })}
                    placeholder="e.g. Free Wi-Fi, Shower & Toiletries, Capacity N guests"
                  />
                  <Input
                    value={newRoom.additional3}
                    onChange={(e) => setNewRoom({ ...newRoom, additional3: e.target.value })}
                    placeholder="e.g. Free Wi-Fi, Shower & Toiletries, Capacity N guests"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ปุ่มด้านล่าง Dialog */}
          <DialogFooter>
            {/* ปุ่มเพิ่ม */}
            <Button className="rounded-lg" onClick={handleSaveADDRoom}>
              Add Room
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}