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
     <div className="grid grid-cols-4 gap-4 mx-6 my-6 bg-slate-500 text-white">
      {countries.map((country) => (
        <Country  country={country} key={country.cca2}></Country>
      ))}
     </div>
    </>
  );
};

export default Countries;
