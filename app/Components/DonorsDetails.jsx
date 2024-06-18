import React from 'react';
// import { useMultiForm } from './FormContext';

const DonorsDetails = ({formData}) => {


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="lg:flex justify-between items-center mt-[70px]">
      <div className='w-full lg:pr-10'>
        <div className="">
          <label className="block mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>
        <div className="">
          <label className="block mb-2">Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
          />
        </div>
        <div className="w-full md:w-full">
          <label className="block mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>
        <div className="w-full md:w-full">
          <label className="block mb-2">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
        </div>
      </div>
      <div className='w-full'>
        <div className="">
          <label className="block mb-2">Occupation</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>
        <div className="w-full md:w-full">
          <label className="block mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>
        <div className="w-full md:w-full">
          <label className="block mb-2">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>
        <div className="w-full md:w-full">
          <label className="block mb-2">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default DonorsDetails;
