import "./PlayerCard.css"
import { deletePlayer } from "./api.js"
import { useNavigate } from "react-router-dom"

const PlayerCard = ({ player, isDetailed, team, fetchAPI }) => {
  const navigate = useNavigate();

  let cardClass = `card`;
  let selectFn, selectContent;
  if (isDetailed) {
    cardClass += " scaleUp";
    selectContent = "Back to All";
    selectFn = () => navigate("/");
  } else {
    selectContent = "See Details";
    selectFn = () => navigate(`/${player.id}`);
  }

  const deleteSelf = async () => {
    await deletePlayer(player.id);
    await fetchAPI();
  }

  return <section className={cardClass}>
    <button className="buttonX" onClick={() => deleteSelf()}>X</button>
    <img src={player.imageUrl} alt={player.name} />
    <div className="containerCardInfo">
      <div>{player.id}</div>
      <div>{player.name}</div>
      {isDetailed && <>
        <div>{player.breed}</div>
        {
          team && team.name ? <>
            <div>Team {team.name}</div>
            <div>{player.status}</div>
          </>
            : <div>Team Unassigned</div>
        }
      </>}
      <button onClick={selectFn}>{selectContent}</button>
    </div>
  </section>
}

export default PlayerCard