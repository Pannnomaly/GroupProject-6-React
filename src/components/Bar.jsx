import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon, Users, Trash2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import GuestControl from "@/components/GuestControl";
import { AuthContext } from "@/contexts/AuthContext";

export default function Bar({ bookingDate, setBookingDate, guestData, setGuestData }) {
  const { authLoading, user } = useContext(AuthContext);

  // State to control popover open/close
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isMobilePopoverOpen, setIsMobilePopoverOpen] = useState(false);

  const totalGuests = guestData.reduce(
    (acc, curr) => acc + curr.adults + curr.children + curr.infants,
    0,
  );

  const addGuests = () => {
    setGuestData([...guestData, { id: Date.now(), adults: 1, children: 0, infants: 0 }]);
  };

  const updateGuests = (index, field, value) => {
    const newGuests = [...guestData];
    newGuests[index][field] = value;
    setGuestData(newGuests);
  };

  const removeGuests = (id) => {
    if (guestData.length > 1) {
      setGuestData(guestData.filter((room) => room.id !== id));
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
                  {guestData.length} Room, {totalGuests} {`Guest(s)`}
                </span>
              </button>
            </PopoverTrigger>

            <PopoverContent
              className="w-80 p-0 bg-white shadow-2xl border border-gray-200"
              align="start"
            >
              <div className="p-4 space-y-6">
                {guestData.map((data, index) => (
                  <div
                    key={data.id}
                    className="relative space-y-4 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold text-gray-800">Room {index + 1}</div>

                      {guestData.length > 1 && (
                        <button
                          onClick={() => removeGuests(data.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    <GuestControl
                      label="Adults"
                      subLabel="Ages 13 or more"
                      value={data.adults}
                      min={1}
                      onUpdate={(val) => updateGuests(index, "adults", val)}
                    />

                    <GuestControl
                      label="Children"
                      subLabel="Ages 2 - 12"
                      value={data.children}
                      onUpdate={(val) => updateGuests(index, "children", val)}
                    />

                    <GuestControl
                      label="Infants"
                      subLabel="Under 2"
                      value={data.infants}
                      onUpdate={(val) => updateGuests(index, "infants", val)}
                    />
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <button
                    onClick={addGuests}
                    className="text-cyan-700 font-semibold border border-(--color-main3) py-2 hover:bg-cyan-50 transition-colors"
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
                {authLoading ? (
                  <span className="text-base">Checking auth session. . .</span>
                ) : user ? (
                  <>
                    <span className="text-base text-(--color-main6)">
                      Logged in as <span>{user.firstname}</span>
                    </span>
                  </>
                ) : (
                  "Login / Register"
                )}
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
                  {guestData.length} Room, {totalGuests} {`Guest(s)`}
                </span>
              </button>
            </PopoverTrigger>

            <PopoverContent
              className="w-80 p-0 bg-white shadow-2xl border border-gray-200"
              align="start"
            >
              <div className="p-4 space-y-6">
                {guestData.map((data, index) => (
                  <div
                    key={data.id}
                    className="relative space-y-4 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold text-gray-800">Room {index + 1}</div>

                      {guestData.length > 1 && (
                        <button
                          onClick={() => removeGuests(data.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    <GuestControl
                      label="Adults"
                      subLabel="Ages 13 or more"
                      value={data.adults}
                      min={1}
                      onUpdate={(val) => updateGuests(index, "adults", val)}
                    />

                    <GuestControl
                      label="Children"
                      subLabel="Ages 2 - 12"
                      value={data.children}
                      onUpdate={(val) => updateGuests(index, "children", val)}
                    />

                    <GuestControl
                      label="Infants"
                      subLabel="Under 2"
                      value={data.infants}
                      onUpdate={(val) => updateGuests(index, "infants", val)}
                    />
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <button
                    onClick={addGuests}
                    className="text-black font-semibold border border-(--color-main3) py-2 hover:bg-cyan-50 transition-colors"
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
                {authLoading ? (
                  <span className="text-base">Checking auth session. . .</span>
                ) : user ? (
                  <>
                    <span className="text-base">
                      Logged in as <span>{user.firstname}</span>
                    </span>
                  </>
                ) : (
                  "Login / Register"
                )}
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
