import { useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { useParams, useNavigate } from "react-router-dom"

const SinglePlayer = (props) => {
  const { players, teams } = props;
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
        ? <PlayerCard isDetailed={true} {...{ player, team, ...props }} />
        : <h1>Puppy {params.id} was not found...</h1>
    }
  </div>
}

export default SinglePlayer