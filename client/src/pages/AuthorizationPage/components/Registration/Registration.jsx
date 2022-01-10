import routes from '../../../../configs/routes';
import registrationLogo from '../../../../assets/images/AuthorizationImages/registrationLogo.png';

import styles from '../../../../consts/styles/Authorization.module.scss';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';
import { style } from '../../style.jsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import AutorizationHeader from '../../../../shared/Autorization/AutorizationHeader';
import AutorizationFooter from '../../../../shared/Autorization/AutorizationFooter';
import { valPassword, valRequired } from '../../../../consts/validationPropertiesForFields';
import validStyle from '../../../../consts/validation.module.scss';
import { fetchRegisterUser } from '../../../../redux';

const Registration = () => {
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });
  const { pathToLogin } = routes.NonAuthRoutes;

  const dispatch = useDispatch();
  //
  // const isLoader = useSelector(isLoaderSelector);

  const [emailForm, setEmailForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleRegisterUser = () => {
    dispatch(fetchRegisterUser(emailForm));
  };


  const onSubmit = () => {
    handleRegisterUser();
    setEmailForm({
      name: '',
      surname: '',
      email: '',
      password: '',
    });
    history.push(
      routes.NonAuthRoutes.pathToLogin
    );
  };

  return (
    <div className={styles.authorization}>
      <AutorizationHeader />
      <div className={styles.authorization__mainContent}>
        <div className={styles.logo}>
          <img src={registrationLogo} alt='Logo for Registration Page' />
        </div>
        <div className={styles.authorizationBox}>
          <div className={styles.dataInputFields}>
            <p className={styles.titleForm}>Registration</p>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.authorizationForm}>
              <Input
                {...register('name', valRequired)}
                onChange={(e) =>
                  setEmailForm({
                    ...emailForm,
                    firstName: e.target.value
                  })
                }
                name='name'
                type='text'
                placeholder='First Name'
                sx={style.input}
              />
              <div className={validStyle.textBlock}>
                {errors?.name && <p>{errors?.name?.message || 'Error, try again'}</p>}
              </div>
              <Input
                {...register('surname', valRequired)}
                onChange={(e) =>
                  setEmailForm({
                    ...emailForm,
                    lastName: e.target.value
                  })
                }
                name='surname'
                type='text'
                placeholder='Last Name'
                sx={style.input}
              />
              <div className={validStyle.textBlock}>
                {errors?.name && <p>{errors?.name?.message || 'Error, try again'}</p>}
              </div>
              <Input
                {...register('email', valRequired)}
                onChange={(e) =>
                  setEmailForm({
                    ...emailForm,
                    email: e.target.value
                  })
                }
                name='email'
                type='email'
                placeholder='Email'
                sx={style.input}
              />
              <div className={validStyle.textBlock}>
                {errors?.email && <p>{errors?.email?.message || 'Error, try again'}</p>}
              </div>
              <Input
                {...register('password', valPassword)}
                onChange={(e) =>
                  setEmailForm({
                    ...emailForm,
                    password: e.target.value
                  })
                }
                name='password'
                type='password'
                placeholder='Password'
                sx={style.input}
              />
              <div className={validStyle.textBlock}>
                {errors?.password && <p>{errors?.password?.message || 'Error, try again'}</p>}
              </div>
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
      <AutorizationFooter />
    </div>
  );
};

export default Registration;
