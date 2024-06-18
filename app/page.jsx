// file: src/pages/index.jsx
'use client';

import React from 'react';
import { ToggleBorderProvider } from './Components/Contex'; // Ensure correct path
import Card from "./Components/Card";
import HeroSection from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="lg:flex flex-col h-screen">
        <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:h-full">
          {/* Sign up option component cards */}
          <div className="hidden w-full lg:block my-auto py-auto px-5 lg:w-full">
            <h1 className="text-xl lg:text-2xl my-4 py-4 text-start ml-5 font-gilroy-medium">Who are you signing up as?</h1>
            <Card />
            <Button />
          </div>
          {/* Hero section */}
          <HeroSection />
        </main>
      </div>
    </>
  );
}
