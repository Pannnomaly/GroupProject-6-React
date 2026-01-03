import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GuestDetailsForm from '@/components/booking/GuestDetailsForm';
import PaymentMethod from '@/components/booking/PaymentMethod';
import OptionalPaymentForm from '@/components/booking/OptionalPaymentForm';
import ArrivalDetails from '@/components/booking/ArrivalDetails';
import HotelInfo from '@/components/booking/HotelInfo';
import BookingDates from '@/components/booking/BookingDates';
import RoomDetails from '@/components/booking/RoomDetails';
import PriceSummary from '@/components/booking/PriceSummary';
 
export default function BookingDetail() {
  const [formData, setFormData] = useState({
    title: 'Mr.',
    firstName: '',
    lastName: '',
    country: 'Thai',
    email: '',
    phone: '',
    paymentMethod: 'credit',
    specialRequests: '',
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };
 
  return (
    <div className="font-earn">
      <Navbar />
      
      <div className="min-h-screen w-full flex justify-center bg-gray-100">
        <div className="w-[90%] max-w-7xl my-10">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Complete Your Booking</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white p-6">
                <GuestDetailsForm formData={formData} onChange={handleInputChange} />
              </div>
              <div className="bg-white p-6">
                <PaymentMethod formData={formData} onChange={handleInputChange} />
              </div>
              <div className="bg-white p-6">
                <OptionalPaymentForm formData={formData} onChange={handleInputChange} />
              </div>
              <div className="bg-white p-6">
                <ArrivalDetails formData={formData} onChange={handleInputChange} />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Reservation Summary</h3>
                <div className="space-y-6">
                  <HotelInfo />
                  <div className="my-4"></div>
                  <BookingDates />
                  <div className="my-4"></div>
                  <RoomDetails />
                  <div className="my-4"></div>
                  <PriceSummary />
                </div>
                <button
                  type="submit"
                  className="w-full mt-8 bg-(--color-main3) hover:bg-(--color-main2) text-white font-semibold text-lg py-3 px-6  transition-colors duration-300"
                >
                  Continue to a secure payment form
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
