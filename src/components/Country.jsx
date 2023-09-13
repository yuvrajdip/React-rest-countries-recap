import React from 'react';

const Country = ({country}) => {
  console.log(country);
  const {name} = country;

  return (
    <div>
      <h2>Country: {name.common}</h2>    
    </div>
  );
};

export default Country;