import React from 'react';

import {useNavigate} from 'react-router-dom';

import './NotFound.css';

function Movies(props) {
  const navigate = useNavigate();

    return (
      <>
        <div className="not-found">
            <p className="not-found__code">404</p>
            <p className="not-found__name">Страница не найдена</p>
            <button onClick={() => navigate(-1)} className="not-found__link">Назад</button>
        </div>
      </>
    );
  }
  
  export default Movies;