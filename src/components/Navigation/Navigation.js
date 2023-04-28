import {Link} from 'react-router-dom';

import './Navigation.css';

function Navigation(props) {
  const menuClassName = ( 
    `main__nav ${props.isOpenMenu && 'main__nav_active'}` 
  );


    return (
      <>
          <ul className={menuClassName}>
            <li>
              <Link to={'/'} className="main__link main__link_mobile" onClick={props.clickLink}>Главная</Link>
            </li>
            <li>
              <Link to={'/movies'} className="main__link" onClick={props.clickLink}>Фильмы</Link>
            </li>
            <li>
              <Link to={'/saved-movies'} className="main__link" onClick={props.clickLink}>Сохраненные фильмы</Link>
            </li>
            <Link to={'/profile'} className="main__link-profile" onClick={props.clickLink}>Аккаунт</Link>
          </ul>
    </>
    );
  }
  
  export default Navigation;