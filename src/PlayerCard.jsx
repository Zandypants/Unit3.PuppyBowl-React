import "./PlayerCard.css"
import { deletePlayer } from "./api.jsx"

const PlayerCard = ({ player, isDetailed, setSelectedID, updatePlayers }) => {
  let cardClass = `card`;
  let selectFn, selectContent;
  if (isDetailed) {
    cardClass += " scaleUp";
    selectContent = "Back to All";
    selectFn = () => setSelectedID(null);
  } else {
    selectContent = "See Details";
    selectFn = () => setSelectedID(player.id);
  }

  return <section className={cardClass}>
    <button className="buttonX" onClick={() => deletePlayer(player.id, updatePlayers)}>X</button>
    <img src={player.imageUrl} alt={player.name} />
    <div className="containerCardInfo">
      <div>{player.name}</div>
      <div>{player.id}</div>
      {isDetailed && <>
        <div>{player.breed}</div>
      </>}
      <button onClick={selectFn}>{selectContent}</button>
    </div>
  </section>
}

export default PlayerCard