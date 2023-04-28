import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';

import './Register.css';

const Register = (props) => {
  
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
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
              <input placeholder="Имя" className="sign__input" required id="name" name="name" type="text" value={formValue.name} onChange={handleChange} />
            </label>
            <label className="sign__label">
              E-mail
              <input placeholder="Email" className="sign__input" required id="email" name="email" type="text" value={formValue.email} onChange={handleChange} />
            </label>
            <label className="sign__label">
              Пароль   
              <input placeholder="Пароль" className="sign__input" required id="password" name="password" type="password" value={formValue.password} onChange={handleChange} />
            </label>
          </div>
          <div>
            <button type="submit" className="sign__btn">Зарегистрироваться</button>
            <p className="sign__text">Уже зарегистрированы? <Link to="/sign-in" className="sign__link">Войти</Link></p>
          </div>
        </form>
    </div>
    </>
  );
}

export default Register;