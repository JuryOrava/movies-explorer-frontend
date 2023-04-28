import React from 'react';

import './MoviesCard.css';

// import { CurrentUserContext } from '../../contexts/CurrentUserContext'; // Понадобится при реализации функционала активности иконки

function MoviesCard(props) {

  return (
    <>
      <div className="movie__desc">
        <div className="movie__favourites"></div>
        <p className="movie__name">{props.card.name}</p>
        <p className="movie__time">{props.card.time}</p>
      </div>
      <div className="movie__image" style={{ backgroundImage: `url(${props.card.image})` }} ></div>
    </>
  )
}
  
  export default MoviesCard;