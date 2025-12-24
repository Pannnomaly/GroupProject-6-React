import { useEffect } from "react";
import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export const useRoomDetailLogic = () => {
  useEffect(() => {
    // --- 1. Swiper Logic ---
    const swiper = new Swiper(".mySwiper", {
      // ติดตั้ง modules ที่ต้องการใช้
      modules: [Navigation, Pagination, EffectCoverflow],
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2.5,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // --- 2. Modal Logic ---
    const openModalButtons = document.querySelectorAll(".open-modal");
    const myModal = document.getElementById("my-modal");
    const modalBackdrop = document.getElementById("modal-backdrop");
    const closeModal = document.getElementById("close-modal");
    const modalImage = document.getElementById("modal-image");

    const handleOpen = (e) => {
      if (modalImage) modalImage.src = e.target.src;
      myModal?.classList.remove("hidden");
      modalBackdrop?.classList.remove("hidden");
    };

    const handleClose = () => {
      myModal?.classList.add("hidden");
      modalBackdrop?.classList.add("hidden");
    };

    openModalButtons.forEach((btn) => btn.addEventListener("click", handleOpen));
    closeModal?.addEventListener("click", handleClose);
    modalBackdrop?.addEventListener("click", handleClose);

    // Cleanup function
    return () => {
      swiper.destroy(); // ทำลาย instance เมื่อออกจากหน้า
      openModalButtons.forEach((btn) => btn.removeEventListener("click", handleOpen));
      closeModal?.removeEventListener("click", handleClose);
      modalBackdrop?.removeEventListener("click", handleClose);
    };
  }, []);
};