// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Navbar from 'src/components/Navbar';
// import Burger from 'src/components/Burger';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div id="app">

    <Navbar />
    {/* <Burger /> */}
    <Page />
    <Footer />
  </div>
);

// == Export
export default App;
