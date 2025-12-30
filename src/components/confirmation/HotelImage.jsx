const HotelImage = ({ src, alt, className = "" }) => (
  <div className={`w-full h-96 bg-gray-100 flex items-center justify-center ${className}`}>
    <img 
      src={src}
      alt={alt}
      className="max-w-full max-h-full object-contain"
    />
  </div>
);
 
export default HotelImage;