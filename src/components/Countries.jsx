import React, { useEffect, useState } from 'react';
import Country from './Country.jsx'
import './Countries.css'
import './Country.css'

const Countries = () => {

  const [countries, setCountries] = useState([])
  const [visitedCountries , setVisitedCountries] = useState([])

  const handleVisitedCountries = (country) => {
    setVisitedCountries([...visitedCountries, country])
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h3>Countries length: {countries.length} </h3>
      <h3>Visited Countries : {visitedCountries.length}</h3>
      <div className="countries-container">
        {
          countries.map((country, id) => <Country
            key={id} country={country}
            handleVisitedCountries={handleVisitedCountries}  
          >
          </Country>)
        }
      </div>
    </div>
  );
};

export default Countries;