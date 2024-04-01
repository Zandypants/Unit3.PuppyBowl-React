import PlayerCard from './PlayerCard';

const PlayerList = ({ players, setSelectedID, updatePlayers }) => {
  return <section> {
    players.length > 0 ?
      <div className='containerCards'>{
        players.map((puppy, i) => <PlayerCard key={i} player={puppy} {...{setSelectedID, updatePlayers}}/>)}
      </div>
      : <p>Oh no! 😮 The puppies escaped the bowl!</p>
  }
  </section>
}

export default PlayerList