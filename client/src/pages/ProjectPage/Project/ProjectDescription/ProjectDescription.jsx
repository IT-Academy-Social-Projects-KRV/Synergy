import styles from './ProjectDescription.module.scss';

const ProjectDescription = ({ description }) => {
  return (
    <section>
      <div className={styles.description}>
        <b className={styles.description__title}>Description</b>

        <p data-testid='description' className={styles.description__text}>
          {description}
        </p>
      </div>
    </section>
  );
};

export default ProjectDescription;
