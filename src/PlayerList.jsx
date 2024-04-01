import PlayerCard from './PlayerCard';

const PlayerList = ({ players, setSelectedID }) => {
  return <section> {
    players.length > 0 ?
      <div className='containerCards'>{
        players.map((puppy, i) => <PlayerCard key={i} player={puppy} onClick={()=>setSelectedID(puppy.id)} />)}
      </div>
      : <p>Oh no! 😮 The puppies escaped the bowl!</p>
  }
  </section>
}

export default PlayerList