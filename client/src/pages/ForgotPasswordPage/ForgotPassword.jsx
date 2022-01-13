import React from 'react';
import CLogo from '../../assets/images/MainPageImages/C.png';
import keyLogo from '../../assets/images/ResetPasswordImages/keyLogo.png';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';

const ForgotPassword = () => {
  const style = {
    resetbutton:{
      flexDirection:'column',
      width: '60%',
      height: '40px',
      mt: '20px',
      ml: 'auto',
      mr: 'auto',
      backgroundColor: '#7872D6'
    },
    inputPas: {
      flexDirection:'column',
      width: '60%',
      mt: '20px',
      ml: 'auto',
      mr: 'auto'
    }
  };
  return (
    <div className={styles.reset}>
      <div className={styles.reset__title}>
        <h1>Synergy</h1>
        <p>takes care of your safety</p>
      </div>
      <div className={styles.mainBox}>
        <div className={styles.dataInputFields}>
          <div className={styles.logoCircle}>
            <img src={keyLogo} alt='Logo for Login Page' />
          </div>
          <p className={styles.nameOfBox}>Forgot password?</p>
          <p className={styles.requirementsText}>No disturbed, we`ll send instruction.</p>
          <form className={styles.mainForm}>
            <p className={styles.emailText}>Email</p>
            <Input
              name='Email'
              type='Email'
              placeholder='enter your Email'
              sx = {style.inputPas}
            />
            <Button
              variant='contained'
              type='submit'
              sx={style.resetbutton}
            >
              Submit Email
            </Button>
            <a href='/' className={styles.loginHref}>Back to log in</a>
          </form>
        </div>
        <div className={styles.bottomCText}>
          <img src={CLogo} alt='Copyright sign' />
          <span>SYNERGY, 2021. ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;