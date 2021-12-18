import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux';
import fieldsForSideBar from './sidebarItems';
import styles from './SideBar.module.scss';
import SideBarItem from './SideBarItem/SideBarItem';
import userRole from '../../consts/userRoles';

const SideBar = (props) => {
  const user = useSelector(userSelector);

  return (
    <aside className={styles.sidebar + ' ' + props.sideClass}>
      <h4>Management</h4>
      <ul className={styles.sidebar_list}>
        {user.roleId === userRole.AdminRole
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
        {user.roleId === userRole.UserRole
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
