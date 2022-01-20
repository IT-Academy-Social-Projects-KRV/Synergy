import { React }  from 'react';
import style from '../AccountPageProfile/AccountPageProfile.module.scss';
import username_icon from '../../../../assets//images/SettingsPageImages/username-icon.svg';
import email from '../../../../assets/images/SettingsPageImages/email.svg';
import { userSelector } from '../../../../redux';
import {  useSelector } from 'react-redux';

const AccountPageProfile = () => {

  const user = useSelector(userSelector);

  const getUserRole = (roleId) => {
    const roles = {
      1: 'Customer',
      2: 'Admin'
    };

    return roles[roleId]; 
  };
 
  return (
    <>
      <div className={style.account_personal_data_container}>
        <div className={style.account_personal_inscription}>
          <span>Account</span>
        </div>
        <div className={style.account_personal_data_profile_tab}>
          <span>Profile</span>
        </div>

        <div className={style.account_personal_header}>
          <div className={style.account_personal_title}>
            <span>Personal data</span>
          </div>
          <div className={style.account_personal_subtitle}>
            <span>Shown info about yourself</span>
          </div>
        </div>
        <div className={style.account_personal_form}>

          <div className={style.account_personal_form_information}>
            <div className={style.account_data}>
              <img src={username_icon}></img>
              <span className={style.user_data}>Username</span>
              <span className={style.username}> {`${user.firstName} ${user.lastName}`} </span>
            </div>

            <div className={style.account_data}>
              <img src={email}></img>
              <span className={style.user_data}>Email</span>
              <span className={style.email}>{user.email}</span>
            </div>
          </div>

          <div className={style.account_personal_form_information_data}>
            <div className={style.account_user_data}>
              <span className={style.user_information}>User status:</span>
              <span className={style.get_user_status}>{getUserRole(user.roleId)}</span>
            </div>
            <div className={style.account_user_data}>
              <span className={style.user_information}>Data registration:</span>
              <span className={style.get_data_registration}>{ new Date(user.createdAt).toLocaleDateString() }</span>
            </div>
          </div>

        </div>

      </div>
      
    </>
  );
};

export default AccountPageProfile;