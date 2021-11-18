import React from 'react';
import './SideBar.module.scss';
import styles from './SideBar.module.scss';
import sidebarItems from "./sidebarItems";
import SideBarItem from "./SideBarItem/SideBarItem";

const SideBar = props => {
    const role = 'admin';

    return (
        <aside className={styles.sidebar + " " + props.sideClass}>
            <h4>Management</h4>
            <ul className={styles.sidebar_list}>
                { role === 'admin' ? sidebarItems.Admin.map(item => <SideBarItem route={item.route} image={item.image} alt={item.alt} title={item.title} />) : ''}
                { role === 'customer' ? sidebarItems.Customer.map(item => <SideBarItem route={item.route} image={item.image} alt={item.alt} title={item.title} />) : ''}
            </ul>
        </aside>
    )
}

export default SideBar