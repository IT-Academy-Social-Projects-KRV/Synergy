import loginLogo from '../../../../assets/images/AuthorizationImages/loginLogo.png';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import styles from '../../../../consts/styles/Authorization.module.scss';
import { style } from '../../style.jsx';
import validStyle from '../../../../consts/validation.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLoginUser } from '../../../../redux';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import routes from '../../../../configs/routes';
import AutorizationHeader from '../../../../shared/Autorization/AutorizationHeader';
import AutorizationFooter from '../../../../shared/Autorization/AutorizationFooter';
import {
  valEmail,
  valPassword,
} from '../../../../consts/validationPropertiesForFields';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });
  //const user = useSelector(userSelector);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFetchLoginUser = (fields) => {
    dispatch(fetchLoginUser(fields));
  };

  const onSubmit = () => {
    handleFetchLoginUser({
      email,
      password,
    });
    // if (!user) {
    history.push(
      location.state?.requestedPath ?? routes.AuthRoutes.pathToProjectList
    );
    // }
  };

  return (
    <div className={styles.authorization}>
      <AutorizationHeader />
      <div className={styles.authorization__mainContent}>
        <div className={styles.logo}>
          <img src={loginLogo} alt='Logo for Login Page' />
        </div>
        <div className={styles.authorizationBox}>
          <div className={styles.dataInputFields}>
            <p className={styles.titleForm}>Login</p>
            <form
              className={styles.authorizationForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                {...register('email', valEmail)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                sx={style.input}
              />
              <div className={validStyle.textBlock}>
                {errors?.email && (
                  <p>{errors?.email?.message || 'Error, try again'}</p>
                )}
              </div>
              <Input
                {...register('password', valPassword)}
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                sx={style.input}
              />
              <div className={validStyle.textBlock}>
                {errors?.password && (
                  <p>{errors?.password?.message || 'Error, try again'}</p>
                )}
              </div>
              <Link to='/'>Forgot password?</Link>
              <Button
                variant='contained'
                type='submit'
                sx={style.saveOrLoginBtn}
              >
                Login
              </Button>
              <p className={styles.dontHaveAccount}>
                Don`t have an account?
                <Link to='/registration'>Register now</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <AutorizationFooter />
    </div>
  );
};

export default Login;
