import './Footer.css';

function Footer() {
    return (
      <>
        <footer className="footer">
          <div className="footer__info">
            <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__bottom">
              <p className="footer__author">&copy; 2023</p>
              <ul className="footer__navigate">
                <li>
                  <a className="footer__navigate-link" target="_blank" href="https://practicum.yandex.ru/">Яндекс Практикум</a>
                </li>
                <li>
                  <a className="footer__navigate-link" target="_blank" href="https://github.com">GitHub</a>
                </li>
              </ul>
            </div>
          </div>     
        </footer>
    </>
    );
  }
  
  export default Footer;

