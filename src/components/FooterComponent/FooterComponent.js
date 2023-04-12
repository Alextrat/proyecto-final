import React from 'react';
import styles from './FooterComponent.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwiter, faFacebook, faInstagram, faLinkedin, faGithub }

import { Link } from 'react-router-dom';

const FooterComponent = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

  return (
   
    <footer className="footer">
            <div className="footer-container container">
                <section className='footer-menu__section section'>
                    <nav className='footer__nav nav'>
                        <ul className="footer__ul ul">
                            <li className="footer__li li"><a className='footer__a a' href='/'>Help center</a></li>
                            <li className="footer__li li"><a className='footer__a a' href='/'>Contact</a></li>
                            <li className="footer__li li"><a className='footer__a a' href='/'>Redeem code</a></li>
                            <li className="footer__li li"><a className='footer__a a' href='/'>Give FilmOut as a gift</a></li>
                            <li className="footer__li li"><a className='footer__a a' href='/'>Legal notice</a></li>
                            <li className="footer__li li"><a className='footer__a a' href='/'>Press</a></li>
                        </ul>
                    </nav>
                    <nav className='footer__nav-social nav'>
                        <ul className="footer__ul-social ul">
                            <li className="footer__li-social li"><a className='footer__a-social a' href='/'><FontAwesomeIcon icon={faTwitter} size="lg"/></a></li>
                            <li className="footer__li-social li"><a className='footer__a-social a' href='/'><FontAwesomeIcon icon={faFacebook} size="lg"/></a></li>
                            <li className="footer__li-social li"><a className='footer__a-social a' href='/'><FontAwesomeIcon icon={faInstagram} size="lg"/></a></li>
                            <li className="footer__li-social li"><a className='footer__a-social a' href='/'><FontAwesomeIcon icon={faLinkedin} size="lg"/></a></li>
                            <li className="footer__li-social li"><a className='footer__a-social a' href='/'><FontAwesomeIcon icon={faGithub} size="lg"/></a></li>
                        </ul>
                    </nav>
                </section>
                <section className='footer-copyright__section section'>
                    <p className="footer-copyright__p p">© {getCurrentYear()} FilmsHub. All Rights Reserved</p>
                    <Link className='footer-logo__a a' to='/'><img src={logo} className='footer__logo img' alt='logo'/></Link>
                </section>
            </div>
        </footer>
  )
}

export default FooterComponent
