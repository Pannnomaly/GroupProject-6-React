// src/components/booking/OptionalPaymentForm.jsx
const OptionalPaymentForm = ({ formData, onChange }) => (
  <div className="bg-white">
    <h3 className="text-xl font-semibold mb-6">Special Requests</h3>
    <div className="space-y-6">
      <div>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={onChange}
          rows="3"
          className="w-full p-2 border border-gray-300 "
          placeholder="Enter any special requests here..."
        ></textarea>
      </div>
    </div>
  </div>
);

export default OptionalPaymentForm;