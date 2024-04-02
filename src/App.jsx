import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { fetchAllPlayers } from './api';
import AddPlayerForm from './AddPlayerForm';
import PlayerCard from './PlayerCard';
import PlayerList from './PlayerList';

function App() {
  const [players, setPlayers] = useState([]);
  const [playersDisplayed, setPlayersDisplayed] = useState([]);
  const [selectedID, setSelectedID] = useState(null);
  const selectedPuppy = selectedID ? players.find(puppy => puppy.id === selectedID) : null;

  const updatePlayers = (newPlayers) => {
    newPlayers.sort((a, b) => a.id - b.id);

    setPlayers(newPlayers);
  }

  useEffect(() => { fetchAllPlayers(updatePlayers); }, []);

  return (
    <>
      <h1>Bowling with Puppies</h1>
      {
        selectedPuppy
          ? <div className="containerCards"><PlayerCard player={selectedPuppy} isDetailed={true} {...{setSelectedID, updatePlayers}} /></div>
          : <>
            <section className="centerContainer">
              <AddPlayerForm updatePlayers={updatePlayers} />
            </section>
            <PlayerList {...{players, updatePlayers, setSelectedID, playersDisplayed, setPlayersDisplayed}} />
          </>
      }
    </>
  )
}

export default App
