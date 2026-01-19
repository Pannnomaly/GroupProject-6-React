import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Navigate, useOutletContext } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GuestDetailsForm from '@/components/booking/GuestDetailsForm';
import PaymentMethod from '@/components/booking/PaymentMethod';
import OptionalPaymentForm from '@/components/booking/OptionalPaymentForm';
import ArrivalDetails from '@/components/booking/ArrivalDetails';
import HotelInfo from '@/components/booking/HotelInfo';
 
export default function BookingDetail() {

  const { logout, user} = useOutletContext();
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;

  // Protect route
  if (!bookingData) {
      return <Navigate to="/" replace />;
  }

  const [formData, setFormData] = useState({
    title: 'Mr.',
    firstName: '',
    lastName: '',
    country: 'Thai',
    email: '',
    phone: '',
    paymentMethod: 'visa', // Default to visa/credit to match UI
    specialRequests: '',
    estimatedArrival: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: ''
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine bookingData (from Modal) + formData (from this page)
    const finalReservationData = {
        confirmationNumber: `BK${Math.floor(Math.random() * 100000)}`,
        guestName: `${formData.title} ${formData.firstName} ${formData.lastName}`,
        checkIn: bookingData.checkIn,
        checkOut: bookingData.checkOut,
        guestCount: bookingData.guestCount,
        nights: bookingData.nights,
        roomType: bookingData.roomType,
        amount: bookingData.formattedTotalPrice,
        specialRequest: formData.specialRequests,
        hotelAddress: 'MonkeyDB Hotel @BKK, 123 Rama1 Road, Pathumwan, Bangkok, 10330 Thailand',
        hotelImage: bookingData.hotelImage,
        paymentMethod: formData.paymentMethod
    };

    // Navigate to confirmation
    navigate('/bookingconfirm', { state: finalReservationData });
  };
 
  return (
    <div className="font-earn">
      <Navbar logout={logout} user={user}/>
      
      <div className="min-h-screen w-full flex justify-center bg-gray-100">
        <div className="w-[90%] max-w-7xl my-10">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Complete Your Booking</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white p-6  shadow-sm">
                <GuestDetailsForm formData={formData} onChange={handleInputChange} />
              </div>
              
              {/* Payment Method is self-contained in its component now */}
              <PaymentMethod formData={formData} onChange={handleInputChange} />
              
              <div className="bg-white p-6  shadow-sm">
                <OptionalPaymentForm formData={formData} onChange={handleInputChange} />
              </div>

              <div className="bg-white p-6">
                <ArrivalDetails formData={formData} onChange={handleInputChange} />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 shadow-sm sticky top-10">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Reservation Summary</h3>
                <div className="space-y-6">
                  <HotelInfo />
                  <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between">
                          <span className="text-gray-600">Check-in</span>
                          <span className="font-medium">{bookingData.checkIn}</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="text-gray-600">Check-out</span>
                          <span className="font-medium">{bookingData.checkOut}</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="text-gray-600">Duration</span>
                          <span className="font-medium">{bookingData.nights}</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="text-gray-600">Guests</span>
                          <span className="font-medium">{bookingData.guestCount}</span>
                      </div>
                  </div>

                  <div className="border-t pt-4">
                       <h4 className="font-medium mb-2">{bookingData.roomType}</h4>
                       <div className="flex justify-between text-sm text-gray-500">
                           <span>Price per night</span>
                           <span>{parseInt(bookingData.roomPricePerNight).toLocaleString()} THB</span>
                       </div>
                  </div>

                  <div className="border-t pt-4">
                       <div className="flex justify-between font-bold text-xl text-(--color-main3)">
                          <span>Total</span>
                          <span>{bookingData.formattedTotalPrice}</span>
                       </div>
                       <p className="text-xs text-gray-400 text-right mt-1">Includes taxes and fees</p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-8 bg-(--color-main3) hover:bg-(--color-main2) text-white font-semibold text-lg py-3 px-6  transition-colors duration-300"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}