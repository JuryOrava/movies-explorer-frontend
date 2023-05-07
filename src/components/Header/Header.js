import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation.js';

import './Header.css';

function Header(props) {

  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const menuClassName = ( 
    `header__nav-icon ${isOpenMenu && 'header__nav_open'}` 
  );

  const openMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

    return (
      <>
        <header className="header">
          <div className="header__left">
            <Link to={'/'}><img className="logo" alt="Логотип" src={logo}/></Link>
            <Navigation isOpenMenu={isOpenMenu} clickLink={openMenu}/>
          </div>
          <div className={menuClassName} onClick={openMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
    </>
    );
  }
  
  export default Header;