import React from 'react';
import keyLogo from '../../assets/images/ResetPasswordImages/Key.png';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';

const ForgotPassword = () => {
  return (
    <div className={styles.reset}>
      <div className={styles.reset__title}>
        <h1>Synergy</h1>
        <p>takes care of your safety</p>
      </div>
      <div className={styles.mainBox}>
        <div className={styles.dataInputFields}>
          <div className={styles.logoCircleBig}>
            <div className={styles.logoCirclelittle}>
              <div className={styles.logo}>
                <img src={keyLogo} alt='Logo for Login Page' />
              </div>
            </div>
          </div>
          <p className={styles.nameOfBox}>Forgot password?</p>
          <p className={styles.requirementsText}>No disturbed, we`ll send instruction.</p>
          <form className={styles.mainForm}>
            <p className={styles.emailText}>Email</p>
            <Input
              name='Email'
              type='Email'
              placeholder='enter your Email'
              className = {styles.inputPas}
            />
            <Button
              variant='contained'
              type='submit'
              className = {styles.resetButton}
            >
              Submit Email
            </Button>
            <a href='/login' className={styles.loginHref}>Back to log in</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;