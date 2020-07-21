// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './home.scss';
// import SubscribeModal from 'src/containers/Subscribe';

// == Composant
const Home = () => (
  <div className="div-home">
    <main className="main-container">

      <div className="welcome">
        <h1 className="welcome-title">Cocode, le site de cocoding</h1 >
        <p className="welcome-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I</p>

        <div className="welcome-buttons">
          <NavLink to="/project-creation"><button className="welcome-buttons-button cta-button">Lancez-vous !</button></NavLink>
          {/* <SubscribeModal className="welcome-buttons-button cta-button">Lancez-vous !</SubscribeModal> */}
          <button className="welcome-buttons-button">En savoir plus</button>
        </div>
      </div>
    </main>

    {/* <svg className="wave" viewBox="0 0 1170 126" xmlns="http://www.w3.org/2000/svg">
      <path className="wave-path" fill="#FFF" fillRule="evenodd" d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z" />
    </svg> */}
  </div>
);

// == Export
export default Home;

