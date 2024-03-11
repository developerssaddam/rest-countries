import { useState, useEffect } from "react";
import "./Countries.css";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // handleVisitedCountry.
  const handleVisitedCountry = (country) => {
    // console.log(country);
    // const countryName = country.name.common;
    // const countryFlag = country.flags.png;
    // if (!visitedCountry.includes(countryName)) {
    //   const newArr = [...visitedCountry, countryName];
    //   setVisitedCountry(newArr);
    // } else {
    //   const newArr = visitedCountry.filter((item) => item !== countryName);
    //   setVisitedCountry(newArr);
    // }

    if (!visitedCountry.includes(country)) {
      const newArr = [...visitedCountry, country];
      setVisitedCountry(newArr);
    } else {
      const newArr = visitedCountry.filter((item) => item !== country);
      setVisitedCountry(newArr);
    }
  };

  return (
    <div>
      <h1>All-countries</h1>
      <div>
        <hr />
        <h3 style={{ borderBottom: "2px solid red", display: "inline-block" }}>
          Visited Country List
        </h3>
        <div className="listContainer">
          <ol className="ol">
            {visitedCountry.map((item) => (
              <li key={item.name.common}>
                <h3>Name : {item.name.common}</h3>
                <img src={item.flags.png} alt="" />
              </li>
            ))}
          </ol>
        </div>
      </div>
      <hr />
      <dir className="country_container">
        {countries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </dir>
    </div>
  );
};

export default Countries;
