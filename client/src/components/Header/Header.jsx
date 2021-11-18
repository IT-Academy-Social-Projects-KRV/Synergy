import React from 'react';
import styles from './Header.module.scss';
import logo from './images/Logo_header.svg';
import button from './images/button.svg';
import exit from './images/exit.svg';
import {NavLink} from "react-router-dom";

const Header = props  => {
    return (
        <header className={styles.header}>
            <div className={styles.sideBlock + " " + props.sideClass}>
                <div className={styles.logo_container}>
                    <img src={logo} alt="logo"/>
                    <span>Synergy | CRM</span>
                </div>
                <img src={button} className={styles.button} alt="logo_button" onClick={() => props.changeClass()}/>
            </div>
            <div className={styles.exit}><NavLink to="/"><img src={exit} alt="exit"/><span>Exit</span></NavLink></div>
        </header>
    );
};

export default Header;