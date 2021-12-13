import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/images/HeaderImages/Logo_header.svg';
import button from '../../assets/images/HeaderImages/button.svg';
import exit from '../../assets/images/HeaderImages/exit.svg';
import { useDispatch } from 'react-redux';
import { setIsExistUser, setUser } from '../../redux';

const Header = ({ sideClass, changeClass }) => {
  const dispatch = useDispatch();
  
  const handleExit = (e) => {
    e.preventDefault(); 

    dispatch(setUser({}));
    sessionStorage.clear();
    dispatch(setIsExistUser(false));
  };
  return (
    <header className={styles.header}>
      <div className={styles.sideBlock + ' ' + sideClass}>
        <div className={styles.logo_container}>
          <img src={logo} alt='logo' />
          <span>Synergy | CRM</span>
        </div>
        <img
          src={button}
          className={styles.button}
          alt='logo_button'
          onClick={() => changeClass()}
        />
      </div>
      <div className={styles.exit}>
        <NavLink to='/dashboard' onClick={(e) => handleExit(e)}>
          <img src={exit} alt='exit' />
          <span>Exit</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
