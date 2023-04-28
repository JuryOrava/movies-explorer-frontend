//компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.

import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.js';

import './MoviesCardList.css';

function MoviesCardList(props) {
  const moviesContainerClassName = ( 
    `movies__container ${!props.moviesBtnActive && 'movies__container_saved'}` 
  );

  return (
      <>
        <div className={moviesContainerClassName}>
          <ul className="movies__list">
            {
                props.cards.map((card) => {
                    return (
                      <li key={card._id} className="movies__item">
                        <MoviesCard card={card} />
                      </li>
                    )
                })
            }
          </ul>
          {props.moviesBtnActive && <button className="movies__btn">Ещё</button>}
        </div>
      </>
    );
  }
  
  export default MoviesCardList;