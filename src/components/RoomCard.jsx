import { rooms } from "@/mock-db/roomsType";
import { Link } from "react-router-dom";

export default function RoomCard({ handleOpenModal }) {
  return (
    <>
      {/* <!-- Rooms Card --> */}
      <section className="w-full max-w-6xl mx-auto mt-16 mb-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 font-earn">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white border p-4 shadow-sm">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-40 bg-gray-200 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleOpenModal(room.image)}
            />
            <h3 className="mt-3 font-medium">{room.name}</h3>
            <p className="text-sm text-gray-500">{room.type}</p>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-xl font-medium text-black">{` ${room.price}$/night`}</p>
              <Link to="/bookingdetail">
                <button className=" bg-(--color-main2) hover:bg-[#333] text-white px-4 py-2 text-sm transition-colors">
                  Booking
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
