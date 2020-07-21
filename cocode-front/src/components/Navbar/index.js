// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'



// == Import : local
import './navbar.scss';

// == Composant
const Navbar = () => {

    return (
        <div className="navbar">

            <NavLink className="navbar-logo" to="/" exact>
                <img className="navbar-logo-image" alt="logo" src="src/assets/cologo.png" />
                <h3 className="navbar-logo-text">Cocode.com</h3>
            </NavLink>

            {/* <Menu secondary>
                <Menu.Item name="Nest" />
                <Menu.Item name="Eggs" />
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
            </Menu> */}

            <div className="ui secondary menu">
                <a className="active orange item">Acceuil</a>
                <a className="item"> Tous les projets </a>
                <a className="item">Friends</a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i aria-hidden="true" className="search icon"></i>
                        </div>
                    </div>
                    <a className="item">Subscribe</a>
                </div>
            </div>


            {/* <ul className="navbar-links">
                <li>
                    <NavLink to="/projects" className="navbar-links-link">Projets</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className="navbar-links-link">Mon Profil</NavLink>
                </li>
                <li>
                    <NavLink to="#" className="navbar-links-link ">Connect</NavLink>
                </li>
                <li>
                    <NavLink to="#" className="navbar-links-link " >Inscription</NavLink>
                </li>

                <li>
                    {token.length > 3 && <NavLink to="/profile" className="navbar-link">Mon Profil</NavLink>}
                </li>
                <li>
                    {token === "" && <LoginModal className="button-link-connect" />}
                </li>
                <li className="navbar-link">
                    {token === "" && <SubscribeModal className="button-link button-link-subscribe" />}
                </li>
                <li className="navbar-link">
                    {token.length > 3 && <DisconnectModal className="button-link-connect" />}
                </li>
            </ul> */}


        </div>
    );
};

// == Export
export default Navbar;

