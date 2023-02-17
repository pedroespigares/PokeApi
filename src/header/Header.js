import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

import "./Header.css";

function Header(){
    const [userID, setUserID] = useState("");
    const [username, setUsername] = useState("");
    const [userPhoto, setUserPhoto] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserID(user.uid);
        setUsername(user.email);
        setUserPhoto(user.photoURL);
        // ...
      } else {
        // User is signed out
        // ...
      }
    })
    }, []);

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            setUserID("");
            setUsername("");
            setUserPhoto("");
        }).catch((error) => {
        // An error happened.
        });
    }


    if(userID !== ""){
        return (
            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={require("../assets/images/pikalogo.png")} alt="Logo" width="85" height="73" className="d-inline-block align-text-top"/>
                    <Link to="/" className="navbar-brand ps-5 fs-2">PokeApi Game</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0 gap-5">
                            <li className="nav-item">
                                <Link to="/" className="nav-link fs-4" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pokemons" className="nav-link fs-4" aria-current="page">Pokemons</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/play" className="nav-link fs-4" aria-current="page">Play</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/leaderboard" className="nav-link fs-4" aria-current="page">Leaderboard</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <img referrerPolicy="no-referrer" width="50" height="50" className="d-inline-block align-text-top me-4 rounded-circle" alt="user photo" src={userPhoto}/>
                    <span id="userMessage" className="navbar-text">
                        Welcome <span id="userEmail">{username.split('@')[0]}</span>
                    </span>
                    <div className="d-flex gap-4">
                        <i className="fa-solid fa-right-to-bracket" onClick={handleLogout}></i>
                    </div>
                </div>
            </nav>
            </header>
        );
    } else {
        return(
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <img src={require("../assets/images/pikalogo.png")} alt="Logo" width="85" height="73" className="d-inline-block align-text-top"/>
            <Link to="/" className="navbar-brand ps-5 fs-2">PokeApi Game</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0 gap-5">
                <li className="nav-item">
                    <Link to="/" className="nav-link fs-4" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/pokemons" className="nav-link fs-4" aria-current="page">Pokemons</Link>
                </li>
                </ul>
                
                <div className="d-flex gap-4">
                    <Link to="/login" className="btn fs-3" type="submit">Log In</Link>
                    <Link to="/signup" className="btn fs-3" type="submit">Sign Up</Link>
                </div>
            </div>
            </div>
        </nav>
        </header>
        );
    }
}

export default Header;