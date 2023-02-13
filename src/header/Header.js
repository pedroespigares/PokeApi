import { Link } from "react-router-dom";
import "./Header.css";

function Header(){
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <img src={require("../assets/images/pikalogo.png")} alt="Logo" width="85" height="73" className="d-inline-block align-text-top"/>
            <Link to="/" className="navbar-brand ps-5">PokeApi Game</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0 gap-5">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/pokemons" className="nav-link" aria-current="page">Pokemons</Link>
                </li>
                <li className="nav-item">
                    <Link to="/play" className="nav-link" aria-current="page">Play</Link>
                </li>
                </ul>
                
                <div className="d-flex gap-4">
                    <button className="btn" type="submit">Sign In</button>
                    <button  className="btn" type="submit">Get Started</button>
                </div>
            </div>
            </div>
        </nav>
        </header>
    );
}

export default Header;