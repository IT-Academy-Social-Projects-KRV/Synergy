import ProjectBill from './ProjectBill/ProjectBill';
import SingleProjectInfo from './ProjectInfo/ProjectInfo';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectDiagram from './ProjectDiagram/ProjectDiagram';
import SingleProjectAddItems from './SingleProjectAddItems/SingleProjectAddItems';
import TableExistItems from './TableExistItems/TableExistItems';
import styles from './SingleProject.module.scss';

const SingleProject = () => {
  return (
    <>
      <main>
        <div className={styles.board}>
          <div className={styles.board__projectBlock}>
            <h1 className={styles.board__projectTitle}>Progect Name</h1>

            <div className={styles.board__projectData}>
              <div className={styles.board__block}>
                <ProjectBill />
                <SingleProjectInfo />
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
            <SingleProjectAddItems />
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleProject;
