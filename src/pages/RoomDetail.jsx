import { useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Bar from "@/components/Bar";
import SliderImage from "@/components/SliderImage";
import RoomCard from "@/components/RoomCard";
import Modal from "@/components/Modal";
import { useOutletContext } from "react-router-dom";

const RoomDetail = () => {
  const { logout, user } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // We lift the state for Guest Data here so we can pass it to both the Bar (for editing)
  // and the Modal (for display/booking)
  const [guestData, setGuestData] = useState([{ id: 1, adults: 2, children: 0, infants: 0 }]);

  const [bookingDate, setBookingDate] = useState({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 1)), // Default 1 night
  });

  const handleOpenModal = (room) => {
    // 'room' here is the full object from mock-db/roomsType.js passed by RoomCard
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
        rooms={guestData}
        setRooms={setGuestData}
      />
      <SliderImage />
      <RoomCard handleOpenModal={handleOpenModal} />
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