"use client"

import { useEffect, useState } from 'react';
import Results from '@/components/results';

// components/TransitInfo.js
import Sidebar from '../../components/Sidebar';
import './index.scss'
import React from 'react';
import "@/app/globals.css"


export default function Transportation(){
  const [ data , setData ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/transportation', {
        method: "POST"
      });
      const res_data = await response.json();
      console.log(res_data)
      setData(res_data);
    }

    fetchData();
  }, []);

  return (
    <div className="flex">
      {/* Include the Sidebar component */}
      <Sidebar />
    {/* {JSON.stringify(data)} */}


      {/* Main content */}
      <div className="flex flex-col items-center justify-center w-full bg-gray-100">
        {/* Adjust the Tailwind classes as needed */}
        <h1 className="text-3xl font-bold mb-4">Transit Information</h1>
        <p>Bus Stops near you</p>
        <p>ranked by distance</p>
        <div>
          {data && data.places.map((place) => (
          <Results place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};