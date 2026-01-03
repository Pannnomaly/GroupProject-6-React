import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function Bar({ bookingDate, setBookingDate }) {
  // ฟังก์ชันช่วยแสดงข้อความบนปุ่ม
  const getDateDisplay = () => {
    if (bookingDate?.from) {
      if (bookingDate.to) {
        return `${format(bookingDate.from, "dd MMM yyyy")} - ${format(
          bookingDate.to,
          "dd MMM yyyy"
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
          <div className="relative">
            <button className="bg-(--color-main1) text-white px-4 py-2 text-sm font-medium">
              2 guests
            </button>

            {/* <!-- show/hide guests --> */}
            <div className="absolute bg-white shadow-lg p-4 text-sm mt-2 hidden">
              <p>Adults 0</p>
              <p>Child 0</p>
            </div>
          </div>

          {/* <!-- Check In / Check Out --> */}
          <div className="w-full flex justify-center">
            <Popover>
              <PopoverTrigger asChild>
                <button className="border border-black bg-(--color-main11) px-4 py-2 hover:bg-(--color-main5) font-medium flex items-center gap-2">
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
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex justify-between items-center w-full">
            <a href="./login.html">
              <button className="px-4 py-3 hover:bg-gray-100 font-medium w-full text-left">
                Sign in / Register
              </button>
            </a>
            <img
              src="https://res.cloudinary.com/dhggmrfe1/image/upload/v1766600151/person_vgy3os.svg"
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
        <div className="bg-white shadow-xl border-2 flex items-center gap-4 px-6 py-3 w-full max-w-4xl">
          {/* <!-- Guests --> */}
          <div className="relative">
            <button className="bg-(--color-main1) text-white px-4 py-2 text-sm font-medium">
              2 guests
            </button>

            {/* <!-- show/hide guests --> */}
            <div className="absolute bg-white shadow-lg p-4 text-sm mt-2 hidden">
              <p>Adults 0</p>
              <p>Child 0</p>
            </div>
          </div>

          <div className="flex flex-1 justify-center items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <button className="border border-black bg-(--color-main11) px-4 py-2 hover:bg-(--color-main5) font-medium flex items-center gap-2">
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
