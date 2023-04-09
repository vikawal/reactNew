import React from "react";

function CountryAllInfo({ country }) {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Flag: <img src={country.flags.png} alt={country.name.common} width="200" /></p>
      <p>Currency: {country.currencies[0].name} ({country.currencies[0].symbol})</p>
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
    </div>
  );
}

export default CountryAllInfo;