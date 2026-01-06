const ConfirmButton = ({ 
  onClick, 
  children = "Confirm Reservation",
  className = "",
  disabled = false
}) => (
  <div className={`flex justify-center ${className}`}>
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full max-w-xs bg-(--color-main3) hover:bg-blue-700 text-lg text-white font-semibold py-3 px-6 transition-colors duration-300 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  </div>
);
 
export default ConfirmButton;