import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Edit, Search, Plus } from 'lucide-react';

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

  // STATE MANAGEMENT - จัดการข้อมูลและสถานะต่างๆ

  // เก็บข้อมูลห้องพักทั้งหมด (ใช้ useState เพื่อให้สามารถอัพเดทข้อมูลได้)
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
  const [isDialogOpen2, setIsDialogOpen2] = useState(false);


  // FILTER LOGIC - ตรรกะสำหรับกรองข้อมูล
  console.log(rooms);

  const filteredRooms = rooms.filter(room => {
    // ตรวจสอบว่าเลขห้องหรือชื่อผู้เข้าพักตรงกับคำค้นหาหรือไม่
    const matchesSearch = room.roomNumber.toString().includes(searchTerm) ||
                         (room.currentGuest && room.currentGuest.toLowerCase().includes(searchTerm.toLowerCase()));
    // ตรวจสอบว่าตรงกับตัวกรอง status หรือไม่ (ถ้าเลือก 'all' จะไม่กรอง)
    const matchesStatus = statusFilter === 'all' || room.status === statusFilter;
    // ตรวจสอบว่าตรงกับตัวกรองประเภทห้องหรือไม่
    const matchesType = typeFilter === 'all' || room.type === typeFilter;
    // ตรวจสอบว่าตรงกับตัวกรองชั้นหรือไม่
    const matchesFloor = floorFilter === 'all' || room.floor.toString() === floorFilter;

    // ต้องผ่านเงื่อนไขทุกข้อถึงจะแสดงผล (AND logic)
    return matchesSearch && matchesStatus && matchesType && matchesFloor;
  });

  const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/rooms/');
        console.log(response)

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
  const handleEdit = (room) => {
    // คัดลอกข้อมูลห้องที่จะแก้ไข (ใช้ spread operator เพื่อไม่ให้แก้ไขข้อมูลต้นฉบับโดยตรง) และเปิด dialog สำหรับแก้ไข
    setEditingRoom({...room});
    setIsDialogOpen(true);
  };

  // ฟังก์ชันบันทึกการแก้ไข
  const handleSave = async () => {
    try {
      console.log(`roomNumber: ${editingRoom.roomNumber}`)
      await axios.patch(`http://localhost:3000/api/v1/rooms/${editingRoom.roomNumber}`, editingRoom)

      // อัพเดทข้อมูลห้องในรายการ และใช้ .map() เพื่อวนลูปและเปลี่ยนข้อมูลห้องที่มี id ตรงกัน
      setRooms(rooms.map(room =>
        room.roomNumber === editingRoom.roomNumber ? editingRoom : room
      ));
      // ปิด dialog พร้อมล้างข้อมูลห้องที่กำลังแก้ไข
      setIsDialogOpen(false);
      setEditingRoom(null);
    } catch (err) {
      console.error("Error editing rooms data:", err);
      alert("Failed to Edit the data")
    }
  };


  // เมื่อกดปุ่ม add new room
  const handleEditCreateRoom = () => {
    setAddingRoom(true);
    setIsDialogOpen2(true);
  };
  // เมื่อบันทึก new room
  const handleSaveRoom = () => {};

  // ============================================
  // นับจำนวนห้องแต่ละ Status
  // ============================================
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

  // ============================================
  // RENDER - แสดงผล UI
  // ============================================
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
                  <SelectItem value="Suite">Suite</SelectItem>
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
                    <td className="px-4 py-3 font-medium">{room.roomNumber}</td>
                    <td className="px-4 py-3">{room.type}</td>
                    <td className="px-4 py-3">{room.floor}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[room.status]}`}>
                        {room.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">฿{room.roomRate}</td>
                    <td className="px-4 py-3">{room.guest || '-'}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground max-w-xs truncate">
                      {room.notes || '-'}
                    </td>
                    <td className="px-4 py-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(room)}
                      >
                        <Edit size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>


      {/* ============================================ */}
      {/* EDIT DIALOG - หน้าต่างสำหรับแก้ไขข้อมูลห้อง */}
      {/* ============================================ */}
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
                    <SelectItem value="Suite">Suite</SelectItem>
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
                <Label className="pb-2">Room Rate (฿)</Label>
                <Input
                  type="number"
                  value={editingRoom.roomRate}
                  onChange={(e) => setEditingRoom({ ...editingRoom, roomRate: parseInt(e.target.value) })}
                />
              </div>

              {/* ใส่ชื่อผู้เข้าพัก */}
              <div>
                <Label className="pb-2">Guest Name</Label>
                <Input
                  value={editingRoom.guest || ''}
                  onChange={(e) => setEditingRoom({ ...editingRoom, guest: e.target.value })}
                  placeholder="Leave empty if no guest"
                />
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
          <DialogFooter>
            {/* ปุ่มยกเลิก */}
            <Button className="rounded-lg" variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            {/* ปุ่มบันทึก */}
            <Button className="rounded-lg" onClick={handleSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* ADD ROOM DIALOG */}
      <Dialog open={isDialogOpen2} onOpenChange={setIsDialogOpen2}>
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
                  type="number"
                />
              </div>
              {/* เลือกประเภทห้อง */}
              <div>
                <Label className="pb-2">Room Type</Label>
                <Select
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Single">Single</SelectItem>
                    <SelectItem value="Double">Double</SelectItem>
                    <SelectItem value="Suite">Suite</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* ใส่ราคา */}
              <div>
                <Label className="pb-2">Room Rate (฿)</Label>
                <Input
                  type="number"
                />
              </div>

              {/* ใส่หมายเหตุ */}
              <div>
                <Label className="pb-2">Notes</Label>
                <Textarea
                  placeholder="Add notes about the room"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* ปุ่มด้านล่าง Dialog */}
          <DialogFooter>
            {/* ปุ่มยกเลิก */}
            <Button className="rounded-lg" variant="outline" onClick={() => setIsDialogOpen2(false)}>
              Cancel
            </Button>
            {/* ปุ่มบันทึก */}
            <Button className="rounded-lg" onClick={handleSaveRoom}>Add Room</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}