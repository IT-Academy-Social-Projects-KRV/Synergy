import React from 'react';
import PropTypes from 'prop-types';
import style from './ProjectListItem.module.scss';

const ProjectListItem = (
    { 
        id, capital, start, finish, desc, name,
    }
    ) => {
  return (
    <>
      <li className={style.item}>
        <div>
          <span className={style.id}>#{id}</span>
        </div>
        <div>${capital}</div>
        <div>{start}</div>
        <div>{finish}</div>
        <div>{desc}</div>
        <div>{name}</div>
      </li>
    </>
  );
};

ProjectListItem.propTypes = {
  id: PropTypes.number.isRequired,
  capital: PropTypes.number,
  start: PropTypes.string,
  finish: PropTypes.string,
  desc: PropTypes.string,
  name: PropTypes.string,
};

ProjectListItem.defaultProps = {
    start: 'mm/dd/yyyy',
    finish: 'mm/dd/yyyy',
};

export default ProjectListItem;
