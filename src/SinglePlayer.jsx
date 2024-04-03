import { useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { useParams, useNavigate } from "react-router-dom"

const SinglePlayer = ({ players, updatePlayers, teams }) => {
  const params = useParams();
  const navigate = useNavigate();

  const player = (players && params.id) ? players.find((p) => p.id == params.id) : null; // loose equality intentional here
  const team = (teams && player && player.teamId) ? teams.find((t) => t.id === player.teamId) : null;

  useEffect(() => {
    if (!player) navigate("/");
  });

  return <div className="containerCards">
    {
      player
        ? <PlayerCard isDetailed={true} {...{ player, updatePlayers, team }} />
        : <h1>Puppy {params.id} was not found...</h1>
    }
  </div>
}

export default SinglePlayer