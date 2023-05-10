import { createContext, useContext, useState } from 'react';

export const FavCountryContext = createContext();

export function FavCountryProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // function toggleFavorite(country) {
  //   if (favorites.some(fav => fav.cca3 === country.cca3)) {
  //     const updatedFavorites = favorites.filter((fav) => fav.cca3 !== country.cca3);
  //     setFavorites(updatedFavorites);
  //     console.log ('Favorites after removal:', updatedFavorites);
  //   } else {
  //     const updatedFavorites = [...favorites, country]
  //     setFavorites(updatedFavorites);
  //     console.log('Favorites after addition:', updatedFavorites);
  //   }
  // }

  function toggleFavorite(countryCode) {
    if (favorites.includes(countryCode)) {
      const updatedFavorites = favorites.filter((cca3) => cca3 !== countryCode);
      setFavorites(updatedFavorites);
      console.log ('Favorites after removal:', updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, countryCode]
      setFavorites(updatedFavorites);
      console.log('Favorites after addition:', updatedFavorites);
    }
  }

  function isFavorited(countryCode) {
    return favorites.includes(countryCode);
  }

  // function isFavorited(countryCode) {
  //   return favorites.some(fav => fav.cca3 === countryCode);
  // }

  return (
    <FavCountryContext.Provider value={{ favorites, toggleFavorite, isFavorited }}>
      {children}
    </FavCountryContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavCountryContext);
}

// export default FavCountryProvider;
// import { createContext, useContext, useState } from "react";

// export const FavoritesContext = createContext([]);

// export const useFavorites = () => useContext(FavoritesContext);

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const toggleFavorite = (cca3) => {
//     if (favorites.includes(cca3)) {
//       setFavorites(favorites.filter((item) => item !== cca3));
//     } else {
//       setFavorites([...favorites, cca3]);
//     }
//   };

//   const isFavorited = (cca3) => {
//     return favorites.includes(cca3);
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorited }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };
