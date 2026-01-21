import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from "./User-card";
import { AuthContext } from '@/contexts/AuthContext';

export default function UserComponent()
{
  const { user, API, fetchUser } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const LIMIT = 3;
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    firstname: "",
    lastname: "",
    imagelink: "",
    email: "",
    detail: "",
  });

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setEditForm({
      firstname: user.firstname || "",
      lastname: user.lastname || "",
      imagelink: user.imagelink || "",
      email: user.email || "",
      detail: user.detail || "",
    });
  };

  const handleEditSave = async (id) => {
    try {
      await axios.patch(`${API}/users/${id}`, editForm, {withCredentials: true});
      await fetchUser();
      setEditId(null);
    } catch (error) {
      console.error("Error updating user:", error);
      alert(error.response?.data?.message || "Failed to update user");
    }
  };

  const handleEditCancel = () => {
    setEditId(null);
  };

  const handleCancelBooking = async (confirmationNumber) => {
    console.log(confirmationNumber);
    
  const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
  if (!confirmCancel) return;

  try {
    await axios.delete(
      `${API}/bookings/${confirmationNumber}`,
      { withCredentials: true }
    );

    const res = await axios.get(
      `${API}/bookings/my-bookings?page=${page}&limit=${LIMIT}`,
      { withCredentials: true }
    );
    setBookings(res.data.data);

  } catch (error) {
    alert(error.response?.data?.message || "Cancel failed");
  }
};

  useEffect(() => {
  if (!user) return;

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        `${API}/bookings/my-bookings?page=${page}&limit=${LIMIT}`,
        { withCredentials: true }
      );
      setBookings(res.data.data);
      setTotalPages(res.data.pagination.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  fetchBookings();
}, [user, API, page]);


  return (
    <div className="w-full h-full flex flex-col justify-center items-center font-earn lg:flex-row lg:justify-center lg:items-stretch">
      <div className="w-[90%] lg:w-[25%] bg-(--color-main3) py-10 mt-10 lg:mb-10 gap-10 flex flex-col justify-center items-center text-(--color-main12) shadow-(--box-shadow)">
        <div className="w-full flex justify-end pr-10">
          <button
            onClick={() => handleEdit(user)}
            className="flex justify-center items-center hover:bg-(--color-main2) transition duration-300 ease-in-out rounded-full object-cover aspect-square w-9 cursor-pointer"
            title="Edit user info"
          >
            <img
              src="gear-settings.svg"
              alt="gear logo"
              width="30"
              height="30"
            />
          </button>
        </div>
        <div className="w-[90%] flex flex-col justify-center items-center">
          <div>
            <img
              src={user?.imagelink}
              alt="User Portrait"
              width="175"
              height="175"
              className="rounded-full object-cover aspect-square shadow-(--box-shadow) border-2 border-(--color-main3)"
            />
          </div>
          <div className="w-[90%] flex flex-col justify-center items-start mt-10 text-xl text-shadow-2xs">
            <p className="text-xl">
              <span className="font-semibold">First name: </span>
              <span className="ml-2">{user?.firstname || "John"}</span>
            </p>
            <p className="mt-2 text-xl">
              <span className="font-semibold">Last name: </span>
              <span className="ml-2">{user?.lastname || "Doe"}</span>
            </p>
            <p className="mt-2 text-xl">
              <span className="font-semibold">Email: </span>
              <span className="ml-2">{user?.email || "johndoe@example.com"}</span>
            </p>
            <p className="mt-5 text-center">
              {user?.detail || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet nulla iure nam odit animi!"}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[65%] lg:p-5 bg-white lg:mt-10 mb-10 py-10 flex flex-col justify-center items-center">
        <div className="w-[80%] flex flex-col">
          <div>
            <p className="text-4xl text-black mt-5 font-bold text-shadow-2xs">
              Welcome, {user?.firstname || "John"} {user?.lastname || "Doe"}!
            </p>
          </div>

          <div className="mt-3 border border-solid border-(--color-main3) opacity-50"></div>
        </div>
        <div className="w-[80%] flex flex-col mt-3">
          <div className="mb-5">
            <h3 className="text-black text-xl font-semibold text-shadow-2xs">
              Booking History
            </h3>
          </div>
          <div>
            <UserCard
              bookings={bookings}
              onCancel={handleCancelBooking}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-10 mt-3">
          <div className="flex justify-center items-center w-8 bg-(--color-main3) rounded-full object-cover aspect-square shadow-(--box-shadow) hover:bg-(--color-main2) transition duration-300 ease-in-out cursor-pointer">
            <button className="cursor-pointer disabled:cursor-auto disabled:opacity-30" disabled={page === 1} onClick={() => setPage(prev => Math.max(prev - 1, 1))}>
              <img
                src="arrow-forward-navigation.svg"
                alt="backward"
                width="25px"
                height="25px"
                className="scale-x-[-1]"
              />
            </button>
          </div>
          <span className="text-black text-shadow-2xs">
            Page {page} / {totalPages}
          </span>
          <div className="flex justify-center items-center w-8 bg-(--color-main3) rounded-full object-cover aspect-square shadow-(--box-shadow) hover:bg-(--color-main2) transition duration-300 ease-in-out cursor-pointer">
            <button className="cursor-pointer disabled:cursor-auto disabled:opacity-30" disabled={page === totalPages} onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}>
              <img
                src="arrow-forward-navigation.svg"
                alt="backward"
                width="25px"
                height="25px"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit User Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={editForm.firstname}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--color-main3)"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={editForm.lastname}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--color-main3)"
                  placeholder="Enter last name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Image Link</label>
                <input
                  type="text"
                  name="imagelink"
                  value={editForm.imagelink}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--color-main3)"
                  placeholder="Enter image URL"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Detail</label>
                <textarea
                  name="detail"
                  value={editForm.detail}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--color-main3) resize-none"
                  placeholder="Enter user details"
                  rows="4"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => handleEditSave(editId)}
                className="flex-1 bg-(--color-main3) hover:bg-(--color-main2) text-white font-semibold py-2 px-4 transition duration-300"
              >
                Save Changes
              </button>
              <button
                onClick={handleEditCancel}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
