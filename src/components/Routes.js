import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './NavBar.js';
import Home from './Home.js';
import CurrencyQuiz from './CurrencyQuiz.js';
import CapitalQuiz from './CapitalQuiz';
import RegionQuiz from './RegionQuiz';
import CountryAbout from './CountryAbout.jsx';

const RoutesAll = () => {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currency" element={<CurrencyQuiz />} />
        <Route path="/capital" element={<CapitalQuiz />} /> 
        <Route path="/region" element={<RegionQuiz />} /> 
        <Route path="/country/:alpha" element={<CountryAbout />} /> 
      </Routes>
    </Router>
  );
}

export default RoutesAll;