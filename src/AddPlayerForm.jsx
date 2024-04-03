import { useState } from "react";
import { postPlayer, convertObjData } from './api';
import { capitalize } from './helpers';

const AddPlayerForm = ({ updatePlayers, teams }) => {
  const [newPlayer, setNewPlayer] = useState({});

  const onInput = (event) => {
    const {key, value} = convertObjData(event.target.name, event.target.value, {teams});
    newPlayer[key] = value;
    setNewPlayer(newPlayer);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const addPlayer = {...newPlayer};
    if (!addPlayer.name) addPlayer["name"] = "Unnamed";
    if (!addPlayer.breed) addPlayer["breed"] = "Mutt";
    postPlayer(addPlayer, updatePlayers);

    event.target.reset();
  }

  const teamOptions = ["None"];
  if (teams) teamOptions.push(...teams.map(t => t.name));

  return <section id="addPlayerComponent">
    <h3>Add Player</h3>
    <form onSubmit={onSubmit} className="columnContainer">
      {["name", "breed", "imageUrl"].map(key => {
        return <div key={key} className="inputLine">
          <label htmlFor={key}>{capitalize(key)}:</label>
          <input type="text" name={key} id={key} autoComplete="off" onChange={onInput}></input>
        </div>
      })}

      {[{ name: "team", options: teamOptions }, { name: "status", options: ["bench", "field"] }].map(({ name, options }) => {
        return <div key={name} className="inputLine">
          <label htmlFor={name}>{capitalize(name)}:</label>
          <input name={name} id={name} list={name + "Options"} pattern={options.join('|')} onChange={onInput} />
          <datalist id={name + "Options"}>
            {options.map((e, i) => <option key={i} value={e} />)}
          </datalist>
        </div>
      })}

      <input type="submit" value="Add" style={{ placeSelf: "center", marginTop: "0.4em" }}></input>
    </form>
  </section>
}

export default AddPlayerForm;