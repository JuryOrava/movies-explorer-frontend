/*SavedMovies — компонент страницы с сохранёнными карточками фильмов. Пригодятся эти компоненты:
MoviesCardList — компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
MoviesCard — компонент одной карточки фильма.*/

import React from 'react';

import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

import '../Movies/Movies.css';

function SavedMovies(props) {
    return (
      <>
        <main className="content">
            <SearchForm onSubmit={props.onSubmit} isSlider={props.isSlider} handelActiveSlider={props.handelActiveSlider}/>
            <MoviesCardList emptyResult={props.emptyResultSavedPage} pagedMoviesSave={props.pagedMoviesSave} handleDeleteMovies={props.handleDeleteMovies} handleSaveMovies={props.handleSaveMovies} movies={props.movies} savedMovies={props.savedMovies} />
        </main>
      </>
    );
  }
  
  export default SavedMovies;