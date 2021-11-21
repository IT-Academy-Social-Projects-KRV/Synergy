import React from 'react';
import PropTypes from 'prop-types';
import fieldsForSideBar from './sidebarItems';
import './SideBar.module.scss';
import styles from './SideBar.module.scss';

import SideBarItem from './SideBarItem/SideBarItem';

const SideBar = sideClass => {
  const role = 'admin';

  return (
    <aside className={styles.sidebar + ' ' + sideClass}>
      <h4>Management</h4>

      <ul className={styles.sidebar_list}>
        {role === 'admin'
          ? fieldsForSideBar.Admin.map(item=> (
              <SideBarItem
                key={item.title}
                route={item.route}
                image={item.image}
                alt={item.alt}
                title={item.title}
              />
            ))
          : ''}
        {role === 'customer'
          ? fieldsForSideBar.Customer.map(item=> (
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

SideBar.propTypes = {
  sideClass: PropTypes.string,
};

export default SideBar;