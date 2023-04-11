// import { useFavorites } from "./FavCountryContext";
// import { useState, useEffect } from "react";

// const Favorites = () => {
//   const [favorites] = useFavorites();
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     Promise.all(
//       Object.keys(favorites).map((cca3) =>
//         fetch(
//           `https://restcountries.com/v3.1/all?fields=name,region,flags,cca3`
//         ).then((response) => response.json())
//       )
//     ).then(setCountries);
//   }, [favorites]);

//   return (
//     <>
//       <h1>Favorites</h1>
//       <ul>
//         {countries.map((country) => (
//           <li key={country.name.common}>
//             <h2>{country.name.common}</h2>
//             <img src={country.flags.png} alt={country.name.common} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Favorites;

import { useFavorites } from "./FavCountryContext";
import { useState, useEffect } from "react";

 const Favorites = () => {
    const [favorites] = useFavorites();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
     Promise.all(
        favorites.map((cca3) =>
          fetch(`https://restcountries.com/v3.1/all?fields=name,region,flags,cca3`).then((response) =>
             response.json()
          )
        )
      ).then(setCountries);
    }, [favorites]);

    return(
        <>
         <h1>Favorites</h1>
         <ul>
            {countries.map((country) =>
            <li key={country.name.common}>
                <h2>{country.name.common}</h2>
                <img src={country.flags.png} alt={country.name.common} />
            </li>
            )}
         </ul>
        </>
    );   
 };

 export default Favorites;