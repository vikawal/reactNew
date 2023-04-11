import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext([]);

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (cca3) => {
    if (favorites.includes(cca3)) {
      setFavorites(favorites.filter((item) => item !== cca3));
    } else {
      setFavorites([...favorites, cca3]);
    }
  };

  const isFavorited = (cca3) => {
    return favorites.includes(cca3);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorited }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// import { createContext, useContext, useState } from "react";

// export const FavoritesContext =  createContext([]);

// export const useFavorites = () => useContext(FavoritesContext);

// export const FavoritesProvider = ({children}) => {
//     const [favorites, setFavorites] = useState([]);

//     return (
//         <FavoritesContext.Provider value={[favorites, setFavorites]}>
//             {children}
//         </FavoritesContext.Provider>
//     );
// };