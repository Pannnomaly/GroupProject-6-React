// src/components/booking/OptionalPaymentForm.jsx
const OptionalPaymentForm = ({ formData, onChange }) => (
  <div className="bg-white">
    <h3 className="text-xl font-semibold mb-6">Optional Payment Form</h3>
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={onChange}
          rows="3"
          className="w-full p-2 border border-gray-300 "
          placeholder="Enter any special requests here..."
        ></textarea>
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="offers"
            name="offers"
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-300 "
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="offers" className="text-gray-700">
            I would like to receive special offers and promotions
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default OptionalPaymentForm;