import { useState } from "react";

const Country = ({ country }) => {
    const [visited,setVisited]=useState(false)
  const { name, flags, capital, population, startOfWeek ,subregion} = country;

  const handleVisited=()=>{
    setVisited(!visited)
  }
  return (
    <>
      <div>
        <img
          src={flags?.png}
          alt={name?.common}
          className="w-full h-64 object-cover"
        />
        <section className="text-2xl font-serif text-bold">
          <h1>Name: {name?.common}</h1>
          <p>subregion: {subregion}</p>
          <h1>Capital: {capital}</h1>
          <h1>Population: {population}</h1>
          <p>StartOfWeek:{startOfWeek}</p>
        </section>
        <button className={visited? "btn btn-accent" : "btn btn-ghost"} onClick={handleVisited}>{visited?"Visited":"Going"}</button>
        {visited? 'I have visited this country':"I haven't visited this country"}
      </div>
    </>
  );
};

export default Country;
