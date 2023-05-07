import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../images/logo.svg';

import './Register.css';

import {validationForm} from '../../utils/validation';

const Register = (props) => {

  const navigate = useNavigate();
  
  if (localStorage.getItem('token')){
    navigate("/profile");
  }
  
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    const btnSubmitForm = document.querySelector('.btn-form');
    const formInputList = document.querySelectorAll('.sign__input');

    validationForm(e.target, btnSubmitForm, formInputList);

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(formValue.password, formValue.email, formValue.name);
  }

  return (
    <>
    <div className="sign__container">
        <Link to="/">
          <img className="logo" alt="Логотип" src={logo}/>
        </Link>
        <h3 className="sign__title">Добро пожаловать!</h3>
        <form onSubmit={handleSubmit} className="sign__form" noValidate>
          <div>
            <label className="sign__label">
              Имя
              <input placeholder="Имя" className="sign__input" required pattern="[a-zA-Zа-яА-Я]{2,}[\s\-]?[a-zA-Zа-яА-Я]*" maxLength="20" minLength="2" id="name" name="name" type="text" value={formValue.name} onChange={handleChange} />
              <p className="input__error_massage sign__input_massage">Имя может содержать только латиницу, кирилицу, пробел и знак дефиса «-»</p>
            </label>
            <label className="sign__label">
              E-mail
              <input placeholder="Email" className="sign__input" required id="email" name="email" type="email" value={formValue.email} onChange={handleChange} />
              <p className="input__error_massage sign__input_massage">Email должен быть формата test@ya.ru</p>
            </label>
            <label className="sign__label">
              Пароль   
              <input placeholder="Пароль" className="sign__input" required minLength="2" id="password" name="password" type="password" value={formValue.password} onChange={handleChange} />
              <p className="input__error_massage sign__input_massage">Пароль не может быть пустым</p>
            </label>
          </div>
          <div>
            <button type="submit" disabled="true" className="btn-form btn-form_deactive sign__btn">Зарегистрироваться</button>
            <p className="sign__text">Уже зарегистрированы? <Link to="/sign-in" className="sign__link">Войти</Link></p>
          </div>
        </form>
    </div>
    </>
  );
}

export default Register;