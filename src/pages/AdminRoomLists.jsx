import React, { useState } from 'react';
import { Bed, Edit, Search, Grid3x3, List, Filter, Plus, X } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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

// ============================================
// ข้อมูลห้องพักเริ่มต้น (Mock Data)
// ============================================
const initialRooms = [
  { id: 101, type: 'Single', status: 'Available', floor: 1, price: 1200, guest: null, notes: '' },
  { id: 102, type: 'Double', status: 'Occupied', floor: 1, price: 1800, guest: 'John Smith', notes: '' },
  { id: 103, type: 'Suite', status: 'Reserved', floor: 1, price: 3500, guest: 'Sarah Johnson', notes: 'VIP Guest' },
  { id: 104, type: 'Single', status: 'Cleaning', floor: 1, price: 1200, guest: null, notes: '' },
  { id: 201, type: 'Double', status: 'Available', floor: 2, price: 1800, guest: null, notes: '' },
  { id: 202, type: 'Suite', status: 'Occupied', floor: 2, price: 3500, guest: 'Mike Davis', notes: '' },
  { id: 203, type: 'Single', status: 'Maintenance', floor: 2, price: 1200, guest: null, notes: 'AC repair needed' },
  { id: 204, type: 'Double', status: 'Available', floor: 2, price: 1800, guest: null, notes: '' },
  { id: 301, type: 'Suite', status: 'Occupied', floor: 3, price: 3500, guest: 'Lisa Anderson', notes: '' },
  { id: 302, type: 'Double', status: 'Reserved', floor: 3, price: 1800, guest: 'Tom Wilson', notes: '' },
  { id: 303, type: 'Single', status: 'Available', floor: 3, price: 1200, guest: null, notes: '' },
  { id: 304, type: 'Double', status: 'Cleaning', floor: 3, price: 1800, guest: null, notes: '' },
];


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
  const [rooms, setRooms] = useState(initialRooms);


  // เก็บคำค้นหาที่ user พิมพ์
  const [searchTerm, setSearchTerm] = useState('');
  // เก็บตัวกรองต่างๆ
  const [statusFilter, setStatusFilter] = useState('all');  // กรองตาม status
  const [typeFilter, setTypeFilter] = useState('all');      // กรองตามประเภทห้อง
  const [floorFilter, setFloorFilter] = useState('all');    // กรองตามชั้น
  // เก็บข้อมูลห้องที่กำลังแก้ไข
  const [editingRoom, setEditingRoom] = useState(null);
  // เก็บสถานะการเปิด/ปิด dialog สำหรับแก้ไขข้อมูล
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  // FILTER LOGIC - ตรรกะสำหรับกรองข้อมูล

  const filteredRooms = rooms.filter(room => {
    // ตรวจสอบว่าเลขห้องหรือชื่อผู้เข้าพักตรงกับคำค้นหาหรือไม่
    const matchesSearch = room.id.toString().includes(searchTerm) ||
                         (room.guest && room.guest.toLowerCase().includes(searchTerm.toLowerCase()));
    // ตรวจสอบว่าตรงกับตัวกรอง status หรือไม่ (ถ้าเลือก 'all' จะไม่กรอง)
    const matchesStatus = statusFilter === 'all' || room.status === statusFilter;
    // ตรวจสอบว่าตรงกับตัวกรองประเภทห้องหรือไม่
    const matchesType = typeFilter === 'all' || room.type === typeFilter;
    // ตรวจสอบว่าตรงกับตัวกรองชั้นหรือไม่
    const matchesFloor = floorFilter === 'all' || room.floor.toString() === floorFilter;
    // ต้องผ่านเงื่อนไขทุกข้อถึงจะแสดงผล (AND logic)

    return matchesSearch && matchesStatus && matchesType && matchesFloor;
  });


  // EVENT HANDLERS - ฟังก์ชันจัดการ Events ต่างๆ
  // ฟังก์ชันเมื่อกดปุ่มแก้ไขห้อง
  const handleEdit = (room) => {
    // คัดลอกข้อมูลห้องที่จะแก้ไข (ใช้ spread operator เพื่อไม่ให้แก้ไขข้อมูลต้นฉบับโดยตรง)
    setEditingRoom({ ...room });
    // เปิด dialog สำหรับแก้ไข
    setIsDialogOpen(true);
  };

  // ฟังก์ชันบันทึกการแก้ไข
  const handleSave = () => {
    // อัพเดทข้อมูลห้องในรายการ
    // ใช้ .map() เพื่อวนลูปและเปลี่ยนข้อมูลห้องที่มี id ตรงกัน
    setRooms(rooms.map(room => 
      room.id === editingRoom.id ? editingRoom : room
    ));
    // ปิด dialog
    setIsDialogOpen(false);
    // ล้างข้อมูลห้องที่กำลังแก้ไข
    setEditingRoom(null);
  };

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



  // ============================================
  // RENDER - แสดงผล UI
  // ============================================
  return (
    <div className="m-5 flex flex-col gap-6 w-full">
      {/* HEADER - ส่วนหัวของหน้า */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Room Management</h1>
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
                  <th className="px-4 py-3 text-left text-sm font-medium">Price</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Guest</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Notes</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
                </tr>
              </thead>
              {/* ข้อมูลในตาราง */}
              <tbody className="divide-y">
                {/* วนลูปแสดงแต่ละแถว */}
                {filteredRooms.map(room => (
                  <tr key={room.id} className="hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium">{room.id}</td>
                    <td className="px-4 py-3">{room.type}</td>
                    <td className="px-4 py-3">{room.floor}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[room.status]}`}>
                        {room.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">฿{room.price}</td>
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
                <Label className="pb-2">Price (฿)</Label>
                <Input
                  type="number"
                  value={editingRoom.price}
                  onChange={(e) => setEditingRoom({ ...editingRoom, price: parseInt(e.target.value) })}
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
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            {/* ปุ่มบันทึก */}
            <Button onClick={handleSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}