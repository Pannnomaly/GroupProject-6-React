const ArrivalDetails = ({ formData, onChange }) => (
  <div className="bg-white p-6">
    <h3 className="text-xl font-semibold mb-6">Arrival Details</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-group">
        <label 
          htmlFor="estimatedArrival" 
          className="block mb-2 text-sm font-medium text-heading"
        >
          Estimated Arrival Time
        </label>
        <div className="relative max-w-[10rem]">
          <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg 
              className="w-4 h-4 text-body" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <input
            type="time"
            id="estimatedArrival"
            name="estimatedArrival"
            value={formData.estimatedArrival}
            onChange={onChange}
            className="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm focus:ring-brand focus:border-brand shadow-xs"
            min="00:00"
            max="23:59"
            step="1800"
            required
          />
        </div>
      </div>
    </div>
  </div>
);

export default ArrivalDetails;