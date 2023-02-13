import { useState, useEffect } from "react";

import "./WhoPokemon.css";

function WhoPokemon(props) {
    const [selectedPokemonData, setSelectedPokemonData] = useState([]);
    const [hasLoaded, sethasLoaded] = useState(false);

    // Datos de 3 pokemons random para el juego

    const [randomizedPokemonList, setRandomizedPokemonList] = useState([]);

    useEffect(() => { getSinglePokemonData() }, []);

    function getSinglePokemonData(){
        fetch(props.selectedPokemon.url)
        .then((response) => response.json())  
        .then((apiData) => {
            setSelectedPokemonData(apiData);
            setRandomizedPokemonList([props.selectedPokemon, props.firstRandomPokemon, props.secondRandomPokemon, props.thirdRandomPokemon]);
            sethasLoaded(true);
        });
    }

    function shuffleArray(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    if (hasLoaded) {
        shuffleArray(randomizedPokemonList);
        return <>
        <div className="who_pokemon_card pb-5">
            <img className="who_pokemon_imagen w-25" src={selectedPokemonData.sprites.front_default} alt="pokemon" />
            <div className="who_pokemon_card-body">
                <h5 className="who_pokemon_card-title">Who is this pokemon?</h5>
                <div className="who_pokemon_buttons">
                    {randomizedPokemonList.map((pokemon, index) => {
                        return <button className="who_pokemon_button" key={index}>{pokemon.name}</button>
                    })}
                </div>
            </div>
        </div>
        </>
    }
}

export default WhoPokemon;