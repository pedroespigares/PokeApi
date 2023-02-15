import './Home.css';

function Home(){
    return <>
    <div className="card lg-3 mt-5 pt-5 mb-5 pb-5">
        <div className="row g-0">
        <div className="col-lg-6 ps-5 d-flex justify-content-center align-items-center">
            <div className="card-body">
            <h5 className="card-title">PokeApi Game</h5>
            <p className="card-text mt-4 mb-4 fs-4">On this page you can consult your favorite pokemon and even play mini-games with them!</p>
            </div>
        </div>
        <div className="col-lg-6">
            <img src={require("../assets/images/pikachu_gif.gif")} className="img-fluid w-50" alt="Pikachu" />
        </div>
        </div>
    </div>

    <div className="card lg-3 mt-5 pt-5 mb-5 pb-5">
    <div className="row g-0 ps-5">
      <div className="col-lg-6 ps-5 d-flex justify-content-center align-items-center">
        <div className="card-body">
          <div className="container">
            <div className="row mb-5">
              <div className="col">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center pe-5">
                      <img src={require("../assets/images/amarillo.png")} className="img-fluid w-75" alt="Electric type" />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                      <div className="mini-card-body">
                        <h5 className="mini-card-title fs-1">Check your favourites Pokemons</h5>
                        <p className="mini-card-text">Know more about them and their abilities!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4 d-flex justify-content-center align-items-center pe-5">
                      <img src={require("../assets/images/rojo.png")} className="img-fluid w-75" alt="Fairy type" />
                      </div>
                      <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                        <div className="mini-card-body">
                          <h5 className="mini-card-title fs-1">Play mini-games</h5>
                          <p className="mini-card-text">In this page we offer differents mini-games with Pokemons!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4 d-flex justify-content-center align-items-center pe-5">
                      <img src={require("../assets/images/azul.png")} className="img-fluid w-75" alt="Water type" />
                      </div>
                      <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                        <div className="mini-card-body">
                          <h5 className="mini-card-title fs-1">Curiosities</h5>
                          <p className="mini-card-text">We offer you some curiosities about the pokedex</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-center align-items-center">
      <img src={require("../assets/images/pokeball.png")} className="img-fluid" alt="Pokeball" />
      </div>
    </div>
    </div>
    </>
}

export default Home;