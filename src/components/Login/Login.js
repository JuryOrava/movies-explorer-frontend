import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';

import '../Register/Register.css';

import {validationForm} from '../../utils/validation';

const Login = (props) => {

  const [formValue, setFormValue] = useState({
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password){
      return;
    }
    props.onSubmit(formValue.password, formValue.email,);
    setFormValue({email: '', password: ''});
  }

  return (
    <>
    <div className="sign__container">
        <Link to="/">
          <img className="logo" alt="Логотип" src={logo}/>
        </Link>
        <h3 className="sign__title">Рады видеть!</h3>
        <form onSubmit={handleSubmit} className="sign__form" noValidate>
          <div>
            <label className="sign__label">
              E-mail
              <input placeholder="Email" className="sign__input" required id="email" name="email" type="text" value={formValue.email} onChange={handleChange} />
              <p className="input__error_massage sign__input_massage">Email должен быть формата test@ya.ru</p>
            </label>
            <label className="sign__label">
              Пароль  
              <input placeholder="Пароль" className="sign__input" required minLength="2" id="password" name="password" type="password" value={formValue.password} onChange={handleChange} />
              <p className="input__error_massage sign__input_massage">Пароль не может быть пустым</p>
            </label>
          </div>
          <div>
            <button type="submit" disabled className="btn-form btn-form_deactive sign__btn">Войти</button>
            <p className="sign__text">Ещё не зарегистрированы? <Link to="/sign-up" className="sign__link">Регистрация</Link></p>
          </div>
        </form>
    </div>
    </>
  )
}

export default Login;