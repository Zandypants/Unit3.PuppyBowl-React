import './App.css'
import { useEffect, useState } from 'react'
import { fetchAllPlayers } from './api';
import PlayerCard from './PlayerCard';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

function App() {
  const [players, setPlayers] = useState([]);
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
          ? <PlayerCard player={selectedPuppy} isDetailed={true} {...{setSelectedID, updatePlayers}} />
          : <>
            <AddPlayerForm updatePlayers={updatePlayers} />
            <PlayerList {...{players, setSelectedID, updatePlayers}} />
          </>
      }
    </>
  )
}

export default App
