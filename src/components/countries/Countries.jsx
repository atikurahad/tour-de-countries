import { useEffect, useState } from "react";
import Country from "../country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <h1>Total: {countries.length}</h1>
      {countries.map((country) => (
        <Country country={country} key={country.cca2}></Country>
      ))}
    </>
  );
};

export default Countries;
