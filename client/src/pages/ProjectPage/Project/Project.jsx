import { ProjectBill } from './ProjectBill';
import { ProjectInfo } from './ProjectInfo';
import { ProjectDescription } from './ProjectDescription';
import { ProjectDiagram } from './ProjectDiagram';
import { ProjectAddItems } from './ProjectAddItems';
import { TableExistItems } from './TableExistItems';
import styles from './SingleProject.module.scss';

const Project = () => {
  return (
    <>
      <main>
        <div className={styles.board}>
          <div className={styles.board__projectBlock}>
            <h1 className={styles.board__projectTitle}>Project Name</h1>

            <div className={styles.board__projectData}>
              <div className={styles.board__block}>
                <ProjectBill />
                <ProjectInfo />
                <ProjectDescription />
              </div>

              <div className={styles.board__diagram}>
                <ProjectDiagram />
              </div>
            </div>
          </div>

          <div className={styles.board__projectBlock}>
            <TableExistItems />
          </div>

          <div className={styles.board__projectBlock}>
            <ProjectAddItems />
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
