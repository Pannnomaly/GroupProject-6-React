const ConfirmationHeader = ({ confirmationNumber }) => {
  return (
    <div className="bg-(--color-main3) text-white p-6 text-center">
      <h1 className="text-3xl font-bold">Reservation Confirmation</h1>
      <p className="text-lg mt-2">Confirmation #: {confirmationNumber}</p>
    </div>
  );
};
 
export default ConfirmationHeader;