import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SinglePokemon.css";

function SinglePokemon({ pokemonURL}) {
    const [pokemonData, setPokemonData] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    
    useEffect(() => { getPokemonData() }, []);

    function getPokemonData(){
        fetch(pokemonURL)
        .then((response) => response.json())  
        .then((apiData) => {
            setPokemonData(apiData);
            setHasLoaded(true);
        });
    }

    if(hasLoaded){
        return(
            <>
            <div className="card col-lg-3 mb-5 mt-5 pt-5">
                <img src={pokemonData.sprites.front_default} className="card-img-top" alt={pokemonData.name}/>
                <div className="card-body">
                    <h4 className="card-title fs-2">{pokemonData.name.toUpperCase()}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{pokemonData.types[0].type.name.toUpperCase()}</h6>
                    <Link to={`/pokemon/${pokemonData.name}`} className="btn btn-primary">Saber más</Link>
                </div>
            </div>
            </>
          );  
    }
    
}

export default SinglePokemon;