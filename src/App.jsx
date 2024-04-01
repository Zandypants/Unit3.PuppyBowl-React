import './App.css'
import { useEffect, useState } from 'react'
import { fetchAllPlayers } from './helpers';
import PlayerCard from './PlayerCard';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => { fetchAllPlayers(setPlayers); }, []);

  return (
    <>
      <h1>Bowling with Puppies</h1>
      {
        players.length > 0 ?
          <div className='containerCards'>{
            players.map((puppy, i) => <PlayerCard key={i} player={puppy} />)}
          </div>
          : <p>Oh no! 😮 The puppies escaped the bowl!</p>
      }
    </>
  )
}

export default App
