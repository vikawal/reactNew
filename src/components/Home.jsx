import React, { useState, useMemo, useCallback } from 'react';
import useFetch from './useFetch';
import './styles/home.css';
import './styles/spinner.css';
import { Link } from 'react-router-dom';
// import { useFavorites } from "./FavCountryContext";
import { FavCountryContext} from './FavCountryContext';
import { useContext } from 'react';
import {ReactComponent as HeartFilled} from './assets/heart-solid.svg';
import {ReactComponent as HeartEmpty} from './assets/heart-regular.svg';

function Home() {

  const {favorites, toggleFavorite, isFavorited} = useContext(FavCountryContext);

  // const handleFavoriteClick = (country) => {
  //   toggleFavorite(country); 
  // };
 
  const handleFavoriteClick = (countryCode) => {
    toggleFavorite(countryCode); 
  };
  // const [favorites, setFavorites] = useFavorites();
  // const isFavorited = favorites.includes(country.cca3);

  // const handleFavoriteClick = () => {
  //   if (isFavorited) {
  //     setFavorites(favorites.filter((cca3) => cca3 !== country.cca3));
  //   } else {
  //     setFavorites([...favorites, country.cca3]);
  //   }
  // };

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
  // console.log(countries);
  console.log(favorites);


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
            <button style={{ border: "none", background: "none" }} 
                    onClick={() => handleFavoriteClick(country.cca3,country.name.common, country.flags.png)}>
                    {isFavorited(country.cca3) ? <HeartFilled width="24" height="24" /> : <HeartEmpty width="24" height="24" />}
       </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
