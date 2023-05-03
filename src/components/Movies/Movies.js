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
            <SearchForm onSubmit={props.onSubmit} isSlider={props.isSlider} handelActiveSlider={props.handelActiveSlider}/>
            <MoviesCardList moviesFindError={props.moviesFindError} emptyResult={props.emptyResult} startPreloader={props.startPreloader} pagedMoviesSave={props.pagedMoviesSave} handleDeleteMovies={props.handleDeleteMovies} handleSaveMovies={props.handleSaveMovies} movies={props.movies} savedMovies={props.savedMovies} />
        </main>
      </>
    );
  }
  
  export default Movies;