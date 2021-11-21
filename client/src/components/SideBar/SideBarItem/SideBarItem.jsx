import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from '../SideBar.module.scss';

const SideBarItem = ({ route, alt, image, title }) => {
  return (
    <li>
      <NavLink activeClassName={styles.active} to={route}>
        <img src={image} alt={alt} />
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

SideBarItem.propTypes = {
  route: PropTypes.string.isRequired,
  alt: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default SideBarItem;
