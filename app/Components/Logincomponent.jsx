'use client'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Logincomponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://gnarly-school-just-rail-production.pipeops.app/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      router.push('/dashboard');
    } catch (error) {
      setError('Invalid email or password');
      console.log(error);
    }
  };

  return (
    <div className='lg:container mx-auto p-4 w-full flex items-center justify-start'>
      <div className='my-[10%] lg:px-3 w-full lg:flex flex-col mx-5'>
        <h1 className="text-xl lg:text-2xl my-4 py-4 text-start font-gilroy">Login</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2 font-helvetica">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2 font-helvetica">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300"
                required
              />
              <p className='text-red-800 text-end py-4 font-helvetica'><Link href='/login/resetpassword'>Forgot password?</Link></p>
            </div>
            {error && <p className="text-red-800">{error}</p>}
            <button
              type="submit"
              className="w-full bg-red-800 text-white p-3 hover:bg-red-700 transition duration-300"
            >
              Login
            </button>
            <div className='md:flex justify-between items-center'>
              <p className='text-center text-md py-3'>
                New here? <span className='text-red-800 cursor-pointer'><Link href="/">Sign up</Link></span>
              </p>
              <p className='text-center text-md py-3 text-red-800 cursor-pointer'>Sign in as a Medical Facility</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logincomponent;
