import Header from "../header/Header";
import Footer from "../footer/Footer";
import WhoPokemon from "../who-pokemon/WhoPokemon";
import { useState, useEffect } from "react";

import "./Play.css";

function Play() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [allDataHasLoaded, setAllDataHasLoaded] = useState(false);

    // Datos de 3 pokemons random para el juego

    const [firstRandomPokemon, setFirstRandomPokemon] = useState(null);
    const [secondRandomPokemon, setSecondRandomPokemon] = useState(null);
    const [thirdRandomPokemon, setThirdRandomPokemon] = useState(null);


    useEffect(() => { getApiData() }, []);

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
      
    function getApiData(){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1279")
        .then((response) => response.json())  
        .then((apiData) => {
          setPokemonList(pokemonList.concat(apiData.results));
          setSelectedPokemon(apiData.results[randomNumber(0, apiData.results.length - 1)]);
          setFirstRandomPokemon(apiData.results[randomNumber(0, apiData.results.length - 1)]);
          setSecondRandomPokemon(apiData.results[randomNumber(0, apiData.results.length - 1)]);
          setThirdRandomPokemon(apiData.results[randomNumber(0, apiData.results.length - 1)]);
          setAllDataHasLoaded(true);
        });
    }



    if (allDataHasLoaded) {
        return <>
        <Header />
        <h1 className="play_title fs-1 pt-5 mt-5">Who's that pokemon?</h1>
        <h2 className="play_subtitle fs-3 pt-5 mt-5">You have to guess the pokemon by its image</h2>
        <p className="pokemon_name">{selectedPokemon.name}</p>
        <div className="play_container pb-5">
            <WhoPokemon 
            selectedPokemon= {selectedPokemon}
            firstRandomPokemon= {firstRandomPokemon}
            secondRandomPokemon= {secondRandomPokemon}
            thirdRandomPokemon= {thirdRandomPokemon}
            />
        </div>
        <Footer />
        </>
    }
}

export default Play;