import diagram from '../../../../assets/images/MainPageImages/diagram.png';
import styles from './ProjectDiagram.module.scss';

const ProjectDiagram = () => {
  return (
    <section data-testid='projectDiagramSection'>
      <div className={styles.diagram}>
        <p className={styles.diagram__title}>Analytics</p>
        <img src={diagram} alt='diagram'></img>
      </div>
    </section>
  );
};

export default ProjectDiagram;
