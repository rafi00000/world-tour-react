import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, population, independent } = country;

  const [visited, setVisited] = useState(false);
  return (
    <div className={name.common === "Israel" ? "hidden" : "country"}>
      <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" className="h-56" />
      <p>Population: {population}</p>
      <p>Independent: {independent ? "Yes" : "no"}</p>
      <h3>{visited ? "Done" : "going"}</h3>
      <button onClick={() => setVisited(!visited)} className="p-2 text-xl font-bold border-black">Click</button>
    </div>
  );
};

export default Country;
