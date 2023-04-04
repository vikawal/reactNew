import React from 'react';
import useFetch from './useFetch';

function Home() {
  const { data: countries, loading, error } = useFetch('https://restcountries.com/v2/all');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Quiz App. </h1>
      <h2>Choose which quizz you want to play from navigation bar</h2>
      {countries.slice(0, 10).map(country => (
        <div key={country.alpha3Code}>
          <h2>{country.name}</h2>
          <p>Capital: {country.capital}</p>
          <p>Region: {country.region}</p>
          <img src={country.flag} alt={country.name} width="200" />
        </div>
      ))}
    </div>
  );
}

export default Home;