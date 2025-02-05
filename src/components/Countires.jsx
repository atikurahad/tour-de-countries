import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countires = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
     
    <div className="grid grid-cols-3 gap-4 m-4 p-4">
    {countries.map(country => <Country key={country.ccn3} country={country}></Country> )} 
      
    </div>
    </>
  );
};

export default Countires;
