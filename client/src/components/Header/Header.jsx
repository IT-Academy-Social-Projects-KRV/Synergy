import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/images/HeaderImages/Logo_header.svg';
import button from '../../assets/images/HeaderImages/button.svg';
import exit from '../../assets/images/HeaderImages/exit.svg';

const Header = ({ sideClass, changeClass }) => {
  const history = useHistory();
  return (
    <header data-testid='headerBlock' className={styles.header}>
      <div data-testid='headerLogoBlock'  className={styles.sideBlock + ' ' + sideClass}>
        <div className={styles.logo_container}>
          <img src={logo} alt='logo' />
          <span>Synergy | CRM</span>
        </div>
        <img
          data-testid='logoButton'
          src={button}
          className={styles.button}
          alt='logoButton'
          onClick={() => changeClass()}
        />
      </div>
      <div className={styles.exit}>
        <div onClick={() => history.push('/dashboard')}>
          <img src={exit} alt='exit' />
          <span>Exit</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
