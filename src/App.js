import React from 'react';
import './App.css';
import man from './img/man.jpg';
import Pilot from './Pilot';
import Facilement from './Facilement';

function App() {
  return (
    <main>
      <section>
        <div className="nav-container">
          <nav>
            <h1>Pakko</h1>
            <ul>
              <li>My Connector</li>
              <li>
                <a href="app" className="link">
                  M'inscrire
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="page">
          <div className="text">
            <h1>
              Gagnez du temps, <br /> faites ce que vous <br /> aimez!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolores sapiente earum quod, ipsum cupiditate dolor architecto.
              Officia ducimus ab porro nesciunt, dolores doloribus hic,
              exercitationem veniam quaerat nulla ipsam!
            </p>

            <button className="btn">Check It Out</button>
          </div>

          <div className="img">
            <img src={man} alt="" />
          </div>
        </div>
      </section>
      <Pilot />
      <Facilement />
    </main>
  );
}

export default App;
