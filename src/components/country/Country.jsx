const Country = ({ country }) => {
  const { name, capital, flags,population } = country;
  return (
    <div>
      <img src={flags.png} alt="img" className="h-48 w-full" />

     <div className="flex flex-col items-center text-white text-xl font-bold">
     <h4>Name: {name?.common}</h4>
      <h4 >Capital: <span className="text-black">{capital}</span> </h4>
      <h2>Population: {population}</h2>
     </div>
    </div>
  );
};

export default Country;
