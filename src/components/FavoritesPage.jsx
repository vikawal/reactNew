import React from 'react';
// import './styles/favorites.css';
import { useFavorites } from './FavCountryContext';


function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      <h1 className="title">My Favorites</h1>
      {favorites.length > 0 ? (
        <div className="country-list">
          {favorites.map((country) => (
            <div key={country.cca3} className="country-item">
              <h2 className='countryCode'>{country.cca3}</h2>
              <h2 key={`${country.cca3}-name`} className="country-name">{country.name}</h2>
              <img key={`${country.cca3}-flag`} src={country.flag} alt={country.name} className="country-flag" />
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

// import React from 'react';
// import { useFavorites } from "./FavCountryContext";
// import { Link } from 'react-router-dom';
// import {ReactComponent as HeartFilled} from './assets/heart-solid.svg';
// import {ReactComponent as HeartEmpty} from './assets/heart-regular.svg';

// function Favorites() {
//   const { favorites, toggleFavorite, isFavorited, countries } = useFavorites();

//   const handleFavoriteClick = (countryCode) => {
//     toggleFavorite(countryCode);
//   };

//   if (favorites.length === 0) {
//     return (
//       <div className="container">
//         <h1 className="title">Favorite Countries</h1>
//         <p>You haven't favorited any country yet!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="country-list">
//       {favorites.map((countryCode) => {
//         const country = countries.find((c) => c.cca3 === countryCode);
//         return (
//           <div key={country.name.common} className="country-item">
//             <Link to={`country/${country.cca3}`}>
//               <img src={country.flags.png} alt={country.name.common} className="country-flag" />
//               <h2 className="country-name">{country.name.common}</h2>
//             </Link>
//             <button style={{ border: "none", background: "none" }} onClick={() => handleFavoriteClick(country.cca3)}>
//               {isFavorited(country.cca3) ? <HeartFilled width="24" height="24" /> : <HeartEmpty width="24" height="24" />}
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Favorites;

// import { useFavorites } from "./FavCountryContext";
// import { useState, useEffect } from "react";

//  const Favorites = () => {
//     const [favorites] = useFavorites();
//     const [countries, setCountries] = useState([]);

//     useEffect(() => {
//      Promise.all(
//         favorites.map((cca3) =>
//           fetch(`https://restcountries.com/v3.1/all?fields=name,region,flags,cca3`).then((response) =>
//              response.json()
//           )
//         )
//       ).then(setCountries);
//     }, [favorites]);

//     return(
//         <>
//          <h1>Favorites</h1>
//          <ul>
//             {countries.map((country) =>
//             <li key={country.name.common}>
//                 <h2>{country.name.common}</h2>
//                 <img src={country.flags.png} alt={country.name.common} />
//             </li>
//             )}
//          </ul>
//         </>
//     );   
//  };

//  export default Favorites;