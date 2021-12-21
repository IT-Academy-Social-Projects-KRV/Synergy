import React, { useEffect, useState } from 'react';
import styles from './ProjectList.module.scss';
import EmptyProjectList from '../EmptyProjectListPage';
import ProjectListItem from './components/ProjectListItem';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProjectList,
  isLoaderSelector,
  projectListSelector,
  setIsLoader, projectPageSelector, fetchSortProjectList
} from '../../redux';
import SortComponent from './components/SortComponent/SortComponent';
import PaginationBar from './components/Pagination/PaginationBar';
import './ProjectListTransition.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ProjectList = () => {
  const [options, setOptions] = useState({
    name: '',
    capital: [0, 100000],
    dateStart: '',
    dateFinish: ''
  });
  const dispatch = useDispatch();
  const projectPages = useSelector(projectPageSelector);
  const projectList = useSelector(projectListSelector);
  const isLoader = useSelector(isLoaderSelector);

  function handleFetchProjectList() {
    dispatch(fetchProjectList());
  }

  function handleSortProjectsList(options, page) {
    dispatch(fetchSortProjectList(options, page));
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
        <Loader/>
      ) : projectList.length > 0 ? (
        <>
          <h1 className={styles.title}>Projects List</h1>
          <SortComponent options={options} setOptions={setOptions} sendSort={handleSortProjectsList}/>
          <div className={styles.container}>
            <TransitionGroup component='ul' className={styles.list}>
              <li className={styles.list_head}>
                <div>ID</div>
                <div>Capital</div>
                <div>Added date</div>
                <div>Release date</div>
                <div>Description</div>
                <div>Owner</div>
              </li>
              {projectList.map((d) => (
                <CSSTransition
                  key={d.id}
                  in={projectList}
                  timeout={700}
                  classNames='list'
                  unmountOnExit
                  mountOnEnter
                >
                  <ProjectListItem
                    key={d.id}
                    id={d.id}
                    name={d.name}
                    desc={d.description}
                    capital={d.capital}
                    start={d.dateStart}
                    finish={d.dateFinish}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
            <PaginationBar
              sendSort={handleSortProjectsList}
              options={options}
              totalPages={projectPages}
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
