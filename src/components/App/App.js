import React from 'react';
import { Route, Routes, Navigate, useNavigate} from 'react-router-dom';

import './App.css';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Footer from '../Footer/Footer.js';
import MainApi from '../../utils/MainApi.js';
import MoviesApi from '../../utils/MoviesApi.js';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import NotFound from "../NotFound/NotFound.js";

const mainApi = new MainApi({
  baseUrl: 'https://bestfilms-diploma.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json'
  },
});

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  },
});

function App() {

  const [currentUser, setСurrentUser] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isSlider, setIsSlider] = React.useState(false);
  const [startPreloader, setStartPreloader] = React.useState(false);
  const [emptyResult, setEmptyResult] = React.useState(false);
  const [emptyResultSavedPage, setEmptyResultSavedPage] = React.useState(false);
  const [moviesFindError, setMoviesFindError] = React.useState(false);
  const [createUserError, setСreateUserError] = React.useState(false);
  const [createUserOk, setСreateUserOk] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    if (localStorage.getItem('token')){
      const token = localStorage.getItem('token');
      mainApi.checkToken(token)
      .then((res) => {
        if (res){
          setLoggedIn(true);
          navigate("/", {replace: true})
        }
      })
      .catch((err)=>{
        console.log(err);
      });
    }
  }
  const handleLogin = () => {
    setLoggedIn(true);
  }
  
  const handleExit = () => {
    setLoggedIn(false);
  }

  const handelActiveSlider = () => {
    return setIsSlider(!isSlider);
  };

  function handleSaveMovies(card) {
      mainApi.saveMovie(card)
      .then((newCard) => {
        setSavedMovies([newCard, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
    }

  function handleDeleteMovies(card) {

    let moviesId = savedMovies.find(movies => movies.nameRU === card.nameRU)._id

    mainApi.deleteSaveMovie(moviesId)
    .then(() => {
      setSavedMovies(savedMovies.filter((movies) => movies._id !== moviesId));
    })
    .catch((err) => {
      console.log(err);
    })
  }


  React.useEffect(() => {
    Promise.all([
      mainApi.getUserInfo(),
      mainApi.getInitialMovies()
    ])
    
    .then((values)=>{
      setСurrentUser(values[0]);
      setSavedMovies(values[1]);
      console.log(values[1])
    })
    .catch((err)=>{
      console.log(err);
    });
  }, []);

  const handleFindSavedMovies = (findKey, maxDuration) => {
    let duration = maxDuration;
    let keyForFind = findKey.toLowerCase();
    
    const notFoundFilms = () => {
      return savedMovies.filter(el => !el.nameRU.toLowerCase().includes(keyForFind) && el.duration < duration)
    }

    const findFilms = () => {
      return savedMovies.filter(el => el.nameRU.toLowerCase().includes(keyForFind) && el.duration < duration)
    }
    
    document.querySelectorAll('.movies__item').forEach((el) => {
      let movieName = el.querySelector('.movie__name').textContent;
      notFoundFilms().forEach((movie) => {
        if (movie.nameRU === movieName) {
          el.classList.add('movies__item_deactive');
        }
      })
      findFilms().forEach((movie) => {
        if (movie.nameRU === movieName && el.classList.contains('movies__item_deactive')) {
          el.classList.remove('movies__item_deactive');
        }
      })
    })
    
    if (findFilms().length === 0) {
      setEmptyResultSavedPage(true)
    } else {
      setEmptyResultSavedPage(false);
    }
  }

  const handleFindMovies = (findKey, maxDuration) => {

    let duration = maxDuration;
    let keyForFind = findKey.toLowerCase();

    moviesApi.getMovies()
      .then((res) => {
        const films = () => {
          return res.filter(el => el.nameRU.toLowerCase().includes(keyForFind) && el.duration < duration)
        }
        setMovies(films);
        if (films().length === 0) {
          setEmptyResult(true)
        } else {
          setEmptyResult(false);
        }
      })
      .catch((err) => {
        setMoviesFindError(true);
      })
      .finally(() => {
        setStartPreloader(false);
      });
      setStartPreloader(true);      
  }

  const handleSubmitRegister = (password, email, name) => {
    mainApi.register(password, email, name)
      .then((res) => {
        handleSubmitLogin(password, email);
        console.log(res);
      })
      .catch((err) => {
          console.log(err);
      }
    );
  }

  function handleUpdateUser(name, email) {
    mainApi.editUserInfo(name, email)
    .then((res) => {
      setСurrentUser(res);
      setСreateUserOk(true);
    })
    .catch((err) => {
      setСreateUserError(true);
      console.log(err);
    })
  }

const handleSubmitLogin = (password, email) => {   
  mainApi.authorize(password, email)
  .then((data) => {
    console.log(data)
    if (data.token){
      handleLogin();
      navigate('/movies', {replace: true});
      localStorage.setItem('token', data.token);
      return data;
    }
  })
  .catch(err => console.log(err));
}

  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
    {loggedIn && <Header />}
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/movies" element={<ProtectedRoute element={<Movies moviesFindError={moviesFindError} emptyResult={emptyResult} startPreloader={startPreloader} isSlider={isSlider} handelActiveSlider={handelActiveSlider} movies={movies} savedMovies={savedMovies} pagedMoviesSave={false} onSubmit={handleFindMovies} handleDeleteMovies={handleDeleteMovies} handleSaveMovies={handleSaveMovies} />} loggedIn={loggedIn}/>} />
        <Route path="/saved-movies" element={<ProtectedRoute element={<SavedMovies emptyResultSavedPage={emptyResultSavedPage} isSlider={isSlider} handelActiveSlider={handelActiveSlider} savedMovies={savedMovies} pagedMoviesSave={true}  onSubmit={handleFindSavedMovies} handleDeleteMovies={handleDeleteMovies} handleSaveMovies={handleSaveMovies} />} loggedIn={loggedIn}/>} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile createUserError={createUserError} createUserOk={createUserOk} handleExit={handleExit} onSubmit={handleUpdateUser}/>} loggedIn={loggedIn}/>} />
        <Route path="/sign-up" element={<Register onSubmit={handleSubmitRegister}/>} />
        <Route path="/sign-in" element={<Login handleLogin={handleLogin} onSubmit={handleSubmitLogin}/>} />
        <Route path="/404" element={<NotFound/>} />
        <Route path="*" element={loggedIn ? <Navigate to="/" /> : <Navigate to="/login" />} />
      </Routes>
      {loggedIn && <Footer />}
    </div>
    </CurrentUserContext.Provider>
  </>
  );
}

export default App;
