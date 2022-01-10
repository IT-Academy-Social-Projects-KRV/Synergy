import styles from '../../consts/styles/Authorization.module.scss';
import CLogo from '../../assets/images/MainPageImages/C.png';

const AutorizationFooter = () => {
  return (
    <div className={styles.authorization__bottomCText}>
      <img src={CLogo} alt='Copyright sign' />
      <span>SYNERGY, 2021. ALL RIGHTS RESERVED</span>
    </div>
  );
};

export default AutorizationFooter;