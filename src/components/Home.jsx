import React, { useState } from 'react';
import useFetch from './useFetch';
import './home.css';
import './spinner.css'
import { Link } from 'react-router-dom';

function Home() {
  const [currentRegion, setCurrentRegion] = useState('All');
  const { data: countries, loading, error } = useFetch(
    currentRegion === 'All'
      ? 'https://restcountries.com/v3.1/all?fields=name,region,subregion,flags,capital,cca3'
      : `https://restcountries.com/v3.1/region/${currentRegion}?fields=name,region,subregion,flags,capital,cca3`
  );

  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const handleRegionClick = (region) => {
    setCurrentRegion(region);
  };

  if (loading) return <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  if (error) return <p className="error-message">{error}</p>;
  console.log(countries);

  return (
    <div className="container">
      <h1 className="title">Quiz App</h1>
      <h2 className="subtitle">Choose which quiz you want to play from the navigation bar</h2>
      <div className="button-group">
        {regions.map((region) => (
          <button key={region} onClick={() => handleRegionClick(region)} className={currentRegion === region ? 'active' : ''}>
            {region}
          </button>
        ))}
      </div>
      <div className="country-list">
        {countries.map((country) => (
          <div key={country.name.common} className="country-item">
            <Link to={`country/${country.cca3}`}>
            <h2 className="country-name">{country.name.common}</h2>
            {country.region && country.region.length > 0 ? (
              <p className="country-info">Region: {country.region}</p>
            ) : (
              <p className="country-info">Region: Not available</p>
            )}
            {country.subregion && country.subregion.length > 0 ? (
              <p className="country-info">Subregion: {country.subregion}</p>
            ) : (
              <p className="country-info">Subregion: Not available</p>
            )}
            {country.capital && country.capital.length > 0 ? (
              <p className="country-info">Capital: {country.capital}</p>
            ) : (
              <p className="country-info">Capital: Not available</p>
            )}
            <img src={country.flags.png} alt={country.name.common} className="country-flag" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

// import React, { useState } from 'react';
// import useFetch from './useFetch';
// import {Link} from 'react-router-dom';
// import "./home.css"

// function Home() {
//   const [currentRegion, setCurrentRegion] = useState('All');
//   const { data: countries, loading, error } = useFetch(
//     currentRegion === 'All'
//       ? 'https://restcountries.com/v3.1/all?fields=name,region,subregion,flags,capital,cca3'
//       : `https://restcountries.com/v3.1/region/${currentRegion}?fields=name,region,subregion,flags,capital,cca3`
//   );

//   const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

//   const handleRegionClick = (region) => {
//     setCurrentRegion(region);
//   };

//   // const handleAllCountriesClick = () => {
//   //   setCurrentRegion('all');
//   // };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   console.log(countries);

//   return (
//     <div>
//       <h1>Quiz App. </h1>
//       <h2>Choose which quiz you want to play from the navigation bar</h2>
//       {/* <button onClick={handleAllCountriesClick}>All countries</button> */}
//       {regions.map((region) => (
//         <button key={region} onClick={() => handleRegionClick(region)}>
//           {region}
//         </button>
//       ))}
//       {countries.map((country) => (
//         <div key={country.name.common}>
//           <Link to={`/country/${country.cca3}`}>
//             <h2>{country.name.common}</h2>
//             {country.region && country.region.length > 0 ? (
//               <p>Region: {country.region}</p>
//             ) : (
//               <p>Region: Not available</p>
//             )}
//             {country.subregion && country.subregion.length > 0 ? (
//               <p>Subregion: {country.subregion}</p>
//             ) : (
//               <p>Subregion: Not available</p>
//             )}
//             {country.capital && country.capital.length > 0 ? (
//               <p>Capital: {country.capital}</p>
//             ) : (
//               <p>Capital: Not available</p>
//             )}
//             <img src={country.flags.png} alt={country.name.common} width="200" />
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;
// import React from 'react';
// import useFetch from './useFetch';

// function Home() {
//   const { data: countries, loading, error } = useFetch('https://restcountries.com/v2/all');

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Quiz App. </h1>
//       <h2>Choose which quizz you want to play from navigation bar</h2>
//       {countries.slice(0, 10).map(country => (
//         <div key={country.alpha3Code}>
//           <h2>{country.name}</h2>
//           <p>Capital: {country.capital}</p>
//           <p>Region: {country.region}</p>
//           <img src={country.flag} alt={country.name} width="200" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;