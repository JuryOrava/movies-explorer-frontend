//  компонент с использованными технологиями.

import React from 'react';

import './Techs.css';

function Techs(props) {
    return (
      <>
        <section className="techs">
            <div className="techs__container">
                <h2 className="main__titles">Технологии</h2>
                <h3 className="techs__title">7 технологий</h3>
                <p className="techs__desc">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__langs">
                    <li className="techs__lang">HTML</li>
                    <li className="techs__lang">CSS</li>
                    <li className="techs__lang">JS</li>
                    <li className="techs__lang">React</li>
                    <li className="techs__lang">Git</li>
                    <li className="techs__lang">Express.js</li>
                    <li className="techs__lang">MongoDB</li>
                </ul>
            </div>
        </section>
      </>
    );
  }
  
  export default Techs;