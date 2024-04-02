import AddPlayerForm from './AddPlayerForm';
import PlayerList from './PlayerList';

const Home = (props) => {
  return <>
    <section className="centerContainer">
      <AddPlayerForm updatePlayers={props.updatePlayers} />
    </section>
    <PlayerList {...props} />
  </>
}

export default Home