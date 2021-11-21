import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import logo from '../../assets/images/HeaderImages/Logo_header.svg';
import button from '../../assets/images/HeaderImages/button.svg';
import exit from '../../assets/images/HeaderImages/exit.svg';
import { NavLink } from 'react-router-dom';

const Header = ({ sideClass, changeClass }) => {
  return (
    <header className={styles.header}>
      <div className={styles.sideBlock + ' ' + sideClass}>
        <div className={styles.logo_container}>
          <img src={logo} alt="logo" />
          <span>Synergy | CRM</span>
        </div>

        <img
          src={button}
          className={styles.button}
          alt="logo_button"
          onClick={() => changeClass()}
        />
      </div>
      
      <div className={styles.exit}>
        <NavLink to="/dashboard">
          <img src={exit} alt="exit" />
          <span>Exit</span>
        </NavLink>
      </div>
    </header>
  );
};

Header.propTypes = {
  sideClass: PropTypes.string,
  changeClass: PropTypes.func,
};

export default Header;
