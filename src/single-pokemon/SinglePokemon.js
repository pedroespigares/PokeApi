import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SinglePokemon.css";

function SinglePokemon({ pokemonURL}) {
    const [pokemonData, setPokemonData] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    
    useEffect(() => { getPokemonData() }, []);

    function getPokemonData(){
        fetch(pokemonURL)
        .then((response) => response.json())  
        .then((apiData) => {
            setPokemonData(apiData);
            setHasLoaded(true);
            setPokemonTypes(apiData.types);
        });
    }

    if(hasLoaded){
        return(
            <>
            <div className="card col-lg-3 mb-5 mt-5 pt-5">
                <img src={pokemonData.sprites.front_default} className="card-img-top" alt={pokemonData.name}/>
                <div className="card-body">
                    <h4 className="card-title fs-2 pb-4">{pokemonData.name.toUpperCase()}</h4>
                    <div className="d-flex justify-content-center gap-2 pb-3">
                    {pokemonTypes.map((type) => {
                        return (
                            <img key={type.type.name} src={require(`../assets/images/types/${type.type.name}.png`)} className="pokemon_types" alt="Pokemon type"/>
                        )
                    })}
                    </div>
                    <Link to={`/pokemon/${pokemonData.name}`}><i class="fa-solid fa-question pt-3"></i></Link>
                </div>
            </div>
            </>
          );  
    }
    
}

export default SinglePokemon;