import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { fetchAllPlayers, fetchTeams } from './api';
import Home from './Home';
import SinglePlayer from './SinglePlayer';

function App() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [playersDisplayed, setPlayersDisplayed] = useState([]);

  const updatePlayers = (newPlayers) => {
    newPlayers.sort((a, b) => a.id - b.id);
    setPlayers(newPlayers);
  }

  const fetchAPI = () => {
    fetchAllPlayers(updatePlayers);
    fetchTeams(setTeams); 
  }

  useEffect(() => { fetchAPI(); }, []);

  useEffect(() => { 
    console.log(teams);
  }, [teams]);

  return (
    <>
      <h1>Bowling with Puppies</h1>
      <Routes>
        <Route path="/" element={<Home {...{ players, updatePlayers, playersDisplayed, setPlayersDisplayed, teams }} />} />
        <Route path="/:id" element={<SinglePlayer {...{ players, updatePlayers, teams }} />} />
      </Routes>
    </>
  )
}

export default App
