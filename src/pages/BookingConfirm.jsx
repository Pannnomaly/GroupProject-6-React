import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackButton from '@/components/confirmation/BackButton';
import ConfirmationHeader from '@/components/confirmation/ConfirmationHeader';
import HotelImage from '@/components/confirmation/HotelImage';
import GuestStayDetails from '@/components/confirmation/GuestStayDetails';
import RoomDetails from '@/components/confirmation/RoomDetails';
import SpecialRequest from '@/components/confirmation/SpecialRequest';
import HotelAddress from '@/components/confirmation/HotelAddress';
import ConfirmButton from '@/components/confirmation/ConfirmButton';
import ConfirmationFooter from '@/components/confirmation/ConfirmationFooter';
import { reservationData } from '@/data/reservationData';

const BookingConfirm = () => {
  // Using data from reservationData.js
  const {
    confirmationNumber,
    guestName,
    checkIn,
    checkOut,
    guestCount,
    nights,
    roomType,
    amount,
    specialRequest,
    hotelAddress,
    hotelImage
  } = reservationData;

  const handleConfirm = () => {
    console.log('Reservation confirmed');
  };

  return (
    <div className="font-earn">
      <Navbar />

      <BackButton to="/booking" label="Back to Booking" />

      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <ConfirmationHeader confirmationNumber={reservationData.confirmationNumber} />

        <HotelImage
                src={reservationData.hotelImage}
                alt={`${reservationData.roomType} - Room Preview`}
              />

              <div className="p-8 space-y-8">
                <GuestStayDetails
                  guestName={reservationData.guestName}
                  checkIn={reservationData.checkIn}
                  checkOut={reservationData.checkOut}
                  guestCount={reservationData.guestCount}
                  nights={reservationData.nights}
                />

                <RoomDetails
                  roomType={reservationData.roomType}
                  amount={reservationData.amount}
                />

                <SpecialRequest request={reservationData.specialRequest} />

                <HotelAddress address={reservationData.hotelAddress} />

                <ConfirmButton
                  onClick={handleConfirm}
                  className="mt-8"
                />
              </div>
              <ConfirmationFooter />
              </div>
              <Footer />
    </div>
  );
};

export default BookingConfirm;