import Header from '../header/Header';
import Footer from '../footer/Footer';

import './Home.css';

function Home(){
    return <>
    <Header />
    <div className="card lg-3 mt-5 pt-5 mb-5 pb-5">
        <div className="row g-0">
        <div className="col-lg-6 ps-5 d-flex justify-content-center align-items-center">
            <div className="card-body">
            <h5 className="card-title">PokeApi Game</h5>
            <p className="card-text mt-4 mb-4">On this page you can consult your favorite pokemon and even play mini-games with them!</p>
            </div>
        </div>
        <div className="col-lg-6">
            <img src={require("../assets/images/pikachu.png")} className="img-fluid" alt="Pikachu" />
        </div>
        </div>
    </div>

    <div class="card lg-3 mt-5 pt-5">
    <div class="row g-0 ps-5">
      <div class="col-lg-6 ps-5 d-flex justify-content-center align-items-center">
        <div class="card-body">
          <div class="container">
            <div class="row mb-5">
              <div class="col">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4 d-flex justify-content-center align-items-center pe-5">
                      <img src={require("../assets/images/electric.png")} className="img-fluid" alt="Electric type" />
                    </div>
                    <div class="col-md-8 d-flex flex-column justify-content-center align-items-center">
                      <div class="mini-card-body">
                        <h5 class="mini-card-title">Check your favourites Pokemons</h5>
                        <p class="mini-card-text">Know more about them and their abilities!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-5">
              <div class="col">
                <div class="col">
                  <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4 d-flex justify-content-center align-items-center pe-5">
                      <img src={require("../assets/images/fairy.png")} className="img-fluid" alt="Fairy type" />
                      </div>
                      <div class="col-md-8 d-flex flex-column justify-content-center align-items-center">
                        <div class="mini-card-body">
                          <h5 class="mini-card-title">Play mini-games</h5>
                          <p class="mini-card-text">In this page we offer differents mini-games with Pokemons!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="col">
                  <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4 d-flex justify-content-center align-items-center pe-5">
                      <img src={require("../assets/images/water.png")} className="img-fluid" alt="Water type" />
                      </div>
                      <div class="col-md-8 d-flex flex-column justify-content-center align-items-center">
                        <div class="mini-card-body">
                          <h5 class="mini-card-title">Curiosities</h5>
                          <p class="mini-card-text">We offer you some curiosities about the pokedex</p>
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
      <div class="col-lg-6 d-flex justify-content-center align-items-center">
      <img src={require("../assets/images/pokeball.png")} className="img-fluid" alt="Pokeball" />
      </div>
    </div>
    </div>
    <Footer />
    </>
}

export default Home;