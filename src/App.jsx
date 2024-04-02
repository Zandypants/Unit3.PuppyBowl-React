import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { fetchAllPlayers } from './api';
import Home from './Home';
import SinglePlayer from './SinglePlayer';

function App() {
  const [players, setPlayers] = useState([]);
  const [playersDisplayed, setPlayersDisplayed] = useState([]);

  const updatePlayers = (newPlayers) => {
    newPlayers.sort((a, b) => a.id - b.id);
    setPlayers(newPlayers);
  }

  useEffect(() => { fetchAllPlayers(updatePlayers); }, []);

  return (
    <>
      <h1>Bowling with Puppies</h1>
      <Routes>
        <Route path="/" element={<Home {...{ players, updatePlayers, playersDisplayed, setPlayersDisplayed }} />} />
        <Route path="/:id" element={<SinglePlayer {...{ players, updatePlayers }} />} />
      </Routes>
    </>
  )
}

export default App
