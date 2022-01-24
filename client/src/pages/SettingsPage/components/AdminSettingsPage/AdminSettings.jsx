import { React, useState } from 'react';
import routes from '../../../../configs/routes';
import { userSelector } from '../../../../redux';
import { Link } from 'react-router-dom';
import resset_password_icon from '../../../../assets/images/SettingsPageImages/resset_password_image.svg';
import username_icon from '../../../../assets//images/SettingsPageImages/username-icon.svg';
import changes_was_saved_icon from '../../../../assets/images/SettingsPageImages/changes_was_saved.svg';
import cancel from '../../../../assets/images/SettingsPageImages/cancel.svg';
import style from './AdminSettings.module.scss';
import { Save } from '../../../../shared/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpdateUser } from '../../../../redux/requests/userRequest';

const AdminSettings = () => {

  const dispatch = useDispatch();

  const user = useSelector(userSelector);

  const [isShowChanges, setShowChanges] = useState(false);

  const [firstName, setFirstname] = useState(user.firstName);

  const [lastName, setLastname] = useState(user.lastName);

  const handleFirstName = () => {
    dispatch(fetchUpdateUser({ firstName: firstName, lastName: lastName, id: user.id })).then(() => {
      setShowChanges(true);

      setTimeout(() => {
        setShowChanges(false);
      }, 5000);
    });
  };

  const sendUserName = async () => {
    handleFirstName();
  };

  return (
    <>
      <section className={style.settings_container}>
        {isShowChanges ? <div className={style.alert}>
          <div className={style.alert_elements}>
            <img src={changes_was_saved_icon}></img>
            <span className={style.alert_title}>Changes was saved</span>
          </div>
          <div className={style.alert_cancel}>
            <img onClick={() => setShowChanges(false)} src={cancel}></img>
          </div>
        </div> : ''}

        <div className={style.settings_title}>
          <h1>Settings</h1>
        </div>

        <div className={style.settings_body_wrapper}>

          <div className={style.settings_profile}>
            <div className={style.profile_tab}>
              <span>Profile</span>
            </div>
          </div>

          <div className={style.settings_personal}>
            <div className={style.settings_personal__header}>
              <div className={style.settings_personal__header_title}>
                <span>Personal data</span>
              </div>
              <div className={style.settings_personal__header_subtitle}>
                <span>Update your personal data here. Enter values in text field and save on button.</span>
              </div>
            </div>

            <div className={style.settings_personal__form}>
              <div className={style.settings_personal__form_inputs}>
                <div className={style.input}>
                  <img src={username_icon}></img>
                  <span className={style.inputs_title}>First name</span>
                  <input
                    defaultValue={firstName}
                    className={style.username_input}
                    onChange={(event) => setFirstname(event.target.value)}
                  >
                  </input>
                  <span className={style.inputs_title}>Last name</span>
                  <input
                    defaultValue={lastName}
                    className={style.username_input}
                    onChange={(event) => setLastname(event.target.value)}
                  >
                  </input>

                </div>
              </div>

              <div className={style.settings_personal__form_actions}>
                <Save clickHandler={sendUserName} text='SAVE' variant='contained' type='submit' />
                <div className={style.password_tab}>
                  <span>Password</span>
                </div>
              </div>

            </div>
          </div>

          <div className={style.settings_security}>

            <div className={style.settings_security__header}>
              <div className={style.settings_security__header_title}>
                <span>Security</span>
              </div>
              <div className={style.settings_security__header_subtitle}>
                <span>You can resset the password</span>
              </div>
            </div>

            <div className={style.settings_security__body}>
              <img src={resset_password_icon}></img>
              <Link to={routes.AuthRoutes.pathToDashboard}>
                <span className={style.span_link}>Resset password by link</span>
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default AdminSettings;