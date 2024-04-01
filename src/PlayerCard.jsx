import "./PlayerCard.css"

const PlayerCard = ({player}) => {
  return <section className="card">
    <img src={player.imageUrl} alt={player.name}/>
    <div className="containerCardInfo">
      <div>{player.name}</div>
      <div>{player.id}</div>
    </div>
  </section>
}

export default PlayerCard