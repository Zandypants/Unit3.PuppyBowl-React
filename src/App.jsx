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
          ? <div className="containerCards"><PlayerCard player={selectedPuppy} isDetailed={true} {...{setSelectedID, updatePlayers}} /></div>
          : <>
            <section className="centerContainer">
              <AddPlayerForm updatePlayers={updatePlayers} />
            </section>
            <PlayerList {...{players, setSelectedID, updatePlayers}} />
          </>
      }
    </>
  )
}

export default App
