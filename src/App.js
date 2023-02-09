import Navbar from './components/Navbar';
import Contenido from './components/Contenido';
import './styles/App.css';

function App() {
  return (
    <div className="App">
						<Navbar
						imagen={"flecha.png"}
						/>
						<Contenido/>
    </div>
  );
}

export default App;
