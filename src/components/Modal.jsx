import { useRoomDetailLogic } from "../lib/useRoomDetailLogic";

export default function Modal() {
  useRoomDetailLogic();
  return (
    <>
      {/* <!-- Modal-Detail --> */}
      <section
        id="my-modal"
        className="hidden fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[55%] z-50 max-w-4xl overflow-y-auto max-h-[90vh] bg-[#ede8dc] mt-10 p-8 border-2 border-2-black border-2-opacity-30 shadow"
      >
        <button id="close-modal" className="absolute top-4 right-4 px-3 py-1 bg-black text-white">
          X
        </button>
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
              <button className="mt-4 border-2 border-2-black bg-gray-200 px-3 py-1">
                Reserve
              </button>
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            className="p-3  border-2 w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Address"
          />
          <input
            className="p-3  border-2 w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="About"
          />

          <input
            className="p-3  border-2 w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Location"
          />
          <input
            className="p-3  border-2 w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Location"
          />

          <input
            className="p-3  border-2 w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Work"
          />
          <input
            className="p-3  border-2 w-full focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Work"
          />
        </div>

        <h2 className="text-xl font-semibold mt-12">Step 2</h2>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Payment Method --> */}
          <div className="bg-white p-6 shadow">
            <h3 className="font-medium mb-4">Select a payment method</h3>
            <div className="space-y-3">
              <div className="border-2 p-3  flex items-center gap-3 cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  className="w-10"
                />
                <span>VISA</span>
              </div>
              <div className="border-2 p-3  flex items-center gap-3 cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                  className="w-10"
                />
                <span>Mastercard</span>
              </div>
              <div className="border-2 p-3  flex items-center gap-3 cursor-pointer">
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
              className="w-full border-2 p-3  mb-3 focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Enter Name on Card"
            />
            <input
              className="w-full border-2 p-3  mb-3 focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Card Number"
            />

            <div className="flex gap-4">
              <input
                className="w-1/2 border-2 p-3  focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Expire Date"
              />
              <input
                className="w-1/2 border-2 p-3  focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="CVV"
              />
            </div>

            <div className="flex justify-between mt-6">
              <a href="./room-detail.html" alt="room-detail">
                <button className="px-6 py-2 border-2">Back</button>
              </a>
              <button className="px-6 py-2 bg-black hover:bg-gray-700 text-white">
                Confirm payment
              </button>
            </div>
          </div>
        </div>
      </section>

      <div id="modal-backdrop" className="fixed inset-0 bg-black/50 hidden"></div>
    </>
  );
}
