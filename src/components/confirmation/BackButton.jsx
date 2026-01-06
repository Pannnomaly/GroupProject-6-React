import { Link } from 'react-router-dom';
 
const BackButton = ({ to = '/', label = 'Back' }) => {
  return (
    <div className="mb-6">
      <Link 
        to={to} 
        className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
      >
        <img 
          src="/arrow-forward-navigation.svg" 
          alt="back" 
          width="24" 
          height="24" 
          className="mr-2 scale-x-[-1]"
        />
        <span className="text-lg">{label}</span>
      </Link>
    </div>
  );
};
 
export default BackButton;