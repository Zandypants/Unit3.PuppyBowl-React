import { useEffect, useState } from "react"
import { convertObjData } from './api';
import { capitalize } from './helpers';

const SearchBar = ({ players, setPlayersDisplayed, teams }) => {
  const [filters, setFilters] = useState({});

  useEffect(() => {
    let filteredPlayers = [...players];

    const checkCondition = (player, key) => {
      const value = filters[key];
      if (!value || value === "Any") return true;

      if (typeof(value) === "string") return player[key].toLowerCase().includes(value.toLowerCase());
      return player[key] === value;
    }

    for (const key in filters) {
      filteredPlayers = filteredPlayers.filter((p) => checkCondition(p, key));
    }
    
    setPlayersDisplayed(filteredPlayers);
  }, [players, filters]);

  const onInput = (event) => {
    const newFilters = {...filters};
    const {key, value} = convertObjData(event.target.name, event.target.value, {teams});
    newFilters[key] = value;

    setFilters(newFilters);
  }
  
  const teamOptions = ["Any"];
  if (teams) teamOptions.push(...teams.map(t => t.name));

  return <>
    <label>Search:
      <input type="text" placeholder="" name="name" onChange={onInput}></input>
    </label>
    {[{ name: "team", options: teamOptions }, { name: "status", options: ["Any", "bench", "field"] }].map(({ name, options }) => {
      const searchName = name + "Search";
      return <div key={searchName}>
        <label>{capitalize(name)}:
          <select name={name} id={searchName} onChange={onInput}>
            {options.map((e, i) => <option key={i} value={e}>{e}</option>)}
          </select>
        </label>
      </div>
    })}
  </>
}

export default SearchBar