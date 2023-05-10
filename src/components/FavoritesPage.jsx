import React from 'react';
// import './styles/favorites.css';
import { useFavorites } from './FavCountryContext';

function Favorites() {
  const { favorites } = useFavorites();
  console.log(favorites); // shows cc3 properly, only cc3 code is passed
  // console.log(favorites.map(country => country.name.common));

  return (
    <div className="container">
      <h1 className="title">My Favorites</h1>
      {favorites.length > 0 ? (
        <div className="country-list">
          {favorites.map((cca3) => (
            <div key={cca3} className="country-item">
              <h2 className='countryCode'>{cca3}</h2>
              {/* <h2 className="country-name">{country.name.common}</h2> */}
              {/* <img  src={country.flags.png} alt={country.name.common} className="country-flag" /> */}
            </div>
          ))}
        </div>
      ) : (
        <p>You have not added any countries to your favorites yet.</p>
      )}
    </div>
  );
}

export default Favorites;