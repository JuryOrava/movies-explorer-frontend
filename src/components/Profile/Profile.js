//компонент страницы изменения профиля
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import './Profile.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const navigate = useNavigate();
  function signOut(){
    if (localStorage.getItem('token')){
      localStorage.removeItem('token');
      navigate("/sign-in");
      props.handleExit();
    }
  } 

  const [formValue, setFormValue] = useState({
    name: currentUser.name,
    email: currentUser.email
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValue.name, formValue.email)
    props.onSubmit(formValue.name, formValue.email);
  }

    return (
      <>
      <div className="profile__container">
        <h3 className="profile__title">Привет, {currentUser.name}!</h3>
        <form onSubmit={handleSubmit} className="profile__form" noValidate>
          <div>
            <label className="profile__label">
              <p className="profile__input-name">Имя</p>
              <input placeholder="Имя" className="profile__input profile__input_one" required id="name" name="name" type="text" value={formValue.name} onChange={handleChange} />
            </label>
            <label className="profile__label">
              <p className="profile__input-name">E-mail</p>
              <input placeholder="Email" className="profile__input" required id="email" name="email" type="text" value={formValue.email} onChange={handleChange} />
            </label>
          </div>
          <div className="profile__btns">
            <button type="submit" className="profile__btn profile__create-btn">Редактировать</button>
            <button onClick={signOut} className="profile__btn profile__sign-btn">Выйти из аккаунта</button>
          </div>
        </form>
      </div>
    </>
    );
  }
  
  export default Profile;