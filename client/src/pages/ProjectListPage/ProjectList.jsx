import React, { useEffect } from 'react';
import styles from './ProjectList.module.scss';
import EmptyProjectList from '../EmptyProjectListPage';
import ProjectListItem from './components/ProjectListItem';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProjectList,
  isLoaderSelector,
  projectListSelector,
  setIsLoader
} from '../../redux';

const ProjectList = () => {
  const dispatch = useDispatch();
  const projectList = useSelector(projectListSelector);
  const isLoader = useSelector(isLoaderSelector);

  function handleFetchProjectList() {
    dispatch(fetchProjectList());
  }

  useEffect(() => {
    handleFetchProjectList();
    return () => {
      dispatch(setIsLoader(false));
    };
  }, []);

  return (
    <div style={{ height: '100%' }}>
      {isLoader ? (
        <Loader />
      ) : projectList.length > 0 ? (
        <>
          <h1 className={styles.title}>Projects List</h1>
          <ul className={styles.list}>
            <li className={styles.list_head}>
              <div>ID</div>
              <div>Capital</div>
              <div>Added date</div>
              <div>Release date</div>
              <div>Description</div>
              <div>Owner</div>
            </li>
            {projectList.map((d) => (
              <ProjectListItem
                key={d.id}
                id={d.id}
                name={d.name}
                desc={d.description}
                capital={d.capital}
                start={d.dateStart}
                finish={d.dateFinish}
              />
            ))}
          </ul>
        </>
      ) : (
        <EmptyProjectList />
      )}
    </div>
  );
};

export default ProjectList;
