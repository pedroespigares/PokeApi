import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import PokemonList from './pokemon-list/PokemonList';
import PokemonDetail from './pokemon-detail/PokemonDetail';
import Play from './play/Play';
import Signup from './signup/Signup';
import Login from './login/Login';
// import ListaDatos from './accesoBD/listaDatos';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  // useEffect(() => {
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     console.log(uid);
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="pokemons" element={<PokemonList/>}></Route>
          <Route path="pokemon/:pokemonName" element={<PokemonDetail/>}></Route>
          <Route path="play" element={<Play/>}></Route>
          <Route path="signup" element={<Signup/>}></Route>
          <Route path="login" element={<Login/>}></Route>            
          {/* Elemento 404 es con path * */}
          {/* <Route path="*" element={<h1>404 Not Found</h1>}></Route> */}
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

// Para obtener los parametros de la URL se usa useParams();
export default App;
