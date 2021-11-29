import diagram from '../../../../assets/images/MainPageImages/diagram.png';
import styles from './SingleProjectDiagram.module.scss';

const SingleProjectDiagram = () => {
  return (
    <section>
      <div className={styles.diagram}>
        <p className={styles.diagram__title}>Analytics</p>
        <img src={diagram} alt='diagram'></img>
      </div>
    </section>
  );
};

export default SingleProjectDiagram;
