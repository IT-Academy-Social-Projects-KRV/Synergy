import SingleProjectBill from './components/SingleProjectBill/SingleProjectBill';
import SingleProjectInfo from './components/SingleProjectInfo/SingleProjectInfo';
import SingleProjectDescription from './components/SingleProjectDescription/SingleProjectDescription';
import SingleProjectDiagram from './components/SingleProjectDiagram/SingleProjectDiagram';
import SingleProjectAddItems from './components/SingleProjectAddItems/SingleProjectAddItems';
import SingleProjectExistItems from './components/SingleProjectExistItems/SingleProjectExistItems';
import styles from './SingleProject.module.scss';

const SingleProject = () => {
  return (
    <div>
      <main>
        <div className={styles.bg_project}>
          <div className={styles.project_info}>
            <h1>Progect Name</h1>
            <div className={styles.bg_project_block}>
              <div className={styles.project_block}>
                <SingleProjectBill />
                <SingleProjectInfo />
                <SingleProjectDescription />
              </div>
              <div className={styles.project_diagram}>
                <SingleProjectDiagram />
              </div>
            </div>
            <div>
              <SingleProjectExistItems />
            </div>
            <div>
              <SingleProjectAddItems />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleProject;
