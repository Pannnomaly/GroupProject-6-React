import { rooms } from "@/mock-db/roomsType";
import { Link } from "react-router-dom";
import { Bed, Ruler, Wifi, Bath, Users } from "lucide-react";

export default function RoomCard({ handleOpenModal }) {
  return (
    <section className="w-full max-w-6xl mx-auto mt-16 mb-16 px-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 font-earn">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="bg-white p-4 border-r-1 hover:opacity-90 transition-opacity px-5"
        >
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-40 bg-gray-200 object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => handleOpenModal(room.image)}
          />

          <h2 className="mt-3 text-xl font-bold text-[#6C5B5C]">
            {room.name}
          </h2>

          {/* Room details */}
          <div className="mt-2 space-y-1">
            <p className="flex items-center gap-2 text-sm text-gray-500">
              <Bed size={16} className="text-gray-400" />
              {room.type}
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-500">
              <Ruler size={16} className="text-gray-400" />
              {room.size}
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-500">
              <Wifi size={16} className="text-gray-400" />
              {room.additional1}
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-500">
              <Bath size={16} className="text-gray-400" />
              {room.additional2}
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-500">
              <Users size={16} className="text-gray-400" />
              {room.additional3}
            </p>
          </div>

          {/* Price & Button */}
          <div className=" mt-4 px-1 flex justify-between items-center">
            <p className="text-xl  font-bold  text-[#6D6767]">
              {room.price}$ / night
            </p>

            <Link to="/bookingdetail">
              <button className="bg-(--color-main2) hover:bg-[#b1acad] text-white px-8 py-2 text-sm font-semibold transition-colors">
                SELECT
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}