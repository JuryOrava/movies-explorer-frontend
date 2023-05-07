import React from 'react';

import NavTab from '../NavTab/NavTab.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';

//import SearchForm from '../SearchForm/SearchForm.js';

import './Main.css';

function Main(props) {  

console.log(props.loggedIn)

    return (
      <>
        {!props.loggedIn && <NavTab />}
        <main className="main__content">
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </main>
        {!props.loggedIn && <Footer />}
      </>
    );
  }
  
  export default Main;



