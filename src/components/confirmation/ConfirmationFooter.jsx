import { Link } from 'react-router-dom';

const ConfirmationFooter = ({ onConfirm }) => {
  return (
    <div className="px-6 pb-6 text-center">
      <Link to="/room-detail">
        <button 
          onClick={onConfirm}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Confirm Reservation
        </button>
      </Link>
    </div>
  );
};

export default ConfirmationFooter;