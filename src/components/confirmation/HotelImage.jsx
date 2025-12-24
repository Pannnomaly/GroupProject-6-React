const HotelImage = ({ imageUrl, alt }) => {
  return (
    <div className="w-full h-64 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HotelImage;