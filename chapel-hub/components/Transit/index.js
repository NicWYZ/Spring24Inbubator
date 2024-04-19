// components/TransitInfo.js
import Sidebar from '../Sidebar';
import './index.scss'
import React from 'react';
import "@/app/globals.css"


const Transit = () => {
  return (
    <div className="flex h-screen">
      {/* Include the Sidebar component */}
      <Sidebar />



      {/* Main content */}
      <div className="flex flex-col items-center justify-center w-full bg-gray-100">
        {/* Adjust the Tailwind classes as needed */}
        <h1 className="text-3xl font-bold mb-4">Transit Information</h1>
        <p>Here you can find information about transit options.</p>
      </div>
    </div>
  );
};

export default Transit;