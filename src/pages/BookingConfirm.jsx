import { useLocation, Navigate, useNavigate, useOutletContext } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackButton from '@/components/confirmation/BackButton';
import ConfirmationHeader from '@/components/confirmation/ConfirmationHeader';
import HotelImage from '@/components/confirmation/HotelImage';
import GuestStayDetails from '@/components/confirmation/GuestStayDetails';
import RoomDetails from '@/components/confirmation/RoomDetails';
import SpecialRequest from '@/components/confirmation/SpecialRequest';
import HotelAddress from '@/components/confirmation/HotelAddress';
import ConfirmationFooter from '@/components/confirmation/ConfirmationFooter';

const BookingConfirm = () => {

  const { logout, user } = useOutletContext();
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
     return <Navigate to="/" replace />;
  }

  const handleFinish = () => {
    alert("Booking Successfully Confirmed!");
    navigate("/");
  };

  return (
    <div className="font-earn">
      <Navbar logout={logout} user={user}/>
      <div className="container mx-auto px-4 py-6">
      <BackButton to="/" label="Back to Home" />
      </div>
       <div className="bg-white overflow-hidden border border-gray-200 max-w-6xl mx-auto">
        <ConfirmationHeader confirmationNumber={data.confirmationNumber} />

        <HotelImage
                src={data.hotelImage}
                alt={`${data.roomType} - Room Preview`}
              />

              <div className="p-8 space-y-8">
                <GuestStayDetails
                  firstname={data.firstname}
                  lastname={data.lastname}
                  checkIn={data.checkIn}
                  checkOut={data.checkOut}
                  guestCount={data.guestCount}
                  nights={data.nights}
                />

                <RoomDetails
                  roomType={data.roomType}
                  amount={data.amount}
                />

                <SpecialRequest request={data.specialRequest} />

                <HotelAddress address={data.hotelAddress} />

                <div className="flex justify-center mt-8">
                    <button 
                      onClick={handleFinish} 
                      className="w-full max-w-xs bg-(--color-main3) hover:bg-(--color-main2) text-lg text-white font-semibold py-3 px-6 transition-colors duration-300"
                    >
                        Confirmed
                    </button>
                </div>
              </div>
              <ConfirmationFooter />
              </div>
              <Footer />
    </div>
  );
};

export default BookingConfirm;