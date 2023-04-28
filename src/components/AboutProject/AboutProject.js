//компонент с описанием дипломного проекта.

import React from 'react';

import './AboutProject.css';

function AboutProject(props) {
    return (
      <>
        <section id="about-project" className="about-project">
            <h2 className="main__titles">О проекте</h2>
            <div className="about-project__description">
                <div className="about-project__desc">
                    <p className="about-project__title">Дипломный проект включал 5 этапов</p>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__desc">
                    <p className="about-project__title">На выполнение диплома ушло 5 недель</p>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__description_time">
                <div className="about-project__time-back">
                    <p className="about-project__time">1 неделя</p>
                    <p className="about-project__name">Back-end</p>
                </div>
                <div className="about-project__time-front">
                    <p className="about-project__time about-project__time_front">4 недели</p>
                    <p className="about-project__name">Front-end</p>
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default AboutProject;