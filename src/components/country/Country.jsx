import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleSetVisited }) => {
  const { name, flags, population, independent, cca3 } = country;

  // handle set visited with useState to store value and handleVisited func to handle and btn to trigger the func
  const [visited, setVisited] = useState(false);
  const handleVisited = () =>{
    setVisited(!visited)
  } ;

  // in here we have handleSetVisited from countries.jsx 

  return (
    <div className={`country font-mono space-y-3 ${visited ? 'bg-green-600': 'bg-red-400'}`}>
      <img src={flags.png} className="h-56" />
      <h2 className="text-2xl font-bold">Name: {name.common}</h2>
      <p>Population: {population}</p>
      <p>Independent: {independent ? "Yes" : "no"}</p>
      <h3>{visited ? "Done" : "going"}</h3>
      <div className="flex gap-3 justify-center">
        <button onClick={handleVisited} className="p-2 text-xl font-bold border-black">Click</button>
        <button onClick={() =>handleSetVisited(country)} className="p-2 text-xl font-bold border-black">Mark Flag</button>
      </div>
      <p><small>area: {cca3}</small></p>
    </div>
  );
};

export default Country;