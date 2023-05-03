import React from 'react';

import './MoviesCard.css';

function MoviesCard(props) {
  let imageCard = !props.pagedMoviesSave ? 'https://api.nomoreparties.co/' + props.card.image.url : props.card.image;

  function handleSavedFilm() {
    !isSaved ? props.handleSaveMovies(props.card) : props.handleDeleteMovies(props.card);
  }

  const isSaved = props.savedMovies.some(i => i.nameRU === props.card.nameRU);

  const cardLikeButtonClassName = ( 
    `movie__favourites ${isSaved && 'movie__favourites_active'}`
  );

  let durationHours = Math.trunc(props.card.duration / 60);
  let durationMovies = `${durationHours}ч ${props.card.duration - durationHours * 60}м`

  return (
    <>
      <div className="movie__desc">
        <button className={cardLikeButtonClassName} onClick={handleSavedFilm}></button>
        <p className="movie__name">{props.card.nameRU}</p>
        <p className="movie__time">{durationMovies}</p>
      </div>
      <a href={props.card.trailerLink} target="_blank" title="Посмотреть трейлер на YouTube">
        <img className="movie__image" src={imageCard} alt={props.card.nameRU}/>
      </a>
    </>
  )
}
  
  export default MoviesCard;