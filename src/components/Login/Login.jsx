import React from 'react'
import styles from '../Auth/Auth.module.css'
import logo from '../../assets/logo.svg'
import auth from '../../assets/images/auth.png'
import facebookC from '../../assets/images/facebookC.png'
import googleC from '../../assets/images/googleC.png'
import appleC from '../../assets/images/appleC.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.login}>
      <div className={styles.icon} onClick={() => navigate('/')}>
        <img src={logo} alt="logo" />
        Codey
      </div>
      <div className={styles.auth__container}>
        <div className={styles.auth__container__left}>
          <div className={styles.auth__container__left__heading}>
            Sign in to
          </div>
          <div className={styles.auth__container__left__subheading}>
            Your Account
          </div>
          <div className={styles.auth__container__left__content}>
            <div className={styles.auth__container__left__content__description}>
              If you don’t have an account register <br />
              You can <a href="/auth/register"> Register here ! </a>
            </div>
            <div className={styles.auth__container__left__content__image}>
              <img src={auth} alt="auth" />
            </div>
          </div>
        </div>
        <div className={styles.auth__container__right}>
          <div className={styles.auth__container__right__heading}>
            Sign in
          </div>
          <div className={styles.auth__container__right__form}>
            <div className={styles.auth__container__right__form__input}>
              <input type="text" placeholder="Enter email or user name" />
            </div>
            <div className={styles.auth__container__right__form__input}>
              <input type="password" placeholder="Password" />
            </div>
            <div className={styles.auth__container__right__forgot}>
              <a href="/auth/forgot">Forgot Password ?</a>
            </div>
            <div className={styles.auth__container__right__button}>
              <button>Login</button>
            </div>
          </div>
          <div className={styles.auth__container__right__or}>
            <div className={styles.auth__container__right__or__line}>
              or continue with
            </div>
            <div className={styles.auth__container__right__or__icons}>
              <div className={styles.auth__container__right__or__icons__icon}>
                <img src={facebookC} alt="facebook" />
              </div>
              <div className={styles.auth__container__right__or__icons__icon}>
                <img src={googleC} alt="google" />
              </div>
              <div className={styles.auth__container__right__or__icons__icon}>
                <img src={appleC} alt="apple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
