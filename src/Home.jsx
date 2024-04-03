import AddPlayerForm from './AddPlayerForm';
import PlayerList from './PlayerList';

const Home = (props) => {
  return <>
    <section className="centerContainer">
      <AddPlayerForm {...props} />
    </section>
    <PlayerList {...props} />
  </>
}

export default Home