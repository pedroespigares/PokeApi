import "./Header.css";

function Header(){
    return (
        <header className="pt-5">
            <div  className="d-flex justify-content-evenly align-items-center mb-5 pb-5">
                <img src={require("../assets/images/pokedex.png")} alt="Pokedex" />
                <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI" />
            </div>
        </header>
    );
}

export default Header;