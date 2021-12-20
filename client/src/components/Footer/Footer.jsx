import SynergyLogo from '../../assets/images/MainPageImages/Logo.png';
import FacebookLogo from '../../assets/images/MainPageImages/Facebook.png';
import LinkedInLogo from '../../assets/images/MainPageImages/LinkedIn.png';
import GitLogo from '../../assets/images/MainPageImages/Git.png';
import CLogo from '../../assets/images/MainPageImages/C.png';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

const Footer = () => {
  const { pathToDashboard } = routes.AuthRoutes;

  return (
    <footer data-testid='footerBlock' className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__logoSynergy}>
          <img src={SynergyLogo} alt='Synergy logo'/>
          <p className={styles.synergyCRM}>
            Synergy | CRM
          </p>
          <p className={styles.projectManager}>
            Project manager
          </p>
        </div>
        <div className={styles.footer__linksSupport}>
          <div>
            <p>Support</p>
            <Link to={pathToDashboard}>Contact Us</Link>
            <Link to={pathToDashboard}>FAQ</Link>
            <Link to={pathToDashboard}>Support Request</Link>
          </div>
          <div>
            <p>About</p>
            <Link to={pathToDashboard}>Our Projects</Link>
            <Link to={pathToDashboard}>FAQ</Link>
            <Link to={pathToDashboard}>Support Request</Link>
          </div>
          <div>
            <p>Social Links</p>
            <p className={styles.imgSocialMedia}>
              <Link to={pathToDashboard}>
                <img src={FacebookLogo} alt='Facebook logo' />
              </Link>
              <Link to={pathToDashboard}>
                <img src={LinkedInLogo} alt='LinkedIn logo' />
              </Link>
              <Link to={pathToDashboard}>
                <img src={GitLogo} alt='Git logo' />
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottomText}>
        <img src={CLogo} alt='Copyright sign' />
        <span>SYNERGY, 2021. ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
};

export default Footer;