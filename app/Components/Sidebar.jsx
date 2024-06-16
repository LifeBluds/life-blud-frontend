// components/Sidebar.js
"use client"
import { useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Users', href: '#' },
  { name: 'Settings', href: '#' },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <img className="h-8 w-auto" src="/your-logo.png" alt="Your Logo" />
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex-shrink-0 w-14"></div>
      </div>

      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="h-8 w-auto" src="/your-logo.png" alt="Your Logo" />
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1 bg-white">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="md:hidden">
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </>
  );
}
