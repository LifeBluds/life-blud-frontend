'use client';
import React, { useState, useEffect } from 'react';
import HeroSection from '../Components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import VerifyEmailComponent from '../Components/VerifyEmailComponent';
import Navbar from '../Components/Navbar';
import axios from 'axios';

const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    age: '',
    weight: '',
    pregnancyStatus: '',
    password: '',
  });
  const [passwordValidations, setPasswordValidations] = useState({
    specialChars: false,
    minLength: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'password') {
      setPasswordValidations({
        specialChars: /[!@#$%^&*(),.?":{}|<>]/.test(value),
        minLength: value.length >= 8,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://gnarly-school-just-rail-production.pipeops.app/api/auth/onboard-facility', formData);
      console.log(response.data); // Handle the response as needed
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting the form:', error);
      // Handle the error as needed
    }
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
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="age" className="block text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="weight" className="block text-gray-700 mb-2">Weight</label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="pregnancyStatus" className="block text-gray-700 mb-2">Pregnancy Status</label>
                  <select
                    id="pregnancyStatus"
                    name="pregnancyStatus"
                    value={formData.pregnancyStatus}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 bg-transparent"
                    required
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="pregnant">Pregnant</option>
                    <option value="not_pregnant">Not Pregnant</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
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

export default Page;
