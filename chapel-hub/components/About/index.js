// components/About/index.js

import React from 'react';
import './index.scss';
import Sidebar from '../Sidebar';
import "@/app/globals.css"

const About = () => {
  return (
    <div className="flex h-screen">
    {/* Include the Sidebar component */}
    <Sidebar />



    {/* Main content */}
    <div className="flex flex-col items-center justify-center w-full bg-gray-100">
      {/* Adjust the Tailwind classes as needed */}
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p>This is the About page content.</p>
    </div>
  </div>
  );
}

export default About;