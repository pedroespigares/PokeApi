import { useState, useEffect } from "react";

import "./Play.css";

function Play() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [selectedPokemonData, setSelectedPokemonData] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);

    useEffect(() => { getSinglePokemonData(randomNumber(1, 1279)) }, []);

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
      
    function getSinglePokemonData(randomNumber){
        fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
        .then((response) => response.json())  
        .then((apiData) => {
            setSelectedPokemonData(apiData);
            setPokemonTypes(apiData.types);
            setHasLoaded(true);
        });
    }


    function checkIfCorrectAnswer(e){
        e.preventDefault();
        let typedPokemon = document.getElementById("typed_pokemon").value;
        if (typedPokemon.toLowerCase() === selectedPokemonData.name) {
            typedPokemon = "";
            document.getElementsByClassName("who_pokemon_imagen")[0].classList.toggle("who_pokemon_imagen_correct");
        } else {
            alert("Wrong!");
        }
    }

    function showHint(e){
        e.target.innerText = "Hide Hint";
        let hints_img = document.getElementsByClassName("pokemon_types_hint");
        for (let i = 0; i < hints_img.length; i++) {
            if(hints_img[i].style.display === "block"){
                hints_img[i].style.display = "none";
                e.target.innerText = "Show Hint";
            } else{
                hints_img[i].style.display = "block";
            }
        }
    }

    function refresh(){
        getSinglePokemonData(randomNumber(1, 1279));
        document.getElementsByClassName("who_pokemon_imagen")[0].classList.remove("who_pokemon_imagen_correct");
        document.getElementById("typed_pokemon").value = "";
    }

    if (hasLoaded) {
        return <>
        <div className="d-flex justify-content-end">
            <i id="refresh" onClick={refresh} className="fa-solid fa-arrows-rotate me-5 pt-5"></i>
        </div>
        <h1 className="play_title fs-1 pt-5">Who's that pokemon?</h1>
        <h2 className="play_subtitle fs-3 pt-5 mt-2 mb-5">You have to guess the pokemon by its image</h2>
        <p>{selectedPokemonData.name}</p>
        <div className="play_container pb-5">
        <div className="who_pokemon_card mb-5">
            <img src={require("../assets/images/wtp_template.png")} className="card-img" alt="Who's that pokemon template"/>
                <div className="card-img-overlay">
                <img className="who_pokemon_imagen w-25" src={selectedPokemonData.sprites.front_default} alt="pokemon" draggable="false"/>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                {pokemonTypes.map((type) => {
                    return (
                        <img key={type.type.name} src={require(`../assets/images/types/${type.type.name}.png`)} className="pokemon_types_hint mb-5" alt="Pokemon type"/>
                    )
                })}
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <input id="typed_pokemon" className="who_pokemon_input fs-3" type="text" placeholder="Type the pokemon name..."/>
                <button className="who_pokemon_check_button fs-3" onClick={(e) => checkIfCorrectAnswer(e)}>Check</button>
                <button className="who_pokemon__ng_button fs-3" onClick={refresh}>New game</button>
            </div>
            <h6 className="who_pokemon_hint fs-3 mt-5" onClick={(e) => showHint(e)}>Get Hint</h6>
        </div>
            </>
        }
}

export default Play;