import { rooms } from "@/mock-db/roomsType";

export default function RoomCard({ onImageClick }) {
  return (
    <>
      {/* <!-- Rooms Card --> */}
      <section className="w-full max-w-6xl mx-auto mt-16 mb-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white border p-4 shadow-sm">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-40 bg-gray-200 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onImageClick(room.image)}
            />
            <h3 className="mt-3 font-medium">{room.name}</h3>
            <p className="text-sm text-gray-500">{room.type}</p>
            <a href="./booking-page.html">
              <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm transition-colors">
                Booking
              </button>
            </a>
          </div>
        ))}
      </section>

      {/* <section className="w-full max-w-6xl mx-auto mt-16 mb-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="bg-white border p-4 shadow-sm">
          <img
            src="./images/room-detail/family/i-home-D-aY4aGgduE-unsplash.jpg"
            className="open-modal w-full h-40 bg-gray-200"
            onClick={() =>
              onImageClick("./images/room-detail/family/i-home-D-aY4aGgduE-unsplash.jpg")
            }
          />
          <h3 className="mt-3 font-medium">Standard Room</h3>
          <p className="text-sm text-gray-500">Daily bed</p>
          <a href="./booking-page.html">
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
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
            <button className="mt-3 bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm">
              Booking
            </button>
          </a>
        </div>
      </section> */}
    </>
  );
}
