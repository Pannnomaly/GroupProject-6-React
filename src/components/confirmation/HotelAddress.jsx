const HotelAddress = ({ address }) => {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500">Hotel Address:</h3>
      <p className="text-gray-700">{address}</p>
    </div>
  );
};

export default HotelAddress;