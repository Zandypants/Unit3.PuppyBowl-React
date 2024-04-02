import PlayerCard from './PlayerCard';
import SearchBar from './SearchBar';

const PlayerList = (props) => {
  const { playersDisplayed } = props;
  return <section>
    <SearchBar {...props} />
    {
      playersDisplayed.length > 0 ?
        <div className='containerCards'>{
          playersDisplayed.map((puppy, i) => <PlayerCard key={i} player={puppy} {...props} />)}
        </div>
        : <p>Oh no! 😮 The bowl of puppies is empty!</p>
    }
  </section>
}

export default PlayerList