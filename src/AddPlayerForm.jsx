import { useState } from "react";
import { postPlayer } from './api';
import { capitalize } from './helpers';

const AddPlayerForm = ({ setPlayers }) => {
  const [newPlayer, setNewPlayer] = useState({});

  const onInput = (event) => {
    newPlayer[event.target.name] = event.target.value;

    console.log(newPlayer);
    setNewPlayer(newPlayer);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    postPlayer(newPlayer, setPlayers);

    event.target.reset();
  }

  return <section>
    <h3>Add Player</h3>
    <form onSubmit={onSubmit}>
      {["name", "breed", "imageURL"].map(key => {
        return <div key={key}>
          <label htmlFor={key}>{capitalize(key)}:</label>
          <input type="text" name={key} onChange={onInput}></input>
        </div>
      })}
      <input type="submit" value="Add"></input>
    </form>
  </section>
}

export default AddPlayerForm;