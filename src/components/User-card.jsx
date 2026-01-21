import { format } from "date-fns";

export default function UserCard({ bookings }) {
  const formatDate = (dateString) => {
    if (!dateString) return "yyyy-mm-dd";
    return format(new Date(dateString), "dd/MM/yyyy");
  };
  return (
    <div className="md:flex md:flex-col md:gap-y-3">
      {bookings.map((booking) => (
        <div key={booking?._id}>
          <div className="flex flex-col md:flex-row items-center gap-x-15 p-3 hover:bg-(--color-main3) border-b-2 mb-2 text-shadow-2xs transition duration-300 ease-in-out">
            <div>
              <img
                src={booking?.roomId?.imagelink}
                width="175"
                className="shadow-(--box-shadow) object-cover aspect-square"
              />
            </div>
            <div className="flex flex-col gap-y-0.5">
              <div className="flex items-center gap-x-3">
                <p className="text-2xl  text-black font-semibold ">
                  {booking?.roomId?.roomNumber
                    ? booking?.roomId?.roomNumber
                    : "101"}
                </p>
                <p className="text-lg font-lg text-black mt-1.25">
                  {`(${booking?.roomId?.type
                    ? booking?.roomId?.type
                    : "single"})`}
                </p>
              </div>
              <div>
                <span className="font-semibold text-lg text-black">
                  Check in:{" "}
                </span>
                <span className="text-black">
                  {formatDate(booking?.checkInDate) ? formatDate(booking?.checkInDate) : "yyyy-mm-dd"}
                </span>
              </div>
              <div>
                <span className="font-semibold text-lg text-black">
                  Check out:{" "}
                </span>
                <span className="text-black">
                  {formatDate(booking?.checkOutDate) ? formatDate(booking?.checkOutDate) : "yyyy-mm-dd"}
                </span>
              </div>
              <div>
                <span className="font-semibold text-lg text-black">
                  {`Night(s)`}:{" "}
                </span>
                <span className="text-black">
                  {booking?.nights ? booking?.nights : "1"}
                </span>
              </div>
              <div>
                <p className="font-semibold text-lg text-black ">
                  THB{" "}
                  {booking?.pricing?.totalAmount
                    ? booking?.pricing?.totalAmount
                    : "0"}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
