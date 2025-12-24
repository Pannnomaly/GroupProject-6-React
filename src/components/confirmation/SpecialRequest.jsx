const SpecialRequest = ({ request }) => {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500">Special Request:</h3>
      <p className="text-gray-700 whitespace-pre-line">{request}</p>
    </div>
  );
};

export default SpecialRequest;