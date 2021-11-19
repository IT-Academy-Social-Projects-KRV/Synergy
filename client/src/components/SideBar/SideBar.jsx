import React from 'react';
import fieldsForSideBar from './sidebarItems';
import './SideBar.module.scss';
import styles from './SideBar.module.scss';

import SideBarItem from './SideBarItem/SideBarItem';

const SideBar = props => {
    const role = 'admin';

    return (
        <aside className={styles.sidebar + ' ' + props.sideClass}>
            <h4>Management</h4>
            <ul className={styles.sidebar_list}>
                {role === 'admin'
                    ? fieldsForSideBar.Admin.map(item =>
                        <SideBarItem
                            key={item.title}
                            route={item.route}
                            image={item.image}
                            alt={item.alt}
                            title={item.title} />)
                    : ''}
                {role === 'customer'
                    ? fieldsForSideBar.Customer.map(item =>
                        <SideBarItem
                            key={item.title}
                            route={item.route}
                            image={item.image}
                            alt={item.alt}
                            title={item.title} />)
                    : ''}
            </ul>
        </aside>
    )
}

export default SideBar