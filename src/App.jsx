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

  const formatPlayers = (newPlayers) => {
    // players.filter((e, i) => {

    // });
    newPlayers.sort((a, b) => a.id - b.id);

    setPlayers(newPlayers);
  }

  useEffect(() => { fetchAllPlayers(formatPlayers); }, []);

  return (
    <>
      <h1>Bowling with Puppies</h1>
      {
        selectedPuppy
          ? <PlayerCard player={selectedPuppy} onClick={() => setSelectedID(null)} isDetailed={true} />
          : <>
            <AddPlayerForm setPlayers={formatPlayers} />
            <PlayerList players={players} setSelectedID={setSelectedID} />
          </>
      }
    </>
  )
}

export default App
