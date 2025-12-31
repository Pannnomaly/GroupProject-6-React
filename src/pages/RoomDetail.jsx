import { useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Bar from "@/components/Bar";
import SliderImage from "@/components/SliderImage";
import RoomCard from "@/components/RoomCard";
import Modal from "@/components/Modal";

const RoomDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenModal = (imgSrc) => {
    setSelectedImage(imgSrc); // เก็บ URL รูปที่คลิก
    setIsModalOpen(true); // เปิด Modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // ปิด Modal
  };

  return (
    <>
      <Navbar />
      <Bar />
      <SliderImage />
      <RoomCard onImageClick={handleOpenModal} />
      <Modal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        imageSrc={selectedImage}
      />
      <Footer />
    </>
  );
};

export default RoomDetail;
