// import Modules
import React, { Component } from 'react';

// import Components


// this Component
class NotFound extends Component {
    state = {}
    render() {
        return (
            <div classname="not-found">
                <h1 className="text-center m-3 text-dark">
                    Not Found
                </h1>
                <main>

                    <img className="not-found" src="https://media.giphy.com/media/IHOOMIiw5v9VS/source.gif" />
                </main>
                <div className="return-home">
                    <button>
                        <h2>Back to Cocode</h2>
                    </button>
                </div>

            </div>
        );
    }
}

export default NotFound;