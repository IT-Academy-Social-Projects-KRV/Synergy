import React from 'react';
import keyLogo from '../../assets/images/ResetPasswordImages/keyLogo.png';
import CLogo from '../../assets/images/MainPageImages/C.png';
import GreenVector from '../../assets/images/ResetPasswordImages/Vector.png';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';

const UpdatePassword = () => {
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
          <div className={styles.savedBack}>
            <img src={GreenVector} alt='Logo for Login Page' />
            <p className={styles.savedText}>Changes were saved</p>
          </div>
          <div className={styles.logoCircle}>
            <img src={keyLogo} alt='Logo for Login Page' />
          </div>
          <p className={styles.nameOfBox}>Reset a password</p>
          <p className={styles.requirementsText}>Must be at least 6 characters</p>
          <form className={styles.mainForm}>
            <Input
              name='Create a password'
              type='password'
              placeholder='Create a password'
              sx = {style.inputPas}
            />
            <Input
              name='Confirm a password'
              type='password'
              placeholder='Confirm a password'
              sx = {style.inputPas}
            />
            <Button
              variant='contained'
              type='submit'
              sx = {style.resetbutton}
            >
              Reset password
            </Button>
            <a href='/login' className={styles.loginHref}>Back to log in</a>
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

export default UpdatePassword;