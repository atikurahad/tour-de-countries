const Country = ({ country }) => {
  const { name, capital, flags } = country;
  return (
    <div>
      <img src={flags.png} alt="img" className="h-48 w-full" />

      <h4>Name: {name?.common}</h4>
      <h4>Capital: {capital}</h4>
    </div>
  );
};

export default Country;
