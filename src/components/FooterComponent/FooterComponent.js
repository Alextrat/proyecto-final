import React from 'react';
import styles from './FooterComponent.module.css';




import { FaFontAwesome } from 'react-icons/fa';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const FooterComponent = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

return (

    <footer className={styles.Footer}>
            <div className={styles.FooterContainer}>
                
                    <nav className={styles.FooterNav}>
                        <ul className={styles.FooterUl}>
                            <li className={styles.FooterLi}><a className={styles.FooterA} a href='/'>Contacto</a></li>
                            <li className={styles.FooterLi}><a className={styles.FooterA} a href='/'>Ayuda</a></li>
                            <li className={styles.FooterLi}><a className={styles.FooterA} a href='/'>Aviso Legal</a></li>
                        </ul>
                    </nav>
            
                    {/*  <nav className={styles.SocialNav}>
                        <ul className={styles.SocialUl}>
                            <li className={styles.SocialLi}><a className={styles.SocialA} a href='/'><FaFontAwesome icon={FaFacebook} /></a></li>
                            <li className={styles.SocialLi}><a className={styles.SocialA} a href='/'><FaFontAwesome icon={FaInstagram} /></a></li>
                            <li className={styles.SocialLi}><a className={styles.SocialA} a href='/'><FaFontAwesome icon={FaLinkedin} /></a></li>
                            <li className={styles.SocialLi}><a className={styles.SocialA} a href='/'><FaFontAwesome icon={FaGithub} /></a></li>
                        </ul>
            </nav> */ }
            </div>
            <div className={styles.CopyrightSection}>
                <p className={styles.CopyrightP}>© {getCurrentYear()} All Rights Reserved</p>
            </div>
            
        </footer>
    )
}

export default FooterComponent
