//компонент с информацией о студенте.

import React from 'react';

import './AboutMe.css';

function AboutMe(props) {
    return (
      <>
        <section className="about-me">
            <div className="about-me_container">
            <h2 className="main__titles">Студент</h2>
                <div className="about-me__description">
                    <div className="about-me__text">
                        <p className="about-me__text-name">Юрий</p>
                        <p className="about-me__text-desc">Фулстак-разработчик, 28 лет</p>
                        <p className="about-me__full-text">Я родился и живу в небольшом городке Волосово, Ленинградской области, закончил СПб ГУМВД. 
                    Есть жена и две прекрасные дочурки. Люблю спорт, долгое время занимался баскетболом. 
                    Первый свой сайт написал в 2010 году, для написания использовал Adobe Dreamweaver. Сайт создавал
                    для своего пиратского сервера World of Warcraft =)
                    После этого судьба сложилась так, что я отучился в университете МВД и работал старшим участковым 
                    уполномоченным полиции в своем родном городке. В процессе работы в МВД самостоятельно начал изучать 
                    SEO (поисковую оптимизацию сайтов), ушёл из МВД и занимался фрилансом, и в итоге пришел к веб-разработке.
                    Ради повышения квалификации и изучения новых навыков пришел учится в Яндекс Практикум</p>
                        <a className="about-me__git-link" target="_blank" href="https://github.com/JuryOrava">GitHub</a>
                    </div>
                    <div className="about-me__photo"></div>
                </div>
            </div>
        </section>
      </>
    );
  }
  
  export default AboutMe;