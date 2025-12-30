// src/components/booking/GuestDetailsForm.jsx
const GuestDetailsForm = ({ formData, onChange }) => (
  <div className="bg-white">
    <h3 className="text-xl font-semibold mb-6">Enter your details</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <select
          name="title"
          value={formData.title}
          onChange={onChange}
          className="w-full p-2 border border-gray-300"
        >
          <option>Mr.</option>
          <option>Ms.</option>
          <option>Mrs.</option>
        </select>
      </div>
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 "
        />
      </div>
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 "
        />
      </div>
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-700 mb-1">Country of Passport</label>
        <select
          name="country"
          value={formData.country}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 "
        >
          <option>Thai</option>
          <option>Non-Thai</option>
        </select>
      </div>
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 "
        />
      </div>
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 "
        />
      </div>
    </div>
  </div>
);

export default GuestDetailsForm;