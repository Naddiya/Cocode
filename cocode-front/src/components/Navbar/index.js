// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';


// == Import : local
import './navbar.scss';
import BreadCumbs from 'src/components/BreadCrumbs';
import { Breadcrumbs } from '@material-ui/core';
import IconBreadcrumbs from '../BreadCrumbs';
// == Composant
const Navbar = () => {

    return (
        <div className="navbar">
            <div>
                <NavLink to="/" exact>
                    <img className="navbar-logo" alt="logo" src="src/assets/cocode-logo.png" />
                </NavLink>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/projects" className="navbar-link">Projets</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className="navbar-link">Mon Profil</NavLink>
                </li>
                <li>
                    <NavLink to="#" className="navbar-link button-link button-link-connect">Connect</NavLink>
                </li>
                <li>
                    <NavLink to="#" className="navbar-link button-link button-link-subscribe" >Projets</NavLink>
                </li>

                {/* <li>
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
                </li> */}
            </ul>
            <IconBreadcrumbs />
        </div>
    );
};

// == Export
export default Navbar;

