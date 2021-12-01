import styles from './ProjectDescription.module.scss';

const ProjectDescription = () => {
  return (
    <section>
      <div className={styles.description}>
        <b className={styles.description__title}>Description</b>

        <p className={styles.description__text}>
          CRM stands for “Customer Relationship Management”. In most cases, when
          people talk about CRM, they are usually referring to a CRM system, a
          tool aimed at helping companies with sales, marketing and service
          management. CRM software allows businesses to focus on their company’s
          relationships with customers, colleagues, suppliers, etc. With a
          professional CRM in place, it becomes much easier to find new
          customers, win their trust, provide qualified support, and provide
          additional services throughout the relationship.
        </p>
      </div>
    </section>
  );
};

export default ProjectDescription;
