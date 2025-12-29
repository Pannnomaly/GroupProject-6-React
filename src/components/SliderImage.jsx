import { useRoomDetailLogic } from "../lib/useRoomDetailLogic";

export default function SliderImage() {
  useRoomDetailLogic();
  return (
    <>
      {/* <!-- IMAGE SLIDER Swiper JS--> */}
      <section className="w-full flex justify-center mt-10">
        <div className="swiper mySwiper w-full max-w-4xl">
          <div className="swiper-wrapper">
            {/* <!-- Slide 1 --> */}
            <div className="swiper-slide flex justify-center">
              <img
                src="./images/room-detail/family/i-home-D-aY4aGgduE-unsplash.jpg"
                className="w-[80%] h-64 object-cover shadow-lg"
              />
            </div>

            {/* <!-- Slide 2 --> */}
            <div className="swiper-slide flex justify-center">
              <img
                src="./images/room-detail/one-bed/227707266.png"
                className="w-[80%] h-64 object-cover shadow-lg"
              />
            </div>

            {/* <!-- Slide 3 --> */}
            <div className="swiper-slide flex justify-center">
              <img
                src="./images/room-detail/two-bed/138761299.png"
                className="w-[80%] h-64 object-cover shadow-lg"
              />
            </div>
          </div>

          {/* <!-- Pagination --> */}
          <div className="swiper-pagination mt-4"></div>

          {/* <!-- Navigation --> */}
          <div className="swiper-button-next text-gray-600"></div>
          <div className="swiper-button-prev text-gray-600"></div>
        </div>
      </section>
    </>
  );
}
