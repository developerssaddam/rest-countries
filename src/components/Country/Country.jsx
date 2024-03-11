import "./Country.css";
const Country = ({ country }) => {
  const { name, cca3, flags, timezones } = country;
  return (
    <div className="country_item">
      <h4>Name : {name.common}</h4>
      <img src={flags.png} alt="" />
      <p>Time-Zone : {timezones[0]}</p>
      <p>CCA3 : {cca3}</p>
    </div>
  );
};

export default Country;
