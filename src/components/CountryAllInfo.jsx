import React from "react";
import { useFavorites } from "./FavCountryContext";
import {ReactComponent as HeartFilled} from './assets/heart-solid.svg';
import {ReactComponent as HeartEmpty} from './assets/heart-regular.svg';
// import {useFavoritesHook} from './useHooks/useFavoritesHook';

function CountryAllInfo({ country }) {
  const {favorites, toggleFavorite, isFavorited} = useFavorites();

  const handleFavoriteClick = () => {
    toggleFavorite(country.cca3);

  };
  // console.log(country);
  return (
    <div>
      {country? (
        country && typeof country.name === "object" && country.name.common ? (
          <h2>{country.name.common}</h2>
        ) : (
          <p>Country name is not available</p>
        )
      ) : (
        <p>Loading....</p>
      )
      }
      <p>Flag: {" "}
        <img src={country.flags.svg} alt={country.name.common} width ="200"/></p>
          <p>Currency: 
      {Object.entries(country.currencies).map(([code, currency]) => (
          <span key={code}>
            {currency.name} ({currency.symbol})
          </span>
      ))} </p>
      {country.capital && country.capital.length > 0 ? (
        <p>Capital: {country.capital[0]}</p>
      ) : (
        <p>Capital: Not available</p>
      )}
      <p>Languages: {Object.values(country.languages).join(", ")}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Borders: {country.borders.join(", ")}</p>
      <p>Population: {country.population}</p>
      <div>
      <button style={{ border: "none", background: "none" }} onClick={handleFavoriteClick}>
        {isFavorited(country.cca3) ? <HeartFilled width="24" height="24" /> : <HeartEmpty width="24" height="24"  />}
       </button>
      </div>
    </div>
  );
}

export default CountryAllInfo;