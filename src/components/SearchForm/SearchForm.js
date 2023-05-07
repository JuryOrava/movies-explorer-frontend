/*форма поиска, куда пользователь будет вводить запрос. Обратите внимание на фильтр с чекбоксом «Только короткометражки».
 Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.*/

import React, {useState} from 'react';
import find from '../../images/find.svg';
import FindIcon from '../../images/find-icon.svg';
 
import './SearchForm.css';
 
const SearchForm = (props) => {

    function getLocalStorageItem () {
        return {
          keyForFind: localStorage.getItem('keyForFind'),
          maxDurationFilms: localStorage.getItem('maxDurationFilms')
        }
      }
    
      let localStorageItem = getLocalStorageItem();

    const sliderClassName = (
        `search__slider-item ${props.isSlider && 'search__slider-item_active'}` 
      );

    let duration = props.isSlider ? 40 : 999;
   
    const [formValue, setFormValue] = useState({
        film: ''
    });

    React.useEffect(() => {
        if (localStorage.getItem('keyForFind')) {
          props.onSubmit(localStorageItem.keyForFind, localStorageItem.maxDurationFilms);
          setFormValue({film: localStorageItem.keyForFind});
          let slider = document.querySelector('.search__slider-item');
          if (localStorage.getItem('maxDurationFilms') === '40' && !slider.classList.contains('search__slider-item_active')) {
            props.handelActiveSlider();
          }
        }
      }, []);
 
    const handleChange = (e) => {
        const {name, value} = e.target;
 
        setFormValue({
            ...formValue,
            [name]: value
        });
    }
 
    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(formValue.film, duration);
    }

    /*const valueFormInput = ( 
        localStorage.getItem('keyForFind') ? formValue.name : localStorageItem.keyForFind 
      );*/
 
    return (
        <>
            <section className="search">
                <img className="search__icon" alt="Иконка лупы" src={FindIcon}/>
                <form onSubmit={handleSubmit} className="search__form" noValidate>
                    <div>
                        <label className="search__label">
                            <input placeholder="Фильм" className="search__input" required id="film" name="film" type="text" value={formValue.film} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="search__btns">
                        <button type="submit" className="search__btn"><img className="search__btn-img" alt="Иконка кнопки поиска" src={find}/></button>
                    </div>
                </form>
                <div className="search__slider-container">
                    <button className="search__btn search__btn_pc search__slider" onClick={props.handelActiveSlider}><div className={sliderClassName}></div></button>
                    <p className="search__slider-desc search__btn_pc">Короткометражки</p>
                </div>
            </section>
            <div className="search__btn_mobile">
                <button className="search__btn search__slider" onClick={props.handelActiveSlider}><div className={sliderClassName}></div></button>
                <p className="search__slider-desc">Короткометражки</p>
            </div>
        </>
  );
}

export default SearchForm;