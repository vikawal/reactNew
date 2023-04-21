import React from "react";
import { useFavorites } from "./FavCountryContext";
import {ReactComponent as HeartFilled} from './assets/heart-solid.svg';
import {ReactComponent as HeartEmpty} from './assets/heart-regular.svg';
// import {useFavoritesHook} from './useHooks/useFavoritesHook';
import './styles/countryPage.css';

function CountryAllInfo({ country }) {
  const {favorites, toggleFavorite, isFavorited} = useFavorites();

  const handleFavoriteClick = () => {
    toggleFavorite(country.cca3);

  };
  // console.log(country);
  return (
    <div className="country-info-container">
      {country ? (
        country && typeof country.name === "object" && country.name.common ? (
          <h2 className="name">{country.name.common}</h2>
        ) : (
          <p>Country name is not available</p>
        )
      ) : (
        <p>Loading....</p>
      )}
      <p className="flag">
        <img src={country.flags.svg} alt={country.name.common} width="200" />
      </p>
      <p className="currency">
        Currency:{" "}
        {Object.entries(country.currencies).map(([code, currency]) => (
          <span key={code}>
            {currency.name} ({currency.symbol})
          </span>
        ))}
      </p>
      {country.capital && country.capital.length > 0 ? (
        <p className="capital">Capital: {country.capital[0]}</p>
      ) : (
        <p className="capital">Capital: Not available</p>
      )}
      <p className="language">Languages: {Object.values(country.languages).join(", ")}</p>
      <p className="region">Region: {country.region}</p>
      <p className="subregion">Subregion: {country.subregion}</p>
      <p className="borders">Borders: {country.borders.join(", ")}</p>
      <p className="population">Population: {country.population}</p>
      <div>
        <button className="favButton" onClick={handleFavoriteClick}>
          {isFavorited(country.cca3) ? (
            <HeartFilled className="favoriteIcon" />
          ) : (
            <HeartEmpty className="favoriteIcon" />
          )}
        </button>
      </div>
    </div>
  );
}

export default CountryAllInfo;