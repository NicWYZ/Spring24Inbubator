// components/Dining/index.js

import React from 'react';
import Sidebar from '../Sidebar';
// import './index.scss';
import "@/app/globals.css"


const Dining = () => {
  return (
    <div className="flex h-screen">
        <Sidebar />       

      <div className="flex flex-col items-center justify-center w-full bg-gray-100">
            <h2 className="text-3x1 font-bold mb-4">Dining Options</h2>
            <p>Explore our delicious dining options here.</p>
    </div>
    </div>
  );
};

export default Dining;