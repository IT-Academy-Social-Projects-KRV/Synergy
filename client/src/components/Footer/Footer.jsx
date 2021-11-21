import React from 'react';
import styles from './Footer.module.scss';
import SynergyLogo from '../../assets/images/MainPageImages/Logo.png';
import FacebookLogo from '../../assets/images/MainPageImages/Facebook.png';
import LinkedInkLogo from '../../assets/images/MainPageImages/LinkedIn.png';
import GitLogo from '../../assets/images/MainPageImages/Git.png';
import CLogo from '../../assets/images/MainPageImages/C.png';

const Footer = () => {
  return (
    <footer>
      <div className={styles.FooterContent}>
        <div>
          <img src={SynergyLogo} alt="third" />
          <p className={styles.SynergyCRM}>SYNERGY | CRM</p>
          <p className={styles.ProjectManager}>PROJECT MANAGER</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Support</th>
              <th>About</th>
              <th>Social Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="/dashboard">Contact Us</a>
              </td>
              <td>
                <a href="/dashboard">Our Projects</a>
              </td>
              <td rowSpan="3">
                <a href="/dashboard">
                  <img src={FacebookLogo} alt="fifth" />
                </a>
                <a href="/dashboard">
                  <img src={LinkedInkLogo} alt="sixth" />
                </a>
                <a href="/dashboard">
                  <img src={GitLogo} alt="seventh" />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/dashboard">FAQ</a>
              </td>
              <td>
                <a href="/dashboard">FAQ</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="/dashboard">Support Request</a>
              </td>
              <td>
                <a href="/dashboard">Support Request</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.bottomText}>
        <img src={CLogo} alt="fourth" />
        <span>SYNERGY, 2021. ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
};

export default Footer;
