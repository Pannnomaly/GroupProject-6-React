export default function UserCard({ bookings }) {
  return (
    <div className="md:flex md:flex-col md:gap-y-3">
      {bookings.map((booking) => (
      <div className="flex flex-col md:flex-row items-center gap-x-10 p-3 hover:bg-(--color-main3) border-b-2 mb-2 text-shadow-2xs transition duration-300 ease-in-out">
        <div>
          <img
            src={booking?.roomId?.imagelink}
            width="175"
            height="175"
            className="shadow-(--box-shadow)"
          />
        </div>
        <div className="flex flex-col gap-y-0.5 mt-8 ">
          <div>
            <p className="text-2xl  text-black font-semibold ">{booking?.roomId?.roomNumber ? booking?.roomId?.roomNumber : "101"}</p>
          </div>
          <div>
            <span className="font-semibold text-lg text-black">Check in: </span>
            <span className="text-black">{booking?.checkInDate ? booking?.checkInDate : "yyyy-mm-dd"}</span>
          </div>
          <div>
            <span className="font-semibold text-lg text-black">Check out: </span>
            <span className="text-black">{booking?.checkOutDate ? booking?.checkOutDate : "yyyy-mm-dd"}</span>
          </div>
          <div>
            <p className="font-semibold text-lg text-black ">$ {booking?.pricing?.totalAmount ? booking?.pricing?.totalAmount : "0"} USD</p>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
