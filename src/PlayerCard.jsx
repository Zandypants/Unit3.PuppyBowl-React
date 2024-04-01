import "./PlayerCard.css"

const PlayerCard = ({ player, onClick, isDetailed }) => {
  let cardClass = `card`;
  if (isDetailed) cardClass += " scaleUp";

  return <section className="containerCards">
    <section className={cardClass}>
      <img src={player.imageUrl} alt={player.name} />
      <div className="containerCardInfo">
        <div>{player.name}</div>
        <div>{player.id}</div>
        {isDetailed && <>
          <div>{player.breed}</div>
        </>}
        <button onClick={onClick}>{isDetailed ? "Back to All" : "See Details"}</button>
      </div>
    </section>
  </section>
}

export default PlayerCard