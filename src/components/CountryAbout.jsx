import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import CountryAllInfo from "./CountryAllInfo";
import './styles/spinner.css';

function CountryAbout () {
    const {alpha} = useParams();
    const { data: country, loading, error } = useFetch(`https://restcountries.com/v3.1/alpha/${alpha}?fields=name,region,subregion,flags,capital,currencies,languages,borders,population,cca3`);
    if (loading) return <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    if (error) return <p className="error-message">{error}</p>;
    console.log(country);

    return (
        <div className="countryAbout">
            {loading && <p className="loading">Loading</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (<CountryAllInfo country={country} />)} 

        </div>
    );
}

export default CountryAbout;