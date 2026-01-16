import { Link } from "react-router-dom";
import { rooms } from "@/mock-db/roomsType";
import { Bed, Ruler, Wifi, Bath, Users } from "lucide-react";

export default function RoomCard({ handleOpenModal }) {
  return (
    <section className="w-full max-w-6xl mx-auto mt-20 mb-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-12 font-earn">
      {rooms.slice(0, 3).map((room) => (
        <div
          key={room.id}
          className="bg-white border shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Image */}
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-64 object-cover cursor-pointer"
            onClick={() => handleOpenModal(room.image)}
          />

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#6C5B5C] mb-3">
              {room.name}
            </h2>

            {/* Room details */}
            <div className="space-y-2 mb-6">
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <Bed size={16} /> {room.type}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <Ruler size={16} /> {room.size}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <Wifi size={16} /> {room.additional1}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <Bath size={16} /> {room.additional2}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <Users size={16} /> {room.additional3}
              </p>
            </div>

            {/* Price & Button */}
            <div className="flex justify-between items-center border-t pt-4">
              <p className="text-xl font-bold text-[#6D6767]">
                {room.price}$ <span className="text-sm font-light">/ night</span>
              </p>

              <Link to="/bookingdetail">
                <button className="bg-(--color-main2) hover:bg-[#b1acad] text-white px-8 py-2 text-sm font-semibold transition-colors">
                  SELECT
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}