import { useSelector } from 'react-redux';
import { projectSelector, isLoaderSelector } from '../../../redux';
import Loader from '../../../components/Loader';
import { ProjectBill } from './ProjectBill';
import { ProjectInfo } from './ProjectInfo';
import { ProjectDescription } from './ProjectDescription';
import { ProjectDiagram } from './ProjectDiagram';
import { ProjectAddItems } from './ProjectAddItems';
import { TableExistItems } from './TableExistItems';
import styles from './SingleProject.module.scss';

const Project = () => {
  const project = useSelector(projectSelector);
  const isLoader = useSelector(isLoaderSelector);

  return (

    isLoader ? 
      <Loader /> 
      : 
      project ? <>
        <main>
          <div className={styles.board}>
            <div className={styles.board__projectBlock}>
              <h1 className={styles.board__projectTitle}>{project.name}</h1>
              <div className={styles.board__projectData}>
                <div className={styles.board__block}>
                  <ProjectBill />
                  <ProjectInfo
                    firstName={project.user.firstName}
                    lastName={project.user.lastName}
                    orderDate={project.dateStart}
                    releaseDate={project.dateFinish} />
                  <ProjectDescription description={project.description} />
                </div>

                <div className={styles.board__diagram}>
                  <ProjectDiagram />
                </div>
              </div>
            </div>

            <div className={styles.board__projectBlock}>
              <TableExistItems itemsData={project.items} />
            </div>

            <div className={styles.board__projectBlock}>
              <ProjectAddItems />
            </div>
          </div>
        </main>
      </> : 'Choose the project please...'
  );
};

export default Project;
