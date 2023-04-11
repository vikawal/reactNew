import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar.jsx';
import Home from './Home';
import CurrencyQuiz from './CurrencyQuiz';
import CapitalQuiz from './CapitalQuiz';
import RegionQuiz from './RegionQuiz';
import CountryAbout from './CountryAbout.jsx';
import { FavoritesProvider } from './FavCountryContext.jsx';
import Favorites from './FavoritesPage.jsx';

const RoutesAll = () => {
  return (
    <FavoritesProvider>
     <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currency" element={<CurrencyQuiz />} />
        <Route path="/capital" element={<CapitalQuiz />} /> 
        <Route path="/region" element={<RegionQuiz />} /> 
        <Route path="/country/:alpha" element={<CountryAbout />} /> 
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
     </Router>
     </FavoritesProvider>
  );
}

export default RoutesAll;