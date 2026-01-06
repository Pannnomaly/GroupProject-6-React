const HotelAddress = ({ address }) => {
  return (
    <div>
      <h3 className="text-l font-medium text-gray-500">Hotel Address:</h3>
      <p className="text-m text-gray-700">{address}</p>
    </div>
  );
};

export default HotelAddress;