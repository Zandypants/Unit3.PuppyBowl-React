import PlayerCard from './PlayerCard';
import SearchBar from './SearchBar';

const PlayerList = (props) => {
  const { playersDisplayed, players } = props;
  return <section>
    <SearchBar {...props} />
    {
      playersDisplayed.length > 0 ?
        <div className='containerCards'>{
          playersDisplayed.map((puppy, i) => <PlayerCard key={i} player={puppy} {...props} />)}
        </div>
        : players.length > 0 ? <p>Try searching the bowl more carefully for 🐶</p> : <p>Oh no! 😮 The puppies escaped the bowl!</p>
    }
  </section>
}

export default PlayerList