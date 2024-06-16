'use client'

import React, { useState, useEffect } from 'react';
import HeroSection from '../Components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import VerifyEmailComponent from '../Components/VerifyEmailComponent';
import Navbar from '../Components/Navbar';

const SignUpFacilityForm = () => {
  const [formData, setFormData] = useState({
    facilityType: '',
    registrationNumber: '',
    officialEmail: '',
    address: '',
    city: '',
    state: '',
    password: ''
  });

  const [passwordValidations, setPasswordValidations] = useState({
    specialChars: false,
    minLength: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'password') {
      setPasswordValidations({
        specialChars: /[!@#$%^&*(),.?":{}|<>]/.test(value),
        minLength: value.length >= 8
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true)
  };

  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lg:flex flex-col h-screen">
      <Navbar/>
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:h-full">
        <div className="w-full lg:block my-auto py-auto px-5 lg:w-lg">
          {isSubmitted ? (
            <VerifyEmailComponent />
          ) : (
      <>
      <h1 className="text-xl lg:text-2xl my-4  text-start ml-5 font-gilroy-medium">Sign Up</h1>
      <form 
        onSubmit={handleSubmit}
        className="px-4 py-1 min-w-full lg:min-w-lg max-w-lg bg-white"
      >
        <div className="mb-4">
          <label htmlFor="facilityType" className="block text-gray-700 mb-2">Facility Type</label>
          <select
            id="facilityType"
            name="facilityType"
            value={formData.facilityType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 bg-transparent"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="hospital">Hospital</option>
            <option value="clinic">Clinic</option>
            <option value="blood_bank">Blood Bank</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="registrationNumber" className="block text-gray-700 mb-2">Registration Number</label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="officialEmail" className="block text-gray-700 mb-2">Official Email</label>
          <input
            type="email"
            id="officialEmail"
            name="officialEmail"
            value={formData.officialEmail}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 mb-2">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300"
            required
          />
          <div className="mt-2 flex items-center">
            <FontAwesomeIcon
              icon={passwordValidations.specialChars ? faCheckCircle : faTimesCircle}
              className={`mr-2 ${passwordValidations.specialChars ? 'text-green-500' : 'text-red-500'}`}
            />
            <span className="text-gray-700">Must include special characters</span>
          </div>
          <div className="mt-2 flex items-center">
            <FontAwesomeIcon
              icon={passwordValidations.minLength ? faCheckCircle : faTimesCircle}
              className={`mr-2 ${passwordValidations.minLength ? 'text-green-500' : 'text-red-500'}`}
            />
            <span className="text-gray-700">Must be at least 8 characters long</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-100 text-white p-3 rounded-md hover:bg-red-800 transition duration-300"
        >
        Submit
        </button>
      </form>
            </>
          )}
        </div>
        {screenWidth < 768 ? null : <HeroSection />}
      </main>
    </div>
  );
};

export default SignUpFacilityForm;
