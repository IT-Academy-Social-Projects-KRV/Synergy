import React from 'react';
import style from './ProjectListItem.module.scss';

const ProjectListItem = (props) => {

  return (
    <>
      <li className={style.item}>
        <div>${props.capital}</div>
        <div>{props.start}</div>
        <div>{props.finish}</div>
        <div>{props.desc}</div>
        <div>{props.name}</div>
      </li>
    </>
  );
};

export default ProjectListItem;
