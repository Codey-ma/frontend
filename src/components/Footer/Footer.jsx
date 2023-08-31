import React from 'react'
import styles from './footer.module.css'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import pinterest from '../../assets/icons/pinterest.svg'
import logo from '../../assets/logo.svg'
import rightArrow from '../../assets/icons/rightArrow.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
          <div className={styles.footerTop__subTitle}>
            Join Us
          </div>
          <div className={styles.footerTop__title}>
            Join Our Community To Have access to 100+ Free Resources & Events!
          </div>
          <div className={styles.footerTop__button}>
            <button className="button-main">
              <span className="button-main-text">Join Our Discord</span>
              <span className="button-main-icon">
                <img src={rightArrow} alt="login" />
              </span>
            </button>
          </div>
      </div>
      <div className={styles.footerMain}>
        <div className={styles.footerMain__content}>
          <div className={styles.logo}>
            <div className={styles.logo__icon}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.logoText}>Codey</div>
          </div>
          <div className={styles.links}>
            <div className={styles.link}>
              <a href="/">Home</a>
            </div>
            <div className={styles.link}>
              <a href="/events">Events</a>
            </div>
            <div className={styles.link}>
              <a href="/team">Team</a>
            </div>
            <div className={styles.link}>
              <a href="/courses">Courses</a>
            </div>
            <div className={styles.link}>
              <a href="/blogs">Blogs</a>
            </div>
          </div>
          <div className={styles.socials}>
            <div className={styles.social}>
              <img src={facebook} alt="facebook" />
            </div>
            <div className={styles.social}>
              <img src={instagram} alt="instagram" />
            </div>
            <div className={styles.social}>
              <img src={twitter} alt="twitter" />
            </div>
            <div className={styles.social}>
              <img src={pinterest} alt="pinterest" />
            </div>
          </div>
        </div>
        <div className={styles.footerMain__hr}></div>
        <div className={styles.footerMain__copyRight}>
          Copyright © 2023 Codey.tech
        </div>
      </div>
    </div>
  )
}

export default Footer
