import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../SideBar.module.scss';
import { AlertContext } from '../../Alert/context/AlertContext';

const SideBarItem = ({ route, image, alt, title }) => {
  const alert = useContext(AlertContext);
  return (
    <li onClick={alert.hide}>
      <NavLink activeClassName={styles.active} to={route}>
        <img src={image} alt={alt} />
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default SideBarItem;
