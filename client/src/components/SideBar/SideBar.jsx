import React, { useState } from 'react';
import fieldsForSideBar from './sidebarItems';
import styles from './SideBar.module.scss';
import SideBarItem from './SideBarItem/SideBarItem';
import userRole from '../../consts/userRoles';

const SideBar = (props) => {
  const [userStorage] = useState(JSON.parse(sessionStorage.getItem('user')));

  return (
    <aside className={styles.sidebar + ' ' + props.sideClass}>
      <h4>Management</h4>
      <ul className={styles.sidebar_list}>
        {userStorage.roleId === userRole.AdminRole
          ? fieldsForSideBar.Admin.map((item) => (
            <SideBarItem
              key={item.title}
              route={item.route}
              image={item.image}
              alt={item.alt}
              title={item.title}
            />
          ))
          : ''}
        {userStorage.roleId === userRole.UserRole
          ? fieldsForSideBar.Customer.map((item) => (
            <SideBarItem
              key={item.title}
              route={item.route}
              image={item.image}
              alt={item.alt}
              title={item.title}
            />
          ))
          : ''}
      </ul>
    </aside>
  );
};

export default SideBar;
