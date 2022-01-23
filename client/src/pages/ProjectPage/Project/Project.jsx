import { useState, useEffect } from 'react';
import Loader from '../../../components/Loader';
import { ProjectBill } from './ProjectBill';
import { ProjectInfo } from './ProjectInfo';
import { ProjectDescription } from './ProjectDescription';
import { ProjectDiagram } from './ProjectDiagram';
import { ProjectAddItems } from './ProjectAddItems';
import { TableExistItems } from './TableExistItems';
import styles from './SingleProject.module.scss';
import { getProjectById } from '../../../services/projects.service';

const Project = (props) => {
  const [project, setProject] = useState(null);
  const [isLoader, setLoader] = useState(true);

  const fetchProject = async () => {
    const response = await getProjectById(props.match.params.id);
    setProject(response.data);
    setLoader(false);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    isLoader ?
      <Loader />
      :
      <main>
        <div className={styles.board}>
          <div className={styles.board__projectBlock}>
            <h1 className={styles.board__projectTitle}>{project.name}</h1>
            <div className={styles.board__projectData}>
              <div className={styles.board__block}>
                <ProjectBill />
                <ProjectInfo
                  firstName={project?.user?.firstName && project.user.firstName}
                  lastName={project?.user?.lastName && project.user.lastName}
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
            <ProjectAddItems handleSubmit={fetchProject} />
          </div>
        </div>
      </main>
  );
};

export default Project;
