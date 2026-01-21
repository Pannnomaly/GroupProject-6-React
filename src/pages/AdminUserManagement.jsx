import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Edit, Trash, Plus } from 'lucide-react';
import { useOutletContext } from "react-router-dom";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminUserManagement() {
  const { API } = useOutletContext();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'user',
  });

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API}/users/`);
      if (response.data) {
        setUsers(response.data.data);
      }
      setLoading(false);

    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Can't fetching users data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      user.firstname.toLowerCase().includes(searchTermLower) ||
      user.email.toLowerCase().includes(searchTermLower)
    );
  });

  const handleEditClick = (user) => {
    setEditingUser(user);
    setIsEditDialogOpen(true);
  };

  const handleSaveUser = async () => {
    if (!editingUser) return;

    try {
      await axios.patch(`${API}/users/${editingUser._id}`,
      {
        firstname: editingUser.firstname,
        lastname: editingUser.lastname,
        role: editingUser.role
      },
      { withCredentials: true }
    );

    await fetchUsers();
    setIsEditDialogOpen(false);
    setEditingUser(null);
    } catch (err) {
      console.error("Error updating user:", err);
      alert("Failed to update user.");
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${API}/users/${userId}`,
          { withCredentials: true }
        );
        await fetchUsers();
      } catch (err) {
        console.error("Error deleting user:", err);
        alert("Failed to delete user.");
      }
    }
  };

  const handleCreateUser = async () => {
    try {
      await axios.post(`${API}/users/`, newUserData);
      await fetchUsers();
      setIsCreateDialogOpen(false);
      setNewUserData({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: 'user',
      });
    } catch (err) {
      console.error("Error creating user:", err);
      alert(err.response?.data?.message || "Failed to create user.");
    }
  };

  if (loading) return <div className="p-10 text-center">Loading users...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="m-5 flex flex-col gap-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Button
          className="gap-2 rounded-lg"
          onClick={() => setIsCreateDialogOpen(true)}
        >
          <Plus size={16} />
          Create User
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="md:col-span-2">
              <Label className="pb-2">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by username or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
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
                  <th className="px-4 py-3 text-left text-sm font-medium">Username</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Role</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Created At</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredUsers.map(user => (
                  <tr key={user._id} className="hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium">{`${user.firstname} ${user.lastname}`}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.role}</td>
                    <td className="px-4 py-3">{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <Button variant="ghost" size="sm" onClick={() => handleEditClick(user)}>
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteUser(user._id)}>
                        <Trash size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader className="pb-5">
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Update user details.
            </DialogDescription>
          </DialogHeader>

          {editingUser && (
            <div className="space-y-4">
              <div>
                <Label className="pb-2">First Name</Label>
                <Input
                value={editingUser.firstname}
                onChange={(e) => setEditingUser({ ...editingUser, firstname: e.target.value })}
                />
              </div>
              <div>
                <Label className="pb-2">Last Name</Label>
                <Input
                value={editingUser.lastname}
                onChange={(e) => setEditingUser({ ...editingUser, lastname: e.target.value })}
                />
              </div>
              <div>
                <Label className="pb-2">Email</Label>
                <Input value={editingUser.email} disabled />
              </div>
              <div>
                <Label className="pb-2">Role</Label>
                <Select
                  value={editingUser.role}
                  onValueChange={(value) => setEditingUser({ ...editingUser, role: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button onClick={handleSaveUser}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader className="pb-5">
            <DialogTitle>Create New User</DialogTitle>
            <DialogDescription>
              Enter details for the new user.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label className="pb-2">First Name</Label>
              <Input
                value={newUserData.firstname}
                onChange={(e) => setNewUserData({ ...newUserData, firstname: e.target.value })}
              />
            </div>
            <div>
              <Label className="pb-2">Last Name</Label>
              <Input
                value={newUserData.lastname}
                onChange={(e) => setNewUserData({ ...newUserData, lastname: e.target.value })}
              />
            </div>
            <div>
              <Label className="pb-2">Email</Label>
              <Input
                type="email"
                value={newUserData.email}
                onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
              />
            </div>
            <div>
              <Label className="pb-2">Password</Label>
              <Input
                type="password"
                value={newUserData.password}
                onChange={(e) => setNewUserData({ ...newUserData, password: e.target.value })}
              />
            </div>
            <div>
              <Label className="pb-2">Role</Label>
              <Select
                value={newUserData.role}
                onValueChange={(value) => setNewUserData({ ...newUserData, role: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={handleCreateUser}>Create User</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}