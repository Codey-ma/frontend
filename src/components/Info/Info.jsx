import React from 'react'
import styles from './Info.module.css'
import info1 from '../../assets/images/info1.png'
import info2 from '../../assets/images/info2.png'
import info3 from '../../assets/images/info3.png'

const Info = () => {
    return (
        <div className={styles.infoWrapper}>
            <div className={styles.info}>
                <div className={styles.info__item}>
                    <div className={styles.info__item__img}>
                        <img src={info1} alt="info1" />
                    </div>
                    <div className={styles.info__item__text}>
                        Learn The Latest Skills
                    </div>
                </div>
                <div className={styles.info__item}>
                    <div className={styles.info__item__img}>
                        <img src={info2} alt="info2" />
                    </div>
                    <div className={styles.info__item__text}>
                        Meet other Coders Like You!
                    </div>
                </div>
                <div className={styles.info__item}>
                    <div className={styles.info__item__img}>
                        <img src={info3} alt="info3" />
                    </div>
                    <div className={styles.info__item__text}>
                        Have access To Exciting  Events!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;
