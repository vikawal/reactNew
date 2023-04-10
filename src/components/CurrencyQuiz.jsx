import useFetch from "./useFetch";
import React from 'react';
// import './home.css';

function CurrencyQuiz() {
  const { data: countries, loading, error } = useFetch('https://restcountries.com/v3.1/all?fields=name,currencies,flags');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="container">
      <h1 className="title">Quiz App</h1>
      <h2 className="subtitle">Guess the currency of a country</h2>
      <div className="country-list">
      {countries.map(country => (
        <div key={country.name.common}>
          <h2 className="country-name">{country.name.common}</h2>
          {country.currencies && Object.values(country.currencies).length > 0 ? (
            <p className="country-info">Currency: {Object.values(country.currencies)[0].name}</p>
          ) : (
            <p className="country-info">Currency: Not available</p>
          )}
          <img src={country.flags.png} alt={country.name.common} width ="200" className="country-flag" />
        </div>
      ))}
      </div>
    </div>
  );
}

export default CurrencyQuiz;
// import useFetch from "./useFetch";
// import React from 'react';


// function CurrencyQuiz() {
//   const { data: countries, loading, error } = useFetch('https://restcountries.com/v3.1/all?fields=name,currencies,flags');
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   return (
//     <div>
//       <h1>Quiz App. </h1>
//       <h2>Guess the currency of a country</h2>
//       {countries.map(country => (
//         <div key={country.name.common}>
//           <h2>{country.name.common}</h2>
//           {country.currencies && Object.values(country.currencies).length > 0 ? (
//             <p>Currency: {Object.values(country.currencies)[0].name}</p>
//           ) : (
//             <p>Currency: Not available</p>
//           )}
//           <img src={country.flags.png} alt={country.name.common} width="200" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CurrencyQuiz;