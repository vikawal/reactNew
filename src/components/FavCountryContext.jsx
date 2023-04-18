import { createContext, useContext, useState } from 'react';

export const FavCountryContext = createContext();

export function FavCountryProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(countryCode) {
    if (favorites.includes(countryCode)) {
      setFavorites(favorites.filter((cca3) => cca3 !== countryCode));
    } else {
      setFavorites([...favorites, countryCode]);
    }
  }

  function isFavorited(countryCode) {
    return favorites.includes(countryCode);
  }

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
