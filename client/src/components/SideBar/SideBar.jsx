import React from 'react';
import fieldsForSideBar from './sidebarItems';
import styles from './SideBar.module.scss';
import SideBarItem from './SideBarItem/SideBarItem';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux';

const SideBar = (props) => {
  const user = useSelector(userSelector);

  return (
    <aside className={styles.sidebar + ' ' + props.sideClass}>
      <h4>Management</h4>
      <ul className={styles.sidebar_list}>
        {user.roleId === 2
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
        {user.roleId === 1
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
