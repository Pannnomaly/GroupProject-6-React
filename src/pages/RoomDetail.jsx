import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { addDays } from "date-fns";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Bar from "@/components/Bar";
import SliderImage from "@/components/SliderImage";
import RoomCard from "@/components/RoomCard";
import Modal from "@/components/Modal";

const RoomDetail = () => {
  const { logout, user, API} = useOutletContext();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [guestData, setGuestData] = useState([{ id: 1, adults: 2, children: 0, infants: 0 }]);

  const [bookingDate, setBookingDate] = useState(() => ({
    from: new Date(),
    to: addDays(new Date(), 1),
  }));

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API}/rooms`);
        setRooms(res.data.data);
      } catch (err) {
        console.error("Failed to load rooms:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [API]);

  const handleOpenModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar user={user} logout={logout} />
      <Bar 
        bookingDate={bookingDate} 
        setBookingDate={setBookingDate} 
        guestData={guestData}
        setGuestData={setGuestData}
      />
      <SliderImage />
      {loading ? (
        <p className="text-center mt-20">Loading rooms...</p>
      ) : (
        <RoomCard rooms={rooms} handleOpenModal={handleOpenModal} />
      )}
      <Modal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        room={selectedRoom}
        bookingDate={bookingDate}
        guestData={guestData}
      />
      
      <Footer />
    </>
  );
};

export default RoomDetail;
