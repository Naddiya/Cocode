// == Import : npm
import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

// == Import : local

// == Composant
const NotFound = () => {
    state = {}
    render() {
        return (
            <>
                <h1>
                    NOT FOUND
            </h1>
                <img src="" alt="">

                </img>
                <div style="width:100%;height:0;padding-bottom:65%;position:relative;">
                    <iframe src="https://giphy.com/embed/IHOOMIiw5v9VS"
                        width="100%"
                        height="100%"
                        style="position:absolute"
                        frameBorder="0"
                        class="giphy-embed"
                        allowFullScreen>
                    </iframe>
                </div>
                <p>
                    <a href="https://giphy.com/gifs/mel-brooks-spaceballs-IHOOMIiw5v9VS">via GIPHY</a>
                </p>
                <button>
                    Retrouver Cocode
            </button>
            </>
        );
    }
}



// == Export
export default NotFound;


