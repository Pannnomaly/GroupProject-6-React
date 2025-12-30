const ConfirmButton = ({ 
  onClick, 
  children = "Confirm Reservation",
  className = "",
  disabled = false
}) => (
  <div className={`pt-6 ${className}`}>
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-(--color-main3) hover:bg-(--color-main2) text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 text-lg ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  </div>
);
 
export default ConfirmButton;