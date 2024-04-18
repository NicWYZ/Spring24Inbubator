"use client"

import { useEffect, useState } from 'react';
import Results from '@/components/results';

export default function RestaurantPage(){
  const [ data , setData ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/restaurants', {
        method: "POST"
      });
      const res_data = await response.json();
      console.log(res_data)
      setData(res_data);
    }

    fetchData();
  }, []);

  return(
    <div>
      {data && data.places.map((place) => (
        <Results place={place} />
      ))}
      
    </div>
  )
}


