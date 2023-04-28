/*форма поиска, куда пользователь будет вводить запрос. Обратите внимание на фильтр с чекбоксом «Только короткометражки».
 Для него можно воспользоваться отдельным управляемым компонентом FilterCheckbox.*/

import React, {useState} from 'react';
import find from '../../images/find.svg';
import FindIcon from '../../images/find-icon.svg';
 
import './SearchForm.css';
 
const SearchForm = (props) => {

    const [isSlider, setIsSlider] = React.useState(false);

    const sliderClassName = ( 
        `search__slider-item ${isSlider && 'search__slider-item_active'}` 
      );
    
      const activeSlider = () => {
        setIsSlider(!isSlider);
      };
   
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
 
    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(formValue.password, formValue.email,);
    }
 
    return (
        <>
            <section className="search">
                <img className="search__icon" alt="Иконка лупы" src={FindIcon}/>
                <form onSubmit={handleSubmit} className="search__form" noValidate>
                    <div>
                        <label className="search__label">
                            <input placeholder="Фильм" className="search__input" required id="film" name="film" type="text" value={formValue.name} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="search__btns">
                        <button type="submit" className="search__btn"><img className="search__btn-img" alt="Иконка кнопки поиска" src={find}/></button>
                        <button className="search__btn search__btn_pc search__slider" onClick={activeSlider}><div className={sliderClassName}></div></button>
                        <p className="search__slider-desc search__btn_pc">Короткометражки</p>
                    </div>
                </form>
            </section>
            <div className="search__btn_mobile">
                <button className="search__btn search__slider" onClick={activeSlider}><div className={sliderClassName}></div></button>
                <p className="search__slider-desc">Короткометражки</p>
            </div>
        </>
  );
}

export default SearchForm;