import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';

import '../Register/Register.css';

const Login = (props) => {

  const [formValue, setFormValue] = useState({
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
            </label>
            <label className="sign__label">
              Пароль  
              <input placeholder="Пароль" className="sign__input" required id="password" name="password" type="password" value={formValue.password} onChange={handleChange} />
            </label>
          </div>
          <div>
            <button type="submit" className="sign__btn">Войти</button>
            <p className="sign__text">Ещё не зарегистрированы? <Link to="/sign-up" className="sign__link">Регистрация</Link></p>
          </div>
        </form>
    </div>
    </>
  )
}

export default Login;