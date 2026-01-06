import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export const useSliderImages = () => {
  useEffect(() => {
    // --- 1. Swiper Logic ---
    const swiper = new Swiper(".mySwiper", {
      // ติดตั้ง modules ที่ต้องการใช้
      modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: -20,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      speed: 800,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false, // แม้คนจะกดเลื่อนเอง แต่ระบบยังจะเล่นต่ออัตโนมัติ
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

    // คืนค่าฟังก์ชันเพื่อ destroy เมื่อ component ถูกถอดออก (unmount)
    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);
};
