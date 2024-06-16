import React from 'react'
import Logincomponent from '../Components/Logincomponent'
import HeroSection from '../Components/Hero'
import Navbar from '../Components/Navbar'

const page = () => {
  return (
    <>
    <Navbar/>
      <div className='lg:flex justify-between items-center w-full'>
          <Logincomponent/>
          <HeroSection/>
      </div>
    </>
  )
}

export default page
