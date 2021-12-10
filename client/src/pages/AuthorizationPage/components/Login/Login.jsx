import loginLogo from '../../../../assets/images/AuthorizationImages/loginLogo.png';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styles from '../../Authorization.module.scss';
import { style } from '../../style.jsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLoginUser } from '../../../../redux';


const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$/;

  const handleFetchLoginUser = (fields) => {
    dispatch(fetchLoginUser(fields));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    handleFetchLoginUser({
      email,
      password
    });
  };


  return (
    <div className={styles.authorization__mainContent}>
      <div className={styles.logo}>
        <img src={loginLogo} alt='Logo for Login Page'/>
      </div>
      <div className={styles.authorizationBox}>
        <div className={styles.dataInputFields}>
          <p className={styles.nameOfPageLogin}>Login</p>
          <form className={styles.authorizationForm} onSubmit={e => handleSubmit(e)}>
            <Input 
              name='email' 
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              pattern={emailPattern}
              placeholder='Email'
              sx={style.inputEmail}
            />
            <Input 
              name='password' 
              type='password' 
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password' 
              sx={style.inputPassword}
            />
            <a href='/login'>Forgot password?</a>
            <Button 
              variant='contained' 
              type='submit'
              sx={style.saveOrLoginBtn}>
               Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
