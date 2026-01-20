const GuestStayDetails = ({ firstname, lastname, checkIn, checkOut, guestCount, nights }) => {
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-l font-medium text-gray-500">Name:</h3>
          <p className="text-m font-medium">{firstname} {lastname}</p>
        </div>
        <div>
          <h3 className="text-l font-medium text-gray-500">Check in:</h3>
          <p className="text-m font-medium">{checkIn}</p>
        </div>
        <div>
          <h3 className="text-l font-medium text-gray-500">Check out:</h3>
          <p className="text-m font-medium">{checkOut}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-l font-medium text-gray-500">No. of Guest:</h3>
          <p className="text-m font-medium">{guestCount}</p>
        </div>
        <div>
          <h3 className="text-l font-medium text-gray-500">No. of nights:</h3>
          <p className="text-m font-medium">{nights}</p>
        </div>
      </div>
    </div>
  );
};

export default GuestStayDetails;