import React from 'react';

import './MoviesCard.css';

// import { CurrentUserContext } from '../../contexts/CurrentUserContext'; // Понадобится при реализации функционала активности иконки

function MoviesCard(props) {

  return (
    <>
      <div className="movie__desc">
        <button className="movie__favourites"></button>
        <p className="movie__name">{props.card.name}</p>
        <p className="movie__time">{props.card.time}</p>
      </div>
      <img className="movie__image" src={props.card.image} alt={props.card.name}/>
    </>
  )
}
  
  export default MoviesCard;