import styles from '../../consts/styles/Authorization.module.scss';

const AutorizationHeader = () => {
  return (
    <div className={styles.authorization__title}>
      <h1>Synergy</h1>
      <p>Welcome to your project manager</p>
    </div>
  );
};

export default AutorizationHeader;