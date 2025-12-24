const ConfirmationHeader = ({ confirmationNumber }) => {
  return (
    <div className="bg-blue-600 text-white p-6 text-center">
      <h1 className="text-3xl font-bold mb-2">Reservation Confirmation</h1>
      <p className="text-lg">
        Your Confirmation Number is <span className="font-semibold">{confirmationNumber}</span>
      </p>
    </div>
  );
};

export default ConfirmationHeader;