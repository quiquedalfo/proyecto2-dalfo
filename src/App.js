import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
    </div>
  );
}

export default App;