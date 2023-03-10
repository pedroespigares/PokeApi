import { useState, useEffect } from 'react';
import  SinglePokemon  from '../single-pokemon/SinglePokemon';
import "./PokemonList.css";

function PokemonList(){
    const [pokemonList, setPokemonList] = useState([]);
    const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=8");

    useEffect(() => { getApiData() }, []);

    function getApiData(){
        fetch(URL)
        .then((response) => response.json())  
        .then((apiData) => {
          setPokemonList(pokemonList.concat(apiData.results));
          setURL(apiData.next)
        });
    }

    function loadMore(){
        getApiData();
    }

    return <>
      <div className="container">
      <div className="row">
        {
          pokemonList.map((pokemon) => (  
          <SinglePokemon key={pokemon.name} pokemonURL={pokemon.url} />
        ))}
        </div>
      </div>
      <button className="btn mt-5 mb-5 fs-4" onClick={loadMore}>Get more</button>
    </>
}

export default PokemonList;