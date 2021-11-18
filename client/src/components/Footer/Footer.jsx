import React from 'react';
import styles from './footer.module.css';
import logo_footer from './images/Logo_footer.svg';
import facebook from './images/facebook.svg';
import linkedIn from './images/linkedIn.svg';
import github from './images/github.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <section className={styles.logo_block}>
                    <img src={logo_footer} alt="logo"/>
                    <h4>SYNERGY | CRM</h4>
                    <p>Project Manager</p>
                </section>
                <section>
                    <h5>Support</h5>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Support Request</li>
                    </ul>
                </section>
                <section>
                    <h5>About</h5>
                    <ul>
                        <li>Our Projects</li>
                        <li>FAQ</li>
                        <li>Support Request</li>
                    </ul>
                </section>
                <section>
                    <h5>Social Links</h5>
                    <ul className={styles.social}>
                        <li><a href="/" target="_blank"><img src={facebook} alt="facebook"/></a></li>
                        <li><a href="/" target="_blank"><img src={linkedIn} alt="linkedIn"/></a></li>
                        <li><a href="/" target="_blank"><img src={github} alt="github"/></a></li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}

export default Footer