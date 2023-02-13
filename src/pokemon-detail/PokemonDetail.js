import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import "./PokemonDetail.css";

function PokemonDetail() {
    const name = useParams().pokemonName;
    const [pokemonData, setPokemonData] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    
    useEffect(() => { getPokemonData() }, []);

    function getPokemonData(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())  
        .then((apiData) => {
            setPokemonData(apiData);
            setHasLoaded(true);
        });
    }

    if(hasLoaded){
        return (
            <>
                <Header/>
                <h1>{pokemonData.name}</h1>
                <Footer/>
            </>
        )
    }
}

export default PokemonDetail;