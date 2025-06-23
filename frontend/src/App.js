
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Bienvenidos al Restaurante JAMpedrano <br/>de Heyden Aldana</h1>
        <h2> ¿Que desea hacer?
          <Badge bg="secondary" as={Button}>
            Ver
          </Badge>
        </h2>
      </header>
    </div>
  );
}

export default App;
