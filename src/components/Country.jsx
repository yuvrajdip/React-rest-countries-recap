import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {
  console.log(country);
  const { currencies, name, flags, population, capital } = country;

  const [visited, setVisit] = useState(false)

  const handleButton = () => {
    //* Toggle State based onClick 
    setVisit(!visited) //* toggle between state
    handleVisitedCountries(country)
  }

  return (
    // * Conditional CSS class 
    <div className={`country ${visited && 'visited'}`}>
      {/* conditional style */}
      <h2 style={{ color: visited ? 'red' : 'yellow' }}>Country: {name.common}</h2>

      <img height="100px" src={flags.png} alt="" />
      <p>Population : {population}</p>

      <button onClick={handleButton}>{visited ? 'Visited' : 'Going'}</button>
      {/* Conditional rendering */}
      {visited ? 'I have visited' : "Want to visit"}
    </div>
  );
};

export default Country;