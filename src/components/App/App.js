import React from 'react';
import { Route, Routes, Navigate, useNavigate} from 'react-router-dom';

import './App.css';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import Profile from '../Profile/Profile.js';
import Footer from '../Footer/Footer.js';
import Api from '../../utils/api.js';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../auth.js';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import NotFound from "../NotFound/NotFound.js";

const api = new Api({
  baseUrl: 'https://bestfilms-diploma.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json'
  },
});

const cardList = [
{
  name: 'Film 1',
  time: '1h 47m',
  image: 'https://media.filmz.ru/photos/full/filmz.ru_f_233268.jpg',
},
{
  name: 'People in black',
  time: '2h 47m',
  image: 'https://mobimg.b-cdn.net/v3/fetch/4e/4e40d7306f885044acf1c11df9735799.jpeg',
},
{
  name: 'People in black',
  time: '2h 47m',
  image: 'https://mobimg.b-cdn.net/v3/fetch/4e/4e40d7306f885044acf1c11df9735799.jpeg',
},
{
  name: 'People in black',
  time: '2h 47m',
  image: 'https://mobimg.b-cdn.net/v3/fetch/4e/4e40d7306f885044acf1c11df9735799.jpeg',
},
];

function App() {

  const [currentUser, setСurrentUser] = React.useState([]);
  const [cards, setCards] = React.useState(cardList);
  const [loggedIn, setLoggedIn] = React.useState(false);
  
  const navigate = useNavigate();

  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    if (localStorage.getItem('token')){
      const token = localStorage.getItem('token');
      auth.checkToken(token)
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

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
    
    .then((values)=>{
      setСurrentUser(values[0]);
      setCards(values[1])
    })
    .catch((err)=>{
      console.log(err);
    });
  }, []);

  const handleSubmitRegister = (password, email, name) => {
      auth.register(password, email, name)
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
    api.editUserInfo(name, email)
    .then((res) => {
      setСurrentUser(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

const handleSubmitLogin = (password, email) => {   
  auth.authorize(password, email)
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
        <Route path="/movies" element={<ProtectedRoute element={<Movies cards={cards} moviesBtnActive={true} />} loggedIn={loggedIn}/>} />
        <Route path="/saved-movies" element={<ProtectedRoute element={<Movies cards={cards} moviesBtnActive={false} />} loggedIn={loggedIn}/>} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile handleExit={handleExit} onSubmit={handleUpdateUser}/>} loggedIn={loggedIn}/>} />
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
