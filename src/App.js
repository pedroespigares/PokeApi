import { useState, useEffect } from 'react';
import  Header  from "./header/Header";
import  SinglePokemon  from './single-pokemon/SinglePokemon';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  // Metemos la URL en el estado para que se actualice con next
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=8");

  // useEffect sirve para ejecutar código cuando se monta el componente
  // y evitar que se ejecute en cada renderizado (infinito)
  useEffect(() => { getApiData() }, []);

  function getApiData(){
    fetch(URL)
    .then((response) => response.json())  
    .then((apiData) => {
      setPokemonList(pokemonList.concat(apiData.results));
      setURL(apiData.next)
    });
  }

  // loadMore se ejecuta cuando se pulsa el botón y solo llama a getDatosApi
  function loadMore(){
    getApiData();
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
      <div className="row">
        {
          pokemonList.map((pokemon) => (  
          <SinglePokemon key={pokemon.name} pokemonURL={pokemon.url} />
        ))}
        </div>
      </div>
      <button className="btn btn-primary"onClick={loadMore}>Load more</button>
    </div>
  );
}

export default App;
