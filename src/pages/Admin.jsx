import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Mail, Phone, Calendar, MapPin, Edit2, ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthContext";

export default function Admin() {
  const { API, fetchUser, user } = useContext(AuthContext);
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        setLoading(true);

        if (user && user._id) {
          const response = await axios.get(`${API}/users/${user._id}`, {
            withCredentials: true,
          });
          setAdminData(response.data.data);
          setEditData(response.data.data);
        }
      } catch (err) {
        console.error("Error fetching admin profile:", err);
        setError("Failed to load admin profile");
      } finally {
        setLoading(false);
      }
    };

    fetchAdminProfile();
  }, [user, API]);

  const handleSaveChanges = async () => {
    try {
      const response = await axios.patch(
        `${API}/users/${user._id}`,
        editData,
        { withCredentials: true }
      );
      setAdminData(response.data.data);
      await fetchUser();
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile");
    }
  };

  const handleCancel = () => {
    setEditData(adminData);
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="m-5 flex flex-col gap-6 w-full md:px-0">
        <div className="bg-primary-foreground rounded-lg p-8 text-center">
          <p className="text-lg">Loading admin profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="m-5 flex flex-col gap-6 w-full md:px-0">
        <div className="bg-primary-foreground rounded-lg p-8 text-center">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="m-5 flex flex-col gap-6 w-full md:px-0">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
        >
          {isEditing ? "Cancel" : <><Edit2 size={18} /> Edit</>}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1 bg-primary-foreground">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold mb-4 overflow-hidden">
              {adminData?.imagelink && adminData.imagelink !== "#" ? (
                <img
                  src={adminData.imagelink}
                  alt="Admin avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{adminData?.firstname?.charAt(0)}{adminData?.lastname?.charAt(0)}</span>
              )}
            </div>

            {/* Name and Role */}
            {isEditing ? (
              <div className="w-full space-y-3">
                <div>
                  <label className="text-sm font-semibold">First Name</label>
                  <input
                    type="text"
                    value={editData.firstname || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, firstname: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Last Name</label>
                  <input
                    type="text"
                    value={editData.lastname || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, lastname: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center">
                  {adminData?.firstname} {adminData?.lastname}
                </h2>
                <p className="text-sm text-muted-foreground font-semibold">
                  {adminData?.role?.toUpperCase()}
                </p>
              </>
            )}

            {/* Contact Info */}
            <div className="w-full mt-6 space-y-3 pt-6 border-t">
              {isEditing ? (
                <div>
                  <label className="text-sm font-semibold">Profile Details</label>
                  <textarea
                    value={editData.detail || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, detail: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    rows="3"
                  />
                </div>
              ) : (
                <>
                  <div className="flex items-start gap-2">
                    <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm break-all">{adminData?.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Joined</p>
                      <p className="text-sm">
                        {new Date(adminData?.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  {adminData?.detail && adminData.detail !== "#" && (
                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground">Details</p>
                      <p className="text-sm mt-1">{adminData.detail}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information */}
        <Card className="lg:col-span-2 bg-primary-foreground">
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* User ID */}
              <div className="pb-6 border-b">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  User ID
                </p>
                <p className="text-lg font-mono bg-muted p-3 rounded">
                  {adminData?._id}
                </p>
              </div>

              {/* Role */}
              <div className="pb-6 border-b">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Account Role
                </p>
                <div className="flex items-center">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {adminData?.role?.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Account Status */}
              <div className="pb-6 border-b">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Account Status
                </p>
                <p className="text-lg">Active</p>
              </div>

              {/* Timestamps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    Created At
                  </p>
                  <p className="text-sm">
                    {new Date(adminData?.createdAt).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    Last Updated
                  </p>
                  <p className="text-sm">
                    {new Date(adminData?.updatedAt).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Edit Mode - Save and Cancel Buttons */}
              {isEditing && (
                <div className="mt-8 flex gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSaveChanges}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}