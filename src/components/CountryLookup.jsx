'use client';
import {useEffect, useState } from "react";


export const CountryLookup = () => {
    const [country, setCountry] = useState('United Satates')
  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_APY_KEY}`);
      const data = await res.json();
      const response = data.country;
      console.log(data)
      setCountry(response);
    };
    getCountry();
  }, []);

  return (
    <div>
     {country}
    </div>
  )
}
