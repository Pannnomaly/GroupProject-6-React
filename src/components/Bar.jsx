import { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon, Users, Trash2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import GuestControl from "@/components/GuestControl";

// Updated to accept props for room/guest state management
export default function Bar({
  bookingDate,
  setBookingDate,
  rooms: propRooms,
  setRooms: propSetRooms,
}) {
  // Fallback local state if props aren't provided (e.g., used on Homepage)
  const [localRooms, setLocalRooms] = useState([{ id: 1, adults: 2, children: 0, infants: 0 }]);

  // State to control popover open/close
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isMobilePopoverOpen, setIsMobilePopoverOpen] = useState(false);

  const rooms = propRooms || localRooms;
  const setRooms = propSetRooms || setLocalRooms;

  const totalGuests = rooms.reduce((acc, curr) => {
    acc + curr.adults + curr.children + curr.infants;
  }, 0);

  const addRoom = () => {
    setRooms([...rooms, { id: Date.now(), adults: 1, children: 0, infants: 0 }]);
  };

  const updateRoom = (index, field, value) => {
    const newRooms = [...rooms];
    newRooms[index][field] = value;
    setRooms(newRooms);
  };

  const removeRoom = (id) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((room) => room.id !== id));
    }
  };

  const getDateDisplay = () => {
    if (bookingDate?.from) {
      if (bookingDate.to) {
        return `${format(bookingDate.from, "dd MMM yyyy")} - ${format(
          bookingDate.to,
          "dd MMM yyyy",
        )}`;
      }
      return format(bookingDate.from, "dd MMM");
    }
    return "Check In || Check Out";
  };

  return (
    <>
      {/* <!-- Sign In and Register Bar --> */}
      {/* <!-- Mobile --> */}
      <section className="md:hidden flex justify-center w-full mt-10 px-4 font-earn">
        <div className="bg-white shadow-xl border-2 flex flex-col gap-4 px-4 py-5 w-full max-w-md">
          {/* <!-- Guests --> */}
          <Popover open={isMobilePopoverOpen} onOpenChange={setIsMobilePopoverOpen}>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-(--color-main4) bg-(--color-main3) text-white min-w-50">
                <Users className="h-4 w-4 text-white text-shadow-md hover:text-(--color-main6)" />
                <span className="font-medium text-white text-shadow-md hover:text-(--color-main6)">
                  {rooms.length} Room, {totalGuests} Guests
                </span>
              </button>
            </PopoverTrigger>

            <PopoverContent
              className="w-80 p-0 bg-white shadow-2xl border border-gray-200"
              align="start"
            >
              <div className="p-4 space-y-6">
                {rooms.map((room, index) => (
                  <div
                    key={room.id}
                    className="relative space-y-4 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold text-gray-800">Room {index + 1}</div>

                      {rooms.length > 1 && (
                        <button
                          onClick={() => removeRoom(room.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    <GuestControl
                      label="Adults"
                      subLabel="Ages 13 or more"
                      value={room.adults}
                      min={1}
                      onUpdate={(val) => updateRoom(index, "adults", val)}
                    />

                    <GuestControl
                      label="Children"
                      subLabel="Ages 2 - 12"
                      value={room.children}
                      onUpdate={(val) => updateRoom(index, "children", val)}
                    />

                    <GuestControl
                      label="Infants"
                      subLabel="Under 2"
                      value={room.infants}
                      onUpdate={(val) => updateRoom(index, "infants", val)}
                    />
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <button
                    onClick={addRoom}
                    className="text-cyan-700 font-semibold border border-cyan-700 py-2 hover:bg-cyan-50 transition-colors"
                  >
                    Add additional room
                  </button>
                  <button
                    onClick={() => setIsMobilePopoverOpen(false)}
                    className="bg-(--color-main2) text-white font-bold py-2"
                  >
                    Done
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* <!-- Check In / Check Out --> */}
          <div className="w-full flex justify-center">
            <Popover>
              <PopoverTrigger asChild>
                <button className=" bg-(--color-main11) px-4 py-2 hover:bg-(--color-main5) font-medium flex items-center gap-2">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {getDateDisplay()}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  initialFocus
                  mode="range"
                  selected={bookingDate}
                  onSelect={setBookingDate}
                  numberOfMonths={2}
                  disabled={(date) => date < new Date().setHours(0, 0, 0, 0)}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex justify-between items-center w-full">
            <Link to="/login">
              <button className="px-4 py-3 hover:bg-gray-100 font-medium w-full text-left">
                Sign in / Register
              </button>
            </Link>
            <img
              src="https://res.cloudinary.com/dhggmrfe1/image/upload/v1766600151/person_vgy3os.svg"
              height="32px"
              width="32px"
              alt="user-profile"
            />
          </div>
        </div>
      </section>

      {/* <!-- Desktop --> */}
      <section className="hidden md:flex justify-center w-full mt-10 px-4 font-earn">
        <div className="bg-white  shadow-xl border-2 flex items-center gap-4 px-6 py-3 w-full max-w-4xl">
          {/* <!-- Guests --> */}
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-2  px-6 py-2 bg-(--color-main3) hover:bg-(--color-main4)  min-w-50">
                <Users className="h-4 w-4 text-white text-shadow-md hover:text-(--color-main6)" />
                <span className="font-medium text-white text-shdow-md hover:text-(--color-main6)">
                  {rooms.length} Room, {totalGuests} Guests
                </span>
              </button>
            </PopoverTrigger>

            <PopoverContent
              className="w-80 p-0 bg-white shadow-2xl border border-gray-200"
              align="start"
            >
              <div className="p-4 space-y-6">
                {rooms.map((room, index) => (
                  <div
                    key={room.id}
                    className="relative space-y-4 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold text-gray-800">Room {index + 1}</div>

                      {rooms.length > 1 && (
                        <button
                          onClick={() => removeRoom(room.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    <GuestControl
                      label="Adults"
                      subLabel="Ages 13 or more"
                      value={room.adults}
                      min={1}
                      onUpdate={(val) => updateRoom(index, "adults", val)}
                    />

                    <GuestControl
                      label="Children"
                      subLabel="Ages 2 - 12"
                      value={room.children}
                      onUpdate={(val) => updateRoom(index, "children", val)}
                    />

                    <GuestControl
                      label="Infants"
                      subLabel="Under 2"
                      value={room.infants}
                      onUpdate={(val) => updateRoom(index, "infants", val)}
                    />
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <button
                    onClick={addRoom}
                    className="text-black font-semibold border border-cyan-700 py-2 hover:bg-cyan-50 transition-colors"
                  >
                    Add additional room
                  </button>
                  <button
                    onClick={() => setIsPopoverOpen(false)}
                    className="bg-(--color-main2) text-white font-bold py-2"
                  >
                    Done
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <div className="flex flex-1 justify-center items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <button className=" bg-(--color-main11) px-7 py-2 hover:bg-(--color-main5) font-medium text-[#000000] flex items-center gap-2">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {getDateDisplay()}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  initialFocus
                  mode="range"
                  selected={bookingDate}
                  onSelect={setBookingDate}
                  numberOfMonths={2}
                  disabled={(date) => date < new Date().setHours(0, 0, 0, 0)}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex justify-between">
            <Link to="/login">
              <button className="ml-auto px-4 py-2 hover:bg-gray-100 font-medium">
                Sign in / Register
              </button>
            </Link>
            <img
              src="https://res.cloudinary.com/dhggmrfe1/image/upload/v1766600151/person_vgy3os.svg"
              height="32px"
              width="32px"
              alt="user-profile"
            />
          </div>
        </div>
      </section>
    </>
  );
}
