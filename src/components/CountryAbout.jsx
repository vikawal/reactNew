import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import CountryAllInfo from "./CountryAllInfo";

function CountryAbout () {
    const {alpha} = useParams();
    const { data: country, loading, error } = useFetch(`https://restcountries.com/v3.1/alpha/${alpha}`);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className="countryAbout">
            {loading && <p className="loading">Loading</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && <CountryAllInfo country={country} />} 

        </div>
    );
}

export default CountryAbout;