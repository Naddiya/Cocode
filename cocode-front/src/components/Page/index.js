// == Import : npm
import React, { Component } from 'react';
import { Route, Redirect, Switch, Router } from "react-router-dom";
// import { slide as Menu } from "react-burger-menu";
// import axios from 'axios';

// == Import : local
import Home from 'src/components/Home';
import NotFound from 'src/components/NotFound';
import Ariane from 'src/components/Arianne';


// == Composant
class Page extends Component {
    state = {}
    render() {
        return (
            <div>
                <Ariane />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" />
                </Switch>
            </div>
        );
    }
}


export default Page;