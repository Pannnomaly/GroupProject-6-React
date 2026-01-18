// src/components/booking/PaymentMethod.jsx
const PaymentMethod = ({ formData, onChange }) => {
  
  const handlePaymentSelect = (method) => {
    // Create a synthetic event to compatible with the handleInputChange in parent
    const event = {
      target: {
        name: 'paymentMethod',
        value: method
      }
    };
    onChange(event);
  };

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* <!-- Payment Method --> */}
      <div>
        <h3 className="font-medium mb-4">Select a payment method</h3>
        <div className="space-y-3">
          <div 
            onClick={() => handlePaymentSelect('visa')}
            className={`border-2 p-3 flex items-center gap-3 cursor-pointer transition-colors ${formData.paymentMethod === 'visa' || formData.paymentMethod === 'credit' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              className="w-10"
              alt="Visa"
            />
            <span>VISA</span>
          </div>
          <div 
            onClick={() => handlePaymentSelect('mastercard')}
            className={`border-2 p-3 flex items-center gap-3 cursor-pointer transition-colors ${formData.paymentMethod === 'mastercard' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              className="w-10"
              alt="Mastercard"
            />
            <span>Mastercard</span>
          </div>
          <div 
            onClick={() => handlePaymentSelect('promptpay')}
            className={`border-2 p-3 flex items-center gap-3 cursor-pointer transition-colors ${formData.paymentMethod === 'promptpay' || formData.paymentMethod === 'qr' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c5/PromptPay-logo.png"
              className="w-10"
              alt="PromptPay"
            />
            <span>PromptPay</span>
          </div>
        </div>
      </div>

      {/* <!-- Payment Details --> */}
      <div>
        <h3 className="font-medium mb-4">Payment Details</h3>
        <input
          name="cardName"
          value={formData.cardName || ''}
          onChange={onChange}
          className="w-full bg-white border-2 p-3 mb-3 focus:ring-2 focus:ring-black focus:outline-none"
          placeholder="Enter Name on Card"
        />
        <input
          name="cardNumber"
          value={formData.cardNumber || ''}
          onChange={onChange}
          className="w-full bg-white border-2 p-3 mb-3 focus:ring-2 focus:ring-black focus:outline-none"
          placeholder="Card Number"
        />

        <div className="flex gap-4">
          <input
            name="cardExpiry"
            value={formData.cardExpiry || ''}
            onChange={onChange}
            className="w-1/2 bg-white border-2 p-3 focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Expire Date"
          />
          <input
            name="cardCVV"
            value={formData.cardCVV || ''}
            onChange={onChange}
            className="w-1/2 bg-white border-2 p-3 focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="CVV"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;