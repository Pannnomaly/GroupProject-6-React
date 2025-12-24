import { Link } from 'react-router-dom';
import ConfirmationHeader from '@/components/confirmation/ConfirmationHeader';
import HotelImage from '@/components/confirmation/HotelImage';
import GuestStayDetails from '@/components/confirmation/GuestStayDetails';
import RoomDetails from '@/components/confirmation/RoomDetails';
import SpecialRequest from '@/components/confirmation/SpecialRequest';
import HotelAddress from '@/components/confirmation/HotelAddress';
import ConfirmationFooter from '@/components/confirmation/ConfirmationFooter';

const BookingConfirm = () => {
  const reservationData = {
    confirmationNumber: 'ABC-123-4567',
    guestName: 'Tata Mcrae',
    checkIn: '25-Dec-2025',
    checkOut: '1-Jan-2026',
    guestCount: '2 Adults',
    nights: '6 nights',
    roomType: 'Double Room',
    amount: '7,000 THB (includes taxes and service charges)',
    specialRequest: `High floor room preferred with ocean view.
Request for extra pillows and non-smoking room.
Early check-in if available.
Celebrating anniversary - room decoration would be appreciated.`,
    hotelAddress: 'MonkeyDB Hotel @BKK, 123 Rama1 Road, Pathumwan, Bangkok, 10330 Thailand',
    hotelImage: '/images/pic/1bed.jpg'
  };

  const handleConfirm = () => {
    // Handle confirmation logic
    console.log('Reservation confirmed');
  };

  return (
    <div className="p-4">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link to="/booking">
            <button className="p-2">
              <img 
                src="/images/back-arrow-direction.svg" 
                alt="back" 
                width="40" 
                height="40" 
                className="cursor-pointer"
              />
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <ConfirmationHeader confirmationNumber={reservationData.confirmationNumber} />
          
          <HotelImage 
            imageUrl={reservationData.hotelImage} 
            alt="Hotel Room" 
          />

          <div className="p-6 space-y-6">
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
          </div>

          <ConfirmationFooter onConfirm={handleConfirm} />

          <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
            <p>
              For reservations: MonkeyDB Hotel @BKK | Email: reservations@monkeydb.com | 
              Phone: +66 94 389 7892
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirm;