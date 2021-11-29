import SingleProjectBill from './SingleProjectBill/SingleProjectBill';
import SingleProjectInfo from './SingleProjectInfo/SingleProjectInfo';
import SingleProjectDescription from './SingleProjectDescription/SingleProjectDescription';
import SingleProjectDiagram from './SingleProjectDiagram/SingleProjectDiagram';
import SingleProjectAddItems from './SingleProjectAddItems/SingleProjectAddItems';
import SingleProjectExistItems from './SingleProjectExistItems/SingleProjectExistItems';
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
                <SingleProjectBill />
                <SingleProjectInfo />
                <SingleProjectDescription />
              </div>

              <div className={styles.board__diagram}>
                <SingleProjectDiagram />
              </div>
            </div>
          </div>

          <div className={styles.board__projectBlock}>
            <SingleProjectExistItems />
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
