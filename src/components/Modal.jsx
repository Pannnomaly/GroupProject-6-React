import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export default function Modal({ isModalOpen, handleCloseModal, room, bookingDate, guestData }) {
  const navigate = useNavigate();

  if (!isModalOpen || !room) return null;

  const nights =
    bookingDate?.from && bookingDate?.to
      ? Math.max(1, Math.round((bookingDate.to - bookingDate.from) / (1000 * 60 * 60 * 24)))
      : 1;

  const totalPrice = (parseInt(room.price) || 0) * nights;

  // Guest Summary String
  const totalAdults = guestData ? guestData.reduce((acc, curr) => acc + curr.adults, 0) : 2;
  const totalChildren = guestData ? guestData.reduce((acc, curr) => acc + curr.children, 0) : 0;
  const guestCountStr = `${totalAdults} Adults${totalChildren > 0 ? `, ${totalChildren} Children` : ""}`;

  const handleProceed = () => {
    // Prepare data to pass to BookingDetail
    const partialReservationData = {
      checkIn: bookingDate.from ? format(bookingDate.from, "dd-MMM-yyyy") : "-",
      checkOut: bookingDate.to ? format(bookingDate.to, "dd-MMM-yyyy") : "-",
      guestCount: guestCountStr,
      nights: `${nights} nights`,
      roomType: room.name,
      roomPricePerNight: room.price,
      totalPrice: totalPrice, // Raw number for calculations
      formattedTotalPrice: `${totalPrice.toLocaleString()} THB`,
      hotelImage: room.image,
      roomDetails: room, // Pass full room object just in case
    };

    // Navigate to BookingDetail page
    navigate("/bookingdetail", { state: partialReservationData });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-10 font-earn">
      <div className="bg-white  p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Booking Summary</h2>
          <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700 text-2xl">
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: Room Image & Basic Info */}
          <div>
            <img
              src={room.image || "https://via.placeholder.com/400x300"}
              alt={room.name}
              className="w-full h-64 object-cover  mb-4 shadow-md"
            />
            <h3 className="font-bold text-2xl text-(--color-main3) mb-2">{room.name}</h3>
            <p className="text-gray-600 text-lg mb-4">{room.type}</p>
            <p className="text-gray-500">
              {room.size} • {room.additional1} • {room.additional2}
            </p>
          </div>

          {/* Right Column: Stay Details & Price */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="bg-gray-50 p-6  border border-gray-100">
              <h4 className="font-semibold text-xl mb-4 text-gray-800">Your Stay</h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Check-in</span>
                  <span className="font-medium">
                    {bookingDate.from ? format(bookingDate.from, "dd MMM yyyy") : "-"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Check-out</span>
                  <span className="font-medium">
                    {bookingDate.to ? format(bookingDate.to, "dd MMM yyyy") : "-"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Duration</span>
                  <span className="font-medium">{nights} Night(s)</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Guests</span>
                  <span className="font-medium">{guestCountStr}</span>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <div className="flex justify-between font-bold text-2xl text-(--color-main3)">
                  <span>Total</span>
                  <span>{totalPrice.toLocaleString()} THB</span>
                </div>
                <p className="text-right text-xs text-gray-500 mt-1">Includes taxes and fees</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleCloseModal}
                className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3  transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleProceed}
                className="w-1/2 bg-(--color-main3) hover:bg-(--color-main2) text-white font-semibold py-3  transition-colors"
              >
                Proceed to Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
