import { useSliderImages } from "../lib/useSliderImages";

export default function SliderImage() {
  useSliderImages();
  return (
    <>
      {/* <!-- IMAGE SLIDER Swiper JS--> */}
      <section className="w-full mt-10">
        <div className="swiper mySwiper w-full max-w-4xl mx-auto">
          <div className="swiper-wrapper">
            {/* <!-- Slide 1 --> */}
            <div className="swiper-slide">
              <img
                src="public/singlebed.jpg"
                className="w-[80%] h-64 object-cover shadow-lg mx-auto transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* <!-- Slide 2 --> */}
            <div className="swiper-slide">
              <img
                src= "https://res.cloudinary.com/dhggmrfe1/image/upload/v1767020569/olexandr-ignatov-w72a24brINI-unsplash_1_pvofpl.jpg"
                className="w-[80%] h-64 object-cover shadow-lg mx-auto transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* <!-- Slide 3 --> */}
            <div className="swiper-slide">
              <img
                src="https://res.cloudinary.com/dhggmrfe1/image/upload/v1767020403/227707266_qoqdcw.png"
                className="w-[80%] h-64 object-cover shadow-lg mx-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* <!-- Pagination --> */}
          <div className="swiper-pagination mt-4 "></div>

          {/* <!-- Navigation --> */}
          <div className="swiper-button-next "></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
}
