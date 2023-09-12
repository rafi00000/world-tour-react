import { useEffect, useState } from "react";
import Country from "./../country/Country";
import "./Countries.css";

const Countries = () => {
  // to set store the value of countries in api we are using useState() hook.....
  const [countries, SetCountries] = useState([]);

  // fetching the api data... if we miss the dependency array it will create an loop because it will set data when ever value changes..
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => SetCountries(data)); //when we set the country in useState it will set the initial value to set value.
  }, []);

  // to handle the visited countries and show them to the upper....
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleSetVisited = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    // calling the component for every data.....
    <>
      <h3 className="text-2xl font-bold">
        Countries Count: {countries.length}
      </h3>
      {/* visited country section */}
      <div>
        <h3 className="text-2xl font-bold">
          Country Visited: {visitedCountries.length}
        </h3>
        {/* here we are mapping the visited countries triggered from the btn */}
        <div className="grid grid-cols-4 gap-3">
          {visitedCountries.map((visited) => {
            const { flags, population, independent, cca3, name } = visited;
            return (
              <>
                <div>
                  <img src={flags.png} className="h-56" />
                  <h2 className="text-2xl font-bold">Name: {name.common}</h2>
                  <p>Population: {population}</p>
                  <p>Independent: {independent ? "Yes" : "no"}</p>
                  <p>
                    <small>area: {cca3}</small>
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleSetVisited={handleSetVisited}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
