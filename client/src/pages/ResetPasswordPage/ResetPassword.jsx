import React from 'react';
import keyLogo from '../../assets/images/ResetPasswordImages/Key.png';
import GreenVector from '../../assets/images/ResetPasswordImages/Vector.png';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';

const UpdatePassword = () => {
  return (
    <div className={styles.reset}>
      <div className={styles.reset__title}>
        <h1>Synergy</h1>
        <p>takes care of your safety</p>
      </div>
      <div className={styles.mainBox}>
        <div className={styles.dataInputFields}>
          <div className={styles.savedBack}>
            <img src={GreenVector} alt='Logo for Login Page' />
            <p className={styles.savedText}>Changes were saved</p>
          </div>
          <div className={styles.logoCircleBig}>
            <div className={styles.logoCirclelittle}>
              <div className={styles.logo}>
                <img src={keyLogo} alt='Logo for Login Page' />
              </div>
            </div>
          </div>
          <p className={styles.nameOfBox}>Reset a password</p>
          <p className={styles.requirementsText}>Must be at least 6 characters</p>
          <form className={styles.mainForm}>
            <Input
              name='Create a password'
              type='password'
              placeholder='Create a password'
              className = {styles.inputPas}
            />
            <Input
              name='Confirm a password'
              type='password'
              placeholder='Confirm a password'
              className = {styles.inputPas}
            />
            <Button
              variant='contained'
              type='submit'
              className = {styles.resetButton}
            >
              Reset password
            </Button>
            <a href='/login' className={styles.loginHref}>Back to log in</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;