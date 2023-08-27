import React from 'react';
import styles from './About.module.css';
import aboutImage from '../../assets/images/aboutImage.png';
import rightArrow from '../../assets/icons/rightArrow.svg';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.content}>
                <div className={styles.title}>
                    About Us
                </div>
                <div className={styles.subtitle}>
                    Codey is a Global Community for Youth Coders!
                </div>
                <div className={styles.description}>
                    Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products. Start selling the right products to the customer base that you know best. We connect you to inventory, so you can focus on creating a catalog of profitable products for your online store.
                    <br />
                    <br />
                    Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products. Start selling the right products to the customer base that you know best. We connect you to inventory, so you can focus on creating a catalog of profitable products for your online store.
                </div>
                <button className={styles.button}>
                    <div className={styles.buttonText}>
                        Join Us
                    </div>
                    <div className={styles.buttonIcon}>
                        <img src={rightArrow} alt="rightArrow" />
                    </div>
                </button>
            </div>
            <div className={styles.image}>
                <img src={aboutImage} alt="aboutImage" />
            </div>
        </div>
    )
}

export default About
