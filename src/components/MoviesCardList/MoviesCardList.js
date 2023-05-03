//компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.

import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader.js';

import './MoviesCardList.css';

function MoviesCardList(props) {

  const [moviesCountLoad, setMoviesCountLoad] = React.useState(1);
  const [moviesResizeCountLoad, setMoviesResizeCountLoad] = React.useState(1);
  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  function handleWindowResize() {
    setWindowSize(getWindowSize());
    if (window.innerWidth >  768) {
      setMoviesCountLoad(12);
      setMoviesResizeCountLoad(3);
    }
    if (window.innerWidth > 420 & window.innerWidth < 768) {
      setMoviesCountLoad(8);
      setMoviesResizeCountLoad(2);
    }
    if (window.innerWidth < 420) {
      setMoviesCountLoad(5);
      setMoviesResizeCountLoad(2);
    }
  }
  
  React.useEffect(() => {
    if (windowSize.innerWidth >  768) {
      setMoviesCountLoad(12);
      setMoviesResizeCountLoad(3);
    }
    if (windowSize.innerWidth > 420 & windowSize.innerWidth < 768) {
      setMoviesCountLoad(8);
      setMoviesResizeCountLoad(2);
    }
    if (windowSize.innerWidth < 420) {
      setMoviesCountLoad(5);
      setMoviesResizeCountLoad(2);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log(window.innerWidth)

  const moviesContainerClassName = ( 
    `movies__container ${props.pagedMoviesSave && 'movies__container_saved'}` 
  );

  let moviesOnPage = props.pagedMoviesSave ? props.savedMovies : props.movies;

  let iMovie = moviesOnPage.length;

  function eshe () {
    setMoviesCountLoad(moviesCountLoad + moviesResizeCountLoad);
  }

  let isDeactiveBtn = moviesCountLoad >= iMovie;

  const BtnClassName = ( 
    `movies__btn ${isDeactiveBtn && 'movies__btn_deactive'}`
  );
  
  return (
      <>
        <div className={moviesContainerClassName}>
          {props.startPreloader && <Preloader />}
          {props.emptyResult && <p>Ничего не найдено</p>}
          {props.moviesFindError && <p>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
          
          <ul className="movies__list">
            {
                moviesOnPage.map((card, i) => {
                  if (i < moviesCountLoad & !props.pagedMoviesSave) {
                    return (
                      <li key={card._id} className="movies__item">
                        <MoviesCard card={card} pagedMoviesSave={props.pagedMoviesSave} savedMovies={props.savedMovies} handleDeleteMovies={props.handleDeleteMovies} handleSaveMovies={props.handleSaveMovies} />
                      </li>
                    )
                  }
                  if (props.pagedMoviesSave) {
                    return (
                      <li key={card._id} className="movies__item">
                        <MoviesCard card={card} pagedMoviesSave={props.pagedMoviesSave} savedMovies={props.savedMovies} handleDeleteMovies={props.handleDeleteMovies} handleSaveMovies={props.handleSaveMovies} />
                      </li>
                    )
                  }
                })
            }
          </ul>
          {!props.pagedMoviesSave && <button className={BtnClassName} onClick={eshe}>Ещё</button>}
        </div>
      </>
    );
  }
  
  export default MoviesCardList;