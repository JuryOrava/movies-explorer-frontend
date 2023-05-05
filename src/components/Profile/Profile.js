//компонент страницы изменения профиля
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import './Profile.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import {validationForm} from '../../utils/validation';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const navigate = useNavigate();
  function signOut(){
    if (localStorage.getItem('token')){
      props.handleExit();
      localStorage.clear();
      navigate("/");
    }
  }

  const [formValue, setFormValue] = useState({
    name: currentUser.name,
    email: currentUser.email
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    
    const btnSubmitForm = document.querySelector('.btn-form');
    const formInputList = document.querySelectorAll('.profile__input');

    validationForm(e.target, btnSubmitForm, formInputList);
    console.log(btnSubmitForm)
    console.log(btnSubmitForm.classList.contains('btn-form_deactive'))
    if (e.target.value === currentUser.name || e.target.value === currentUser.email) {
      !btnSubmitForm.classList.contains('btn-form_deactive') && btnSubmitForm.classList.add('btn-form_deactive');
    }

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
              <input placeholder="Имя" className="profile__input profile__input_one" pattern="[a-zA-Zа-яА-Я]{2,}[\s\-]?[a-zA-Zа-яА-Я]*" id="name" name="name" type="text" value={formValue.name} onChange={handleChange} />
              <p className="input__error_massage profile__input_massage profile__input_massage_one">Имя может содержать только латиницу, кирилицу, пробел и знак дефиса «-»</p>
            </label>
            <label className="profile__label">
              <p className="profile__input-name">E-mail</p>
              <input placeholder="Email" className="profile__input" id="email" name="email" type="text" value={formValue.email} onChange={handleChange} />
              <p className="input__error_massage profile__input_massage">Email должен быть формата test@ya.ru</p>
            </label>
            {props.createUserError && <p class="profile__submit_res-err">К сожалению, возникла какая-то ошибка. Попробуйте чуть позже.</p>}
            {props.createUserOk && <p class="profile__submit_res-ok">Данные успешно изменены.</p>}
          </div>
          <div className="profile__btns">
            <button type="submit" disabled="true" className="btn-form btn-form_deactive profile__btn profile__create-btn">Редактировать</button>
            <button onClick={signOut} className="profile__btn profile__sign-btn">Выйти из аккаунта</button>
          </div>
        </form>
      </div>
    </>
    );
  }
  
  export default Profile;