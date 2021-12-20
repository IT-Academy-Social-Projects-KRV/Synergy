import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../SideBar.module.scss';

const SideBarItem = ({ route, image, alt, title }) => {

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
