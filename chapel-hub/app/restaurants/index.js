"use client"
import tailwindConfig from '@/tailwind.config';
import { useEffect, useState } from 'react';
import Results from '@/components/results';
// components/Dining/index.js
import React from 'react';
import Sidebar from '../../components/Sidebar';
// import './index.scss';
import "@/app/globals.css"


export default function Restaurants(){
  const [ data , setData ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/restaurants', {
        method: "POST"
      });
      const res_data = await response.json();
      setData(res_data);
    }

    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
     {/* {JSON.stringify(data)} */}
            
      <div className="flex flex-col items-center justify-center w-full bg-gray-100">
            <h2 className="text-3x1 font-bold mb-4">Dining Options</h2>
            <p>Explore our delicious dining options here.</p>
            <p>Ranked by popularity</p>
            <div>
              {data && data.places.map((place) => (
              <Results place={place} />
              ))}
            </div>
      </div>
    </div>
  
  );
};