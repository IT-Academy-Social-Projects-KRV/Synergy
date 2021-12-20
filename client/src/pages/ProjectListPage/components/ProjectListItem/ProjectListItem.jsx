import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchProjectById } from '../../../../redux';
import style from './ProjectListItem.module.scss';

const ProjectListItem = (props) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(fetchProjectById(props.id));
  };

  return (
    <div onClick={handleClick}>
      <li className={style.item}>
        <div>
          <span className={style.id}>#{props.id}</span>
        </div>
        <div>${props.capital}</div>
        <div>{props.start}</div>
        <div>{props.finish}</div>
        <div>{props.desc}</div>
        <div>{props.name}</div>
      </li>
    </div>
  );
};

export default ProjectListItem;
