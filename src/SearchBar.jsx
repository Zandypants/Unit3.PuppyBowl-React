import { useEffect, useState } from "react"

const SearchBar = ({players, setPlayersDisplayed}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      setPlayersDisplayed(players.filter((p) => p.name.toLowerCase().includes(search)));
    } 
    else setPlayersDisplayed(players);
  }, [search, players]);

  return <>
    <label>Search: 
      <input type="text" placeholder="" onChange={(e)=> setSearch(e.target.value.toLowerCase())}></input>
    </label>
  </>
}

export default SearchBar