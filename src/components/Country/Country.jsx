import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);

  // Handle visited btn.
  const handleVisitedBtn = () => {
    setVisited(!visited);
  };

  const { name, cca3, flags, timezones } = country;
  return (
    <div className={visited ? "country_item_visited" : "country_item"}>
      <h4>Name : {name.common}</h4>
      <img src={flags.png} alt="" />
      <p>Time-Zone : {timezones[0]}</p>
      <p>CCA3 : {cca3}</p>
      <button
        onClick={() => {
          handleVisitedBtn();
          handleVisitedCountry(country);
        }}
        className={visited ? "visitedBtn" : ""}
      >
        {visited ? "Visited" : "Want to visit"}
      </button>
    </div>
  );
};

export default Country;
