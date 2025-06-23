
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './App.css';
import RestaurantCard from './components/RestaurantCard';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <h1>Bienvenidos al Restaurante JAMpedrano <br/>de Heyden Aldana</h1>
      <h2> ¿Que desea hacer? </h2>
      <RestaurantCard />
      <Restaurants/>
    </div>
  );
}

export default App;
