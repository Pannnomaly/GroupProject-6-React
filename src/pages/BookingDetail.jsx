import { useState } from 'react';
import GuestDetailsForm from '@/components/booking/GuestDetailsForm';
import PaymentMethod from '@/components/booking/PaymentMethod';
import OptionalPaymentForm from '@/components/booking/OptionalPaymentForm';
import ArrivalDetails from '@/components/booking/ArrivalDetails';
import HotelInfo from '@/components/booking/HotelInfo';
import BookingDates from '@/components/booking/BookingDates';
import RoomDetails from '@/components/booking/RoomDetails';
import PriceSummary from '@/components/booking/PriceSummary';

const BookingDetail = () => {
  const [formData, setFormData] = useState({
    title: 'Mr.',
    firstName: '',
    lastName: '',
    country: 'Thai',
    email: '',
    phone: '',
    paymentMethod: 'credit',
    specialRequests: '',
    estimatedArrival: 'I don\'t know',
    arriveBy: 'Air',
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
    <div className="p-4">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Complete Your Booking</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <GuestDetailsForm formData={formData} onChange={handleInputChange} />
            <PaymentMethod formData={formData} onChange={handleInputChange} />
            <OptionalPaymentForm formData={formData} onChange={handleInputChange} />
            <ArrivalDetails formData={formData} onChange={handleInputChange} />
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-6">Reservation Summary</h3>
              <HotelInfo />
              <BookingDates />
              <RoomDetails />
              <PriceSummary />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Continue to a secure payment form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingDetail;