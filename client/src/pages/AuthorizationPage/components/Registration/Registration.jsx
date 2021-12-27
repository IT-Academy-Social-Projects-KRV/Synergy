import routes from '../../../../configs/routes';
import registrationLogo from '../../../../assets/images/AuthorizationImages/registrationLogo.png';

import styles from '../../../../consts/Authorization.module.scss';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { style } from '../../style.jsx';
import { useForm } from 'react-hook-form';
import AutorizationHeader from '../../../../shared/Autorization/AutorizationHeader';
import AutorizationFooter from '../../../../shared/Autorization/AutorizationFooter';
import { valPassword, valRequired } from '../../../../consts/validationPropertiesForFields';
import validStyle from '../../../../consts/validation.module.scss';

const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });
  const { pathToLogin } = routes.NonAuthRoutes;

  const onSubmit = () => {

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
            <p className={styles.nameOfPageRegistration}>Registration</p>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.authorizationForm}>
              <Input
                {...register('name', valRequired)}
                name='name'
                type='text'
                placeholder='Name Surname'
                sx={style.inputName}
              />
              <div className={validStyle.textBlock}>
                {errors?.name && <p>{errors?.name?.message || 'Error, try again'}</p>}
              </div>
              <Input
                {...register('email', valRequired)}
                name='email'
                type='email'
                placeholder='Email'
                sx={style.inputEmail}
              />
              <div className={validStyle.textBlock}>
                {errors?.email && <p>{errors?.email?.message || 'Error, try again'}</p>}
              </div>
              <Input
                {...register('password', valPassword)}
                name='password'
                type='password'
                placeholder='Password'
                sx={style.inputPassword}
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