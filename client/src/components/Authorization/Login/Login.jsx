import loginLogo from '../../../assets/images/AuthorizationImages/loginLogo.png';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styles from '../../Authorization/Authorization.module.scss';
import { style } from '../style.jsx';

const Login = () => {
  return (
    <div className={styles.authorization__mainContent}>
      <div className={styles.logo}>
        <img src={loginLogo} alt='Logo for Login Page'/>
      </div>
      <div className={styles.authorizationBox}>
        <div className={styles.dataInputFields}>
          <p className={styles.nameOfPageLogin}>Login</p>
          <form className={styles.authorizationForm}>
            <Input name='email' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$' placeholder='Email'
              sx={style.inputEmail}/>
            <Input name='password' type='password' placeholder='Password' sx={style.inputPassword}/>
            <a href='/login'>Forgot password?</a>
            <Button variant='contained' type='submit' sx={style.saveOrLoginBtn}>Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
