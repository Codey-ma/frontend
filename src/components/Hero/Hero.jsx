import React from 'react';
import styles from './Hero.module.css';
import heroImage from '../../assets/images/heroImage.png';
import searchIcon from '../../assets/icons/searchBlack.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';
import rightArrowBlack from '../../assets/icons/rightArrowBlack.svg';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__content}>
                <div className={styles.hero__title}>
                    A Place For
                    <span>Youth</span>
                    <br/>Coders
                </div>
                <div className={styles.hero__description}>
                    Grouping youth from all over the world to <b>Network</b> with each other,
                    <b>Learn</b> together and <b>Participate</b> in Events in-person in Morocco,
                    Outside or even online!
                </div>
                <div className={styles.hero__buttons}>
                    <button className={styles.hero__button}>
                        <div className={styles.hero__button__text}>
                            Register
                        </div>
                        <div className={styles.hero__button__icon}>
                            <img src={rightArrow} alt="arrow-right" />
                        </div>
                    </button>
                    <button className={styles.hero__button__secondary}>
                        <div className={styles.hero__button__text}>
                            Login
                        </div>
                        <div className={styles.hero__button__icon}>
                            <img src={rightArrowBlack} alt="arrow-right" />
                        </div>
                    </button>
                </div>
                <div className={styles.hero__search__wrapper}>
                    <div className={styles.hero__search}>
                        <select className={styles.hero__search__select} placeholder="Select Course">
                            <option value="1">Test</option>
                            <option value="2">Test</option>
                            <option value="3">Test</option>
                        </select>
                        <div className={styles.hero__search__divider}></div>
                        <input className={styles.hero__search__input} type="text" placeholder="Search" />
                        <button className={styles.hero__search__button}>
                            <div className={styles.hero__search__button__text}>
                                Search
                            </div>
                            <div className={styles.hero__search__button__icon}>
                                <img src={searchIcon} alt="search" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.hero__image}>
                <img src={heroImage} alt="search" />
            </div>
        </div>
    )
}

export default Hero
