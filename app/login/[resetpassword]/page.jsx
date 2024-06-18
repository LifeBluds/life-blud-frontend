import ResetPasswordComponent from '@/app/Components/ResetPasswordComponent'
import Navbar from '@/app/Components/Navbar'
import HeroSection from '@/app/Components/Hero'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
      <div className='lg:flex justify-between items-center w-full'>
          <ResetPasswordComponent/>
          <HeroSection/>
      </div>
    </>
  )
}


export default page
