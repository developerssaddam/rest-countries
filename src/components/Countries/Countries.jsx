import { useState, useEffect } from "react";
import "./Countries.css";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  console.log(countries);

  return (
    <div>
      <h1>All-countries</h1>
      <hr />
      <dir className="country_container">
        {countries.map((country) => (
          <Country key={country.name.common} country={country}></Country>
        ))}
      </dir>
    </div>
  );
};

export default Countries;
