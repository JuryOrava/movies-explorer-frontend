//компонент со ссылками на другие проекты.

import React from 'react';

import './Portfolio.css';

function Portfolio(props) {
    return (
      <>
        <section className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <ul className="portfolio__list">
                <li>
                    <a className="portfolio__link" href="https://github.com/JuryOrava/first-project" target="_blank">
                        <p className="portfolio__text">Статичный сайт</p>
                        <p className="portfolio__text portfolio__text-arrow">↗</p>
                    </a>
                </li>
                <li>
                    <a className="portfolio__link" href="https://github.com/JuryOrava/russian-travel" target="_blank">
                        <p className="portfolio__text">Адаптивный сайт</p>
                        <p className="portfolio__text portfolio__text-arrow">↗</p>
                    </a>
                </li>
                <li>
                    <a className="portfolio__link" href="https://github.com/JuryOrava/react-mesto-api-full-gha" target="_blank">
                        <p className="portfolio__text">Одностраничное приложение</p>
                        <p className="portfolio__text portfolio__text-arrow">↗</p>
                    </a>
                </li>
            </ul>
        </section>
      </>
    );
  }
  
  export default Portfolio;