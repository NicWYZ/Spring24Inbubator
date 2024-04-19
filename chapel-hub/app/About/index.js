// components/About/index.js
import Image from 'next/image';
import React from 'react';
import './index.scss';
import Sidebar from '../../components/Sidebar';
import "@/app/globals.css"

const About = () => {
  return (
    <div className="flex h-screen">
    {/* Include the Sidebar component */}
    <Sidebar />


    {/* Main content */}
    <div className="flex flex-col items-center justify-center w-full bg-gray-100">
      {/* Adjust the Tailwind classes as needed */}
      <div className="relative w-100 h-100 rounded-full overflow-hidden">
          <Image
            src="/kiara.jpg" // Adjust the path and file name as needed 
            alt="Kiara"
            width ={150}
            height ={150}
          />
        </div>
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p>Hi! Our names are Kiara Smith and Nicolas Zhang. We created this website to reduce</p>
      <p>time spent searching the web for restaurants, stores, and transport options in Chapel Hill.</p>
      <p>As fellow college students, we understand the frustration of having to back and forth constantly between different apps.</p>
      <div className="relative w-100 h-100 rounded-full overflow-hidden">
          <Image
            src="/mewmaster.jpg" // Adjust the path and file name as needed
            alt="Nicolas"
            width ={150}
            height ={150}
          />
        </div>
    </div>
  </div>
  );
}

export default About;