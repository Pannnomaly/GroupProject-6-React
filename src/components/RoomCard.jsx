import { rooms } from "@/mock-db/roomsType";
import { Bed, Ruler, Wifi, Bath, Users } from "lucide-react";

export default function RoomCard({ handleOpenModal }) {
  return (
    <section className="w-full max-w-6xl mx-auto mt-16 mb-16 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 font-earn">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="bg-white p-4 border-r-1 hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
        >
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => handleOpenModal(room)}
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-[#6C5B5C]">{room.name}</h2>
            <p className="text-gray-600 mt-1">{room.type}</p>

            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Bed className="w-4 h-4" />
                <span>{room.type}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Ruler className="w-4 h-4" />
                <span>{room.size}</span>
              </div>
              <div className="space-y-1 mt-2">
                <p className="flex items-center gap-2 text-sm text-gray-600">
                  <Wifi className="w-4 h-4" /> {room.additional1}
                </p>
                <p className="flex items-center gap-2 text-sm text-gray-600">
                  <Bath className="w-4 h-4" /> {room.additional2}
                </p>
                <p className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" /> {room.additional3}
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-semibold">THB {room.price} <span className="text-sm text-gray-500">/ night</span></span>
              <button
                onClick={() => handleOpenModal(room)}
                className="px-4 py-2 bg-(--color-main3) text-white rounded hover:bg-blue-700 transition-colors"
              >
                SELECT ROOM
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}