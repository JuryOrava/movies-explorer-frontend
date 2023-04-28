/*Movies — компонент страницы с поиском по фильмам. В нём пригодятся эти компоненты:

SearchForm — форма поиска, куда пользователь будет вводить запрос. Обратите внимание на фильтр с 
чекбоксом «Только короткометражки». Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.
Preloader — отвечает за работу прелоадера.
MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
MoviesCard — компонент одной карточки фильма.*/

import React from 'react';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

import './Movies.css';

function Movies(props) {
    return (
      <>
        <main className="content">
            <SearchForm />
            <MoviesCardList  moviesBtnActive={props.moviesBtnActive} onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} onCardClick={props.onCardClick} cards={props.cards} />
        </main>
      </>
    );
  }
  
  export default Movies;