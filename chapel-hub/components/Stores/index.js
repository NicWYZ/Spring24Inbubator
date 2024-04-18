// components/Stores/index.js

import React from 'react';
import './index.scss';
import Sidebar from '../Sidebar';
import "@/app/globals.css"


const Stores = () => {
  return (
    <div className="flex h-screen">
      {/* Include the Sidebar component */}
      <Sidebar />



      {/* Main content */}
      <div className="flex flex-col items-center justify-center w-full bg-gray-100">
        {/* Adjust the Tailwind classes as needed */}
        <h1 className="text-3xl font-bold mb-4">Store Name</h1>
        <p>Location</p>
        <p2> Description</p2>
      </div>
    </div>

  );
}

export default Stores;