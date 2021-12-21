import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/images/HeaderImages/Logo_header.svg';
import button from '../../assets/images/HeaderImages/button.svg';
import exit from '../../assets/images/HeaderImages/exit.svg';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux';
import { Button } from '@mui/material';
import routes from '../../configs/routes';

const Header = ({ sideClass, changeClass }) => {

  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(setUser(null));
    sessionStorage.clear();
  };

  return (
    <header data-testid='headerBlock' className={styles.header}>
      <div data-testid='headerLogoBlock' className={styles.sideBlock + ' ' + sideClass}>
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
        <Link to={routes.NonAuthRoutes.pathToLogin}>
          <Button onClick={handleExit}>
            <img src={exit} alt='exit' />
            <span>Exit</span>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
