import useFetch from "./useFetch";
import React from 'react';


function RegionQuiz() {
  const { data: countries, loading, error } = useFetch('https://restcountries.com/v3.1/all?fields=name,region,flags');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>Quiz App. </h1>
      <h2>Guess the capital of a country</h2>
      {countries.map(country => (
        <div key={country.name.common}>
          <h2>{country.name.common}</h2>
          {country.region && country.region.length > 0 ? (
            <p>Region: {country.region}</p>
          ) : (
            <p>Region: Not available</p>
          )}
          <img src={country.flags.png} alt={country.name.common} />
        </div>
      ))}
    </div>
  );
}

export default RegionQuiz;