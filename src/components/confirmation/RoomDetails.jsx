const RoomDetails = ({ roomType, amount }) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-l font-medium text-gray-500">Room type:</h3>
        <p className="text-m font-medium">{roomType}</p>
      </div>
      <div>
        <h3 className="text-l font-medium text-gray-500">Amount:</h3>
        <p className="text-m font-medium">{amount}</p>
      </div>
    </div>
  );
};

export default RoomDetails;