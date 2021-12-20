import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProjectById } from '../../../../redux';
import routes from '../../../../configs/routes';
import style from './ProjectListItem.module.scss';

const ProjectListItem = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(fetchProjectById(props.id));
    history.push(routes.pathToDashboard);
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
