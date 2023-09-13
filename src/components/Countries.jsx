import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
  
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => setCountries(data))
  },[])

  return (
    <div>
      <h3>Countries length: {countries.length} </h3>
      {
        countries.map( (country,id)=><Country key={id} country={country}></Country> )
      }
    </div>
  );
};

export default Countries;