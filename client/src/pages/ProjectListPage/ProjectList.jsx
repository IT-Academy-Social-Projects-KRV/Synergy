/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './ProjectList.module.scss';
import EmptyProjectList from '../EmptyProjectListPage';
import ProjectListItem from './components/ProjectListItem';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  isLoaderSelector,
  projectListSelector,
  setIsLoader,
  fetchSortProjectList
} from '../../redux';
import SortComponent from './components/SortComponent/SortComponent';
import PaginationBar from './components/Pagination/PaginationBar';
import './ProjectListTransition.scss';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

const ProjectList = () => {
  const dispatch = useDispatch();
  const projectList = useSelector(projectListSelector);
  const isLoader = useSelector(isLoaderSelector);
 
  const [options, setOptions] = useState({
    name: '',
    capital: [0, 100000],
    dateStart: '',
    dateFinish: '',
    page: 1
  });

  function handleSortProjectsList() {
    dispatch(fetchSortProjectList(options));
  }

  useEffect(() => {
    handleSortProjectsList();
    return () => {
      dispatch(setIsLoader(false));
    };
  }, [options.page]);

  return (
    <div style={{ height: '100%' }}>
      {isLoader ? (
        <Loader/>
      ) : projectList ? (
        <>
          <h1 className={styles.title}>Projects List</h1>
          <SortComponent options={options} setOptions={setOptions} sendSort={handleSortProjectsList}/>
          <div className={styles.container}>
            <li className={styles.list_head}>
              <div>Capital</div>
              <div>Added date</div>
              <div>Release date</div>
              <div>Description</div>
              <div>Project name</div>
            </li>
            {projectList.projects.map((d) => (
              <Link 
                key={d.id}
                to={`${routes.AuthRoutes.pathToProject}/${d.id}`}
              >
                <ProjectListItem
                  id={d.id}
                  name={d.name}
                  desc={d.description}
                  capital={d.capital}
                  start={d.dateStart}
                  finish={d.dateFinish}
                />
              </Link>
            ))}
            <PaginationBar
              options={options}
              setOptions={setOptions}
              currentPage={projectList.currentPage}
              totalPages={projectList.totalPages}
            />
          </div>
        </>
      ) : (
        <EmptyProjectList/>
      )}
    </div>
  );
};

export default ProjectList;
