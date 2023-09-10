import { useEffect } from "react";
import { useState } from "react";
import Country from './../country/Country';
import "./Countries.css"
const Countries = () => {
    // to set store the value of countries in api
    const [countries, SetCountries] = useState([]) ;

    // fetching the api data...
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => SetCountries(data))
    } , [])

    return (
        // calling the component for every data.....
        <div>
            <h3>Countries Count: {countries.length}</h3>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }    
            </div>
        </div>
    );
};

export default Countries;