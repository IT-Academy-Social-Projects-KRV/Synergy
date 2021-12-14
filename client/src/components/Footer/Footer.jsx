import SynergyLogo from '../../assets/images/MainPageImages/Logo.png';
import FacebookLogo from '../../assets/images/MainPageImages/Facebook.png';
import LinkedInLogo from '../../assets/images/MainPageImages/LinkedIn.png';
import GitLogo from '../../assets/images/MainPageImages/Git.png';
import CLogo from '../../assets/images/MainPageImages/C.png';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer data-testid='footerBlock' className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.logoSynergy}>
          <img src={SynergyLogo} alt='Synergy logo'/>
          <p className={styles.synergyCRM}>
            Synergy | CRM
          </p>
          <p className={styles.projectManager}>
            Project manager
          </p>
        </div>
        <div className={styles.linksSupport}>
          <div>
            <p>Support</p>
            <a href='/login'>Contact Us</a>
            <a href='/login'>FAQ</a>
            <a href='/login'>Support Request</a>
          </div>
          <div>
            <p>About</p>
            <a href='/login'>Our Projects</a>
            <a href='/login'>FAQ</a>
            <a href='/login'>Support Request</a>
          </div>
          <div>
            <p>Social Links</p>
            <p className={styles.imgSocialMedia}>
              <a href='/login'>
                <img src={FacebookLogo} alt='Facebook logo'/>
              </a>
              <a href='/login'>
                <img src={LinkedInLogo} alt='LinkedIn logo'/>
              </a>
              <a href='/login'>
                <img src={GitLogo} alt='Git logo'/>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottomText}>
        <img src={CLogo} alt='Copyright sign'/>
        <span>SYNERGY, 2021. ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
};

export default Footer;