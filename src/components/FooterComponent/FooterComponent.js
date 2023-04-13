import React from 'react';
import styles from './FooterComponent.module.css';



import { Link } from 'react-router-dom';

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
            </div>
                
            <div className={styles.CopyrightSection}>
                <p className={styles.CopyrightP}>© {getCurrentYear()} All Rights Reserved</p>
            </div>
            
        </footer>
    )
}

export default FooterComponent
