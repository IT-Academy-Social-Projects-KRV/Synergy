import { Link } from 'react-router-dom';
import routes from '../../../configs/routes';
import registrationLogo from '../../../assets/images/AuthorizationImages/registrationLogo.png';
import styles from '../../Authorization/Authorization.module.scss';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const style = {
  loginBtn: {
    mt: '30px',
    ml: 'auto',
    mr: 'auto',
    width: '200px',
    backgroundColor: '#6c63ff',
    '&:hover': {
      backgroundColor: '#39358d'
    }
  },
  inputName: {
    width: '60%', 
    ml: 'auto', 
    mr: 'auto',
    mb: '20px',
    fontSize: '15px',
    fontWeight: 'bold',
    '&:active':{
      borderBottomColor: 'red'
    }
  },
  inputEmail: {
    width: '60%', 
    ml: 'auto', 
    mr: 'auto',
    mb: '20px',
    fontSize: '15px',
    fontWeight: 'bold'
  },
  inputPassword: {
    width: '60%', 
    ml: 'auto', 
    mr: 'auto',
    fontSize: '15px',
    fontWeight: 'bold'
  }
};

const Registration = () => {
  const { pathToLogin } = routes;
  return (
    <div className={styles.authorization__mainContent}>
      <div className={styles.logo}>
        <img src={registrationLogo} alt='Logo for Registration Page'/>
      </div>
      <div className={styles.authorizationBox}>
        <div className={styles.dataInputFields}>
          <p className={styles.nameOfPageRegistration}>Registration</p>
          <form className={styles.authorizationForm}>
            <Input name='name' type='text'  placeholder='Name Surname' sx={style.inputName}/>
            <Input name='email' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$'
              placeholder='Email' sx={style.inputEmail}/>
            <Input name='password' type='password' placeholder='Password' sx={style.inputPassword}/>
            <p className={styles.orWord}>OR</p>
            <p className={styles.existAccount}>
              Already have an account?
              <Link to={pathToLogin}>to Login</Link>
            </p>
            <Button variant='contained' type='submit' sx={style.loginBtn}>Save</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
