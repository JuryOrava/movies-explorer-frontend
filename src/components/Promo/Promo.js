//компонент с вёрсткой баннера страницы «О проекте».

import React from 'react';
import {Link} from 'react-router-dom';
import promoImg from '../../images/web-ball.svg';

import './Promo.css';

function Promo(props) {
    return (
      <>
        <section className="promo">
            <div className="promo__container">
                <div>
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <Link to={'/#about-project'} className="promo__link">Узнать больше</Link>
                </div>
                <img className="promo__img" alt="Шар из текста" src={promoImg}/>
            </div>
        </section>
      </>
    );
  }
  
  export default Promo;