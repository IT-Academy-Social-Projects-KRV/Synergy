import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../SideBar.module.scss';

const SideBarItem = props => {
    return (
        <li>
            <NavLink activeClassName={styles.active} to={props.route}>
                <img src={props.image} alt={props.alt}/><span>{props.title}</span>
            </NavLink>
        </li>
    )
}

export default SideBarItem