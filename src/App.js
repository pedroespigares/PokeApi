import './App.css';
import Home from './home/Home';
import PokemonList from './pokemon-list/PokemonList';
import PokemonDetail from './pokemon-detail/PokemonDetail';
import Play from './play/Play';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="pokemons" element={<PokemonList/>}></Route>
          <Route path="pokemon/:pokemonId" element={<PokemonDetail/>}></Route>
          <Route path="play" element={<Play/>}></Route>
          {/* Elemento 404 es con path * */}
          {/* <Route path="*" element={<h1>404 Not Found</h1>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Para obtener los parametros de la URL se usa useParams();
export default App;
