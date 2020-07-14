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
        <h1 className="welcome-title">Pens are fucking dried up </h1>
        <p className="welcome-subtitle">
          You are not your fucking work. Your rapidograph pens are fucking dried up, the x-acto blades in your bag are rusty, 
          and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something fucking original.
          Never let your guard down by thinking you’re fucking good enough. A good fucking composition is the result of
          
        </p>

        <div className="welcome-buttons">
          <NavLink to="/project-creation"><button className="welcome-buttons-button cta-button">Lancez-vous !</button></NavLink>
          {/* <SubscribeModal className="welcome-buttons-button cta-button">Lancez-vous !</SubscribeModal> */}
          <button className="welcome-buttons-button">En savoir plus</button>
        </div>
      </div>
      <img className="team-pic" alt="image-team" src="src/assets/teamPic.png" />
    </main>

    <svg className="wave" viewBox="0 0 1170 126" xmlns="http://www.w3.org/2000/svg">
      <path className="wave-path" fill="#FFF" fillRule="evenodd" d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z" />
    </svg>
  </div>
);

// == Export
export default Home;

