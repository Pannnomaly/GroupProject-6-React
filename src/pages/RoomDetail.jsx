import React from "react";
import { useRoomDetailLogic } from "../lib/useRoomDetailLogic";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const RoomDetail = () => {
  useRoomDetailLogic();

  return (
    <>
    <main>
      <Navbar />
      {/* <!-- Sign In and Register Bar --> */}
      {/* <!-- Mobile --> */}
      <section className="md:hidden flex justify-center w-full mt-10 px-4">
        <div className="bg-white shadow-lg rounded-2xl flex flex-col gap-4 px-4 py-5 w-full max-w-md">
          {/* <!-- Guests --> */}
          <div className="relative">
            <Button className="bg-red-500 text-white px-4 py-2 text-sm font-medium">
              2 guests
            </Button>

            {/* <!-- show/hide guests --> */}
            <div className="absolute bg-white shadow-lg p-4 text-sm mt-2 hidden">
              <p>Adults 0</p>
              <p>Child 0</p>
            </div>
          </div>

          {/* <!-- Check In / Check Out --> */}
          <div className="w-full">
            <Button className="border border-black bg-gray-200 w-full px-4 py-2 hover:bg-gray-100 font-medium">
              Check In || Check Out
            </Button>
          </div>

          <div className="flex justify-between items-center w-full">
            <a href="./login.html">
              <Button className="px-4 py-3 hover:bg-gray-100 font-medium w-full text-left">
                Sign in / Register
              </Button>
            </a>
            <img
              src="./images/room-detail/person.svg"
              height="32px"
              width="32px"
              alt="user-profile"
            />
          </div>
        </div>
      </section>

      {/* <!-- Sign In and Register Bar --> */}
      {/* <!-- Desktop --> */}
      <section className="hidden md:flex justify-center w-full mt-10 px-4">
        <div className="bg-white shadow-lg flex items-center gap-4 px-6 py-3 w-full max-w-4xl">
          {/* <!-- Guests --> */}
          <div className="relative">
            <Button className="bg-red-500 text-white px-4 py-2 text-sm font-medium">
              2 guests
            </Button>

            {/* <!-- show/hide guests --> */}
            <div className="absolute bg-white shadow-lg p-4 text-sm mt-2 hidden">
              <p>Adults 0</p>
              <p>Child 0</p>
            </div>
          </div>

          <div className="flex flex-1 justify-center items-center gap-4">
            <Button className="border border-black bg-gray-200 px-4 py-2 hover:bg-gray-100 font-medium">
              Check In || Check Out
            </Button>
          </div>

          <div className="flex justify-between">
            <a href="./login.html">
              <Button className="ml-auto px-4 py-2 hover:bg-gray-100 font-medium">
                Sign in / Register
              </Button>
            </a>
            <img
              src="./images/room-detail/person.svg"
              height="32px"
              width="32px"
              alt="user-profile"
            />
          </div>
        </div>
      </section>

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

      {/* <!-- ROOMS GRID --> */}
      <section className="w-full max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/family/i-home-D-aY4aGgduE-unsplash.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/family/olexandr-ignatov-w72a24brINI-unsplash_1.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/family/point3d-commercial-imaging-ltd-_Swg04CP0bU-unsplash.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/two-bed/138761299.png"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/two-bed/139042512.png"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/two-bed/erin-brundage-w8mrCVlTPhw-unsplash.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/two-bed/pexels-pixabay-276671.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/two-bed/yizack-rangel-O_XmoLGBMrw-unsplash.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/one-bed/227707266.png"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/one-bed/alex-tyson-CMKobKs3mn8-unsplash.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/one-bed/pexels-andrew-3201763.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/one-bed/pexels-andrew-3201763.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/one-bed/valentina-kondrasyuk-FTXDjzOVi7I-unsplash.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/one-bed/valentina-kondrasyuk-FTXDjzOVi7I-unsplash.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>

        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/one-bed/valentina-kondrasyuk-FTXDjzOVi7I-unsplash.jpg"
            className="open-modal w-full h-40 bg-gray-200"
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <Button className="mt-3 bg-black hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </Button>
          </a>
        </div>
      </section>

      {/* <!-- Modal-Detail --> */}
      <section
        id="my-modal"
        className="hidden fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[55%] z-50 max-w-4xl overflow-y-auto max-h-[90vh] bg-[#ede8dc] mt-10 p-8 border border-black border-opacity-30 shadow"
      >
        <Button id="close-modal" className="absolute top-4 right-4 px-3 py-1 bg-black text-white">
          X
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              id="modal-image"
              src="./images/room-detail/family/i-home-D-aY4aGgduE-unsplash.jpg"
              className="shadow cursor-pointer"
            />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Fully Furnished Apartment</h2>
            <p className="text-sm text-gray-600 mt-2">Check in: 12 Mar 2024</p>
            <p className="text-sm text-gray-600 mt-2">Duration: Long (2 - 5 Years)</p>
            <p className="text-sm text-gray-600 mt-2">Guests: 4 Adults</p>
            <p className="text-sm mt-2 font-bold">$ 1000 USD</p>
            <a href="./booking-page.html" alt="booking-page">
              <Button className="mt-4 border border-black bg-gray-200 px-3 py-1">Reserve</Button>
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            className="p-3 rounded border w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Address"
          />
          <input
            className="p-3 rounded border w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="About"
          />

          <input
            className="p-3 rounded border w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Location"
          />
          <input
            className="p-3 rounded border w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Location"
          />

          <input
            className="p-3 rounded border w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Work"
          />
          <input
            className="p-3 rounded border w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Work"
          />
        </div>

        <h2 className="text-xl font-semibold mt-12">Step 2</h2>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Payment Method --> */}
          <div className="bg-white p-6 shadow">
            <h3 className="font-medium mb-4">Select a payment method</h3>
            <div className="space-y-3">
              <div className="border p-3 rounded flex items-center gap-3 cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  className="w-10"
                />
                <span>VISA</span>
              </div>
              <div className="border p-3 rounded flex items-center gap-3 cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                  className="w-10"
                />
                <span>Mastercard</span>
              </div>
              <div className="border p-3 rounded flex items-center gap-3 cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c5/PromptPay-logo.png"
                  className="w-10"
                />
                <span>PromptPay</span>
              </div>
            </div>
          </div>

          {/* <!-- Payment Details --> */}
          <div>
            <h3 className="font-medium mb-4">Payment Details</h3>
            <input
              className="w-full border p-3 rounded mb-3 focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Enter Name on Card"
            />
            <input
              className="w-full border p-3 rounded mb-3 focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Card Number"
            />

            <div className="flex gap-4">
              <input
                className="w-1/2 border p-3 rounded focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Expire Date"
              />
              <input
                className="w-1/2 border p-3 rounded focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="CVV"
              />
            </div>

            <div className="flex justify-between mt-6">
              <a href="./room-detail.html" alt="room-detail">
                <Button className="px-6 py-2 border">Back</Button>
              </a>
              <Button className="px-6 py-2 bg-black hover:bg-gray-700 text-white">
                Confirm payment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div id="modal-backdrop" className="fixed inset-0 bg-black bg-opacity-50 hidden"></div>
      <Footer />
    </main>
    </>
  );
};

export default RoomDetail;