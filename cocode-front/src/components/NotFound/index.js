// import Modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Components
import Home from 'src/components/Home';
import 'src/components/NotFound/notfound.scss';


// this Component
class NotFound extends Component {
    state = {}
    render() {
        return (
            <div className="notfound">
                <h1 className="notfound-title">
                    Not Found
                </h1>
                <img className="notfound-image"
                    src="https://media.giphy.com/media/IHOOMIiw5v9VS/source.gif"
                    // src="#"
                    alt="gif of eddie Murphy saying :'We aint found shit'" />
                <div className="notfound-redirection">
                    <Link to="/">
                        <button
                            className="notfound-redirection-button">
                            <h2 className="notfound-redirection-button-content">
                                Back to Cocode
                        </h2>
                        </button>



                    </Link>

                </div>
            </div>

        );
    }
}



export default NotFound;