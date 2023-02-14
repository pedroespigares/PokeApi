import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./PokemonDetail.css";

function PokemonDetail() {
    const name = useParams().pokemonName;
    const [pokemonData, setPokemonData] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [pokemonStats, setPokemonStats] = useState([]);
    
    useEffect(() => { getPokemonData() }, []);

    function getPokemonData(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())  
        .then((apiData) => {
            setPokemonData(apiData);
            setHasLoaded(true);
            setPokemonTypes(apiData.types);
            setPokemonStats(apiData.stats);
        });
    }
    
    if(hasLoaded){
        return (
            <>
                <div className="card mt-5 pt-5 mb-5 pb-5">
                <div className="row g-0">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-content-center">
                    <div id="pokemonCarousel" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#pokemonCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#pokemonCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center">
                                <img src={pokemonData.sprites.other.home.front_default} className="d-block w-75" alt="Pokemon front default"/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center">
                                <img src={pokemonData.sprites.other.home.front_shiny} className="d-block w-75" alt="Pokemon front shiny"/>
                            </div>
                        </div>   
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#pokemonCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#pokemonCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center gap-3">
                        <h5 className="card-title">{pokemonData.name}</h5>
                        <div className="d-flex justify-content-center align-items-center">
                        {pokemonTypes.map((type) => {
                            return (
                                <img key={type.type.name} src={require(`../assets/images/types/${type.type.name}.png`)} className="pokemon_types" alt="Pokemon type"/>
                            )
                        })}
                        </div>
                        <p className="card-text fs-4">Height: <span>{pokemonData.height / 10} m</span></p>
                        <p className="card-text fs-4">Weight: <span>{pokemonData.weight / 10} kg</span></p>
                        <p className="card-text fs-4">Base experience: <span>{pokemonData.base_experience}</span></p>
                        <p className="card-text fs-4">Base Stats:</p>
                        <table className="pokemon_stats">
                            <thead>
                                <tr>
                                    <th scope="col fs-4">Stat</th>
                                    <th scope="col fs-4">Base</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pokemonStats.map((stat) => {
                                    return (
                                        <tr key={stat.stat.name}>
                                            <td>{stat.stat.name}</td>
                                            <td>{stat.base_stat}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default PokemonDetail;