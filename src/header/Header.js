import { Link } from "react-router-dom";
import "./Header.css";

function Header(){
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light pt-5">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={require("../assets/images/logo.png")} alt="PokeApi Logo" width="180" height="88"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 gap-5">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pokemons" className="nav-link">Pokemons</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/play" className="nav-link">Play</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
    );
}

export default Header;