// компонент с навигацией по странице «О проекте».

import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';

import './NavTab.css';

function NavTab(props) {
    return (
      <>
        <section className="nav__tab">
            <div className="main__nav-tab">
                <Link to={'/'}><img className="logo" alt="Логотип" src={logo}/></Link>
                <ul className="main__nav-links">
                    <li><Link to={'/sign-up'} className="main__nav-link">Регистрация</Link></li>
                    <li><Link to={'/sign-in'} className="main__nav-link main__nav-link_in">Войти</Link></li>
                </ul>
            </div>
        </section>
      </>
    );
  }
  
  export default NavTab;