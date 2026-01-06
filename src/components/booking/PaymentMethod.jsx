// src/components/booking/PaymentMethod.jsx
const PaymentMethod = ({ formData, onChange }) => (
  <div className="bg-white p-6">
    <h3 className="text-xl font-semibold mb-6">Select a Payment Method</h3>
    <div className="space-y-4">
      <label className="flex items-center space-x-3 cursor-pointer">
        <input
          type="radio"
          name="paymentMethod"
          value="credit"
          checked={formData.paymentMethod === 'credit'}
          onChange={onChange}
          className="h-4 w-4 text-blue-600"
        />
        <span className="text-gray-700">Credit / Debit Card</span>
      </label>
      <label className="flex items-center space-x-3 cursor-pointer">
        <input
          type="radio"
          name="paymentMethod"
          value="qr"
          checked={formData.paymentMethod === 'qr'}
          onChange={onChange}
          className="h-4 w-4 text-blue-600"
        />
        <span className="text-gray-700">Thai QR</span>
      </label>
      <label className="flex items-center space-x-3 cursor-pointer">
        <input
          type="radio"
          name="paymentMethod"
          value="wechat"
          checked={formData.paymentMethod === 'wechat'}
          onChange={onChange}
          className="h-4 w-4 text-blue-600"
        />
        <span className="text-gray-700">WeChat Pay</span>
      </label>
    </div>
  </div>
);

export default PaymentMethod;