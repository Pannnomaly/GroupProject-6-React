import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Edit, Search } from 'lucide-react';
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

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  confirmed: 'bg-blue-100 text-blue-800 border-blue-300',
  checked_in: 'bg-green-100 text-green-800 border-green-300',
  checked_out: 'bg-gray-100 text-gray-800 border-gray-300',
  cancelled: 'bg-red-100 text-red-800 border-red-300',
};

export default function AdminBookingManagement() {
  const { API } = useOutletContext();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const [editingBooking, setEditingBooking] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.confirmationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         `${booking.firstname} ${booking.lastname}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${API}/bookings/`);
      if (response.data) {
        setBookings(response.data.data);
      }
      setLoading(false);
    } catch (err) {
      console.error("Error fetching bookings:", err);
      setError("Can't fetching bookings data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleBookingEdit = (booking) => {
    setEditingBooking({ ...booking });
    setIsDialogOpen(true);
  };

  const handleSaveBookingEdit = async () => {
    try {
      setLoading(true);
      await axios.patch(
        `${API}/bookings/${editingBooking.confirmationNumber}`,
        editingBooking
      );
      await fetchBookings();
      setIsDialogOpen(false);
      setEditingBooking(null);
      console.log("Update successful and UI refreshed");
    } catch (err) {
      console.error("Error editing booking data:", err);
      alert("Failed to Edit the data");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBooking = async () => {
    if (!window.confirm("Are you sure you want to delete this booking? This action cannot be undone.")) return;

    try {
      const response = await axios.delete(`${API}/bookings/${editingBooking.confirmationNumber}`, {
        withCredentials: true
      });

      if (response.data.success) {
        setIsDialogOpen(false);
        fetchBookings();
        alert("Booking deleted successfully");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert(err.response?.data?.message || "Failed to delete booking");
    }
  };

  const statusCounts = {
    pending: bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    checked_in: bookings.filter(b => b.status === 'checked_in').length,
    checked_out: bookings.filter(b => b.status === 'checked_out').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length,
  };

  if (loading) return <div className="p-10 text-center">Loading bookings...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="m-5 flex flex-col gap-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Booking Management</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(statusCounts).map(([status, count]) => (
          <div key={status} className={`rounded-lg p-4 border-2 ${statusColors[status]}`}>
            <p className="text-sm font-medium capitalize">{status.replace('_', ' ')}</p>
            <p className="text-2xl font-bold">{count}</p>
          </div>
        ))}
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-2">
              <Label className="pb-2">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by confirmation number or guest name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            <div>
              <Label className="pb-2">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="checked_in">Checked In</SelectItem>
                  <SelectItem value="checked_out">Checked Out</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Confirmation #</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Guest</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Room ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Check-in</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Check-out</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Total</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Phone Number</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredBookings.map(booking => (
                  <tr key={booking._id} className="hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium">{booking.confirmationNumber}</td>
                    <td className="px-4 py-3">{`${booking.firstname} ${booking.lastname}`}</td>
                    <td className="px-4 py-3">{booking.roomId}</td>
                    <td className="px-4 py-3">{new Date(booking.checkInDate).toLocaleDateString()}</td>
                    <td className="px-4 py-3">{new Date(booking.checkOutDate).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                        {booking.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-4 py-3">฿{booking.pricing.totalAmount}</td>
                    <td className="px-4 py-3">{booking.phone}</td>
                    <td className="px-4 py-3">{booking.email}</td>
                    <td className="px-4 py-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleBookingEdit(booking)}
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

      {/* Edit dialog-box */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader className="pb-5">
            <DialogTitle>Edit Booking {editingBooking?.confirmationNumber}</DialogTitle>
            <DialogDescription>
              Update booking details and status
            </DialogDescription>
          </DialogHeader>

          {editingBooking && (
            <div className="space-y-4">
              <div>
                <Label className="pb-2">Status</Label>
                <Select
                  value={editingBooking.status}
                  onValueChange={(value) => setEditingBooking({ ...editingBooking, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="checked_in">Checked In</SelectItem>
                    <SelectItem value="checked_out">Checked Out</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="pb-2">Special Request</Label>
                <Input
                  value={editingBooking.specialRequest || ''}
                  onChange={(e) => setEditingBooking({ ...editingBooking, specialRequest: e.target.value })}
                  placeholder="No special request"
                />
              </div>
            </div>
          )}

          <DialogFooter className="flex flex-row! justify-between! items-center w-full mt-6">
            <Button className="rounded-lg" variant='destructive' onClick={handleDeleteBooking}>
              Delete
            </Button>
            <Button className="rounded-lg" onClick={handleSaveBookingEdit}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
