import React, {useEffect, useState} from 'react';
import styles from './ProjectList.module.scss';
import EmptyProjectList from './EmptyProjectList';
import ProjectListItem from './ProjectListItem/ProjectListItem';
import {useHttp} from '../../hooks/http_hook';
import Loader from '../Loader/Loader';

const ProjectList = () => {
  const [data, setData] = useState([]);
  const {get_request, loading} = useHttp();
  useEffect(() => {
    (async () => {
      const res = await get_request('project');
      setData(res.data);
    })();
  }, []);

  return (
    <div style={{height: '100%'}}>
      {loading ? <Loader/> :
        data.length > 0 ?
          (
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
                {data.map((d) => (
                  <ProjectListItem
                    key={d.id}
                    id={d.id}
                    name={d.name}
                    desc={d.description}
                    capital={d.capital}
                    start={d.date_start}
                    finish={d.date_finish}
                  />
                ))}
              </ul>
            </>
          ) : (
            <EmptyProjectList/>
          )}
    </div>
  );
};

export default ProjectList;
