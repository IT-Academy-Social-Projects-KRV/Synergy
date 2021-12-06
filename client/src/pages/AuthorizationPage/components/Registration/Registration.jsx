import { Link } from 'react-router-dom';
import routes from '../../../../configs/routes';
import registrationLogo from '../../../../assets/images/AuthorizationImages/registrationLogo.png';
import styles from '../../Authorization.module.scss';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { style } from '../../style.jsx';

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
            <Input name='email' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$' placeholder='Email'
              sx={style.inputEmail}/>
            <Input name='password' type='password' placeholder='Password' sx={style.inputPassword}/>
            <p className={styles.orWord}>OR</p>
            <p className={styles.existAccount}>
              Already have an account?
              <Link to={pathToLogin}>Login now</Link>
            </p>
            <Button variant='contained' type='submit' sx={style.saveOrLoginBtn}>Save</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
