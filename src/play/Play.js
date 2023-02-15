import { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

import "./Play.css";

function Play() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [selectedPokemonData, setSelectedPokemonData] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [typedPokemon, setTypedPokemon] = useState("");
    const [docID, setDocID] = useState("");
    const [pokemonLetters, setPokemonLetters] = useState([]);

    const [points, setPoints] = useState(0);
    const navigate = useNavigate();

    useEffect(() => { getSinglePokemonData(randomNumber(1, 1000)) }, []);

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
      
    function getSinglePokemonData(randomNumber){
        if(auth.currentUser === null){
            navigate("/login");
        }
        fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
        .then((response) => response.json())  
        .then((apiData) => {
            setSelectedPokemonData(apiData);
            setPokemonTypes(apiData.types);
            setHasLoaded(true);
            setPokemonLetters(apiData.name.split(""));
            readData();
        });
    }


    function checkIfCorrectAnswer(e){
        e.preventDefault();
        if (typedPokemon.toLowerCase() === selectedPokemonData.name) {
            setTypedPokemon("");
            document.getElementsByClassName("who_pokemon_imagen")[0].classList.toggle("who_pokemon_imagen_correct");
            setPoints(points + 1);
            updateData();
        } else {
            alert("Wrong!");
        }
    }

    function showHint(e){
        // Mostramos la imagen de los tipos del pokemon para que el usuario pueda verlos
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
        // Basicamente volvemos a cargar el dato de un pokemon aleatorio
        getSinglePokemonData(randomNumber(1, 1279));
        document.getElementsByClassName("who_pokemon_imagen")[0].classList.remove("who_pokemon_imagen_correct");
        document.getElementById("typed_pokemon").value = "";
    }

    // Obtenemos los puntos del usuario actual de firestore

    const readData = async () => {
        await getDocs(collection(db, "leaderboard"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs // datos de firestore
                    .map((doc) => ({...doc.data(), id:doc.id }));
                let userData = newData.filter((user) => user.userID === auth.currentUser.uid);
                setDocID(userData[0].id);
                setPoints(userData[0].points);
            })
    };


    // Actualizamos los puntos del usuario actual en firestore cada vez que acierta un pokemon
    
    const updateData = async () => {
        await updateDoc(doc(db, "leaderboard", docID), {
            points: points + 1,
          });
    };

    if (hasLoaded) {
        return <>
        <h1 className="play_title fs-1 pt-5">Who's that pokemon?</h1>
        <h2 className="play_subtitle fs-3 pt-5 mt-2 mb-5">You have to guess the pokemon by its image</h2>
        <h2 id="points" className="play_subtitle fs-3 pt-3 mb-5">Total points: <span id="user_points">{points}</span></h2>
        <div className="play_container pb-5">
        <div className="who_pokemon_card mb-5">
            <img src={require("../assets/images/wtp_template.png")} className="card-img" alt="Who's that pokemon template"/>
                <div className="card-img-overlay">
                <img className="who_pokemon_imagen w-25" src={selectedPokemonData.sprites.front_default} alt="pokemon" draggable="false"/>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="pokemon_types_hint who_pokemon_hint_text ">{pokemonLetters[0]}-{pokemonLetters[1]}-{pokemonLetters[2]}-{pokemonLetters[3]}</p>
                    <div className="d-flex justify-content-center align-items-center">
                    {pokemonTypes.map((type) => {
                        return (
                            <img key={type.type.name} src={require(`../assets/images/types/${type.type.name}.png`)} className="pokemon_types_hint mb-5" alt="Pokemon type"/>
                        )
                    })}
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <input id="typed_pokemon" className="who_pokemon_input fs-3" type="text" placeholder="Type the pokemon name..." value={typedPokemon} onChange={(e) => setTypedPokemon(e.target.value)}/>
                <button className="who_pokemon_check_button fs-3" onClick={(e) => checkIfCorrectAnswer(e)}>Check</button>
                <button className="who_pokemon__ng_button fs-3" onClick={refresh}>New game</button>
            </div>
            <h6 className="who_pokemon_hint fs-3 mt-5" onClick={(e) => showHint(e)}>Get Hint</h6>
        </div>
            </>
        }
}

export default Play;