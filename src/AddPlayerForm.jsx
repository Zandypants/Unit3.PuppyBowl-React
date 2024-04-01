import { useState } from "react";
import { postPlayer } from './api';
import { capitalize } from './helpers';

const AddPlayerForm = ({ updatePlayers }) => {
  const [newPlayer, setNewPlayer] = useState({});

  const onInput = (event) => {
    newPlayer[event.target.name] = event.target.value;
    setNewPlayer(newPlayer);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    postPlayer(newPlayer, updatePlayers);

    event.target.reset();
  }

  return <section className="columnContainer">
    <h3>Add Player</h3>
    <form onSubmit={onSubmit}>
      {["name", "breed", "imageUrl"].map(key => {
        return <div key={key} className="inputLine">
          <label htmlFor={key}>{capitalize(key)}:</label>
          <input type="text" name={key} id={key} autoComplete="off" onChange={onInput}></input>
        </div>
      })}
      <input type="submit" value="Add"></input>
    </form>
  </section>
}

export default AddPlayerForm;