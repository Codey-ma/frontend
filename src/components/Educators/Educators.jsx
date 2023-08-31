import React from 'react'
import styles from './Educators.module.css'
import educators from '../../utils/educators'

const Educators = () => {
  return (
    <div className={styles.educators}>
      <div className={styles.educators__title}>
        Our Top Educators!
      </div>
      <div className={styles.educators__container}>
        {educators.map((educator) => {
          return (
            <div className={styles.educators__card} key={educator.id}>
              <div className={styles.educators__card__image}>
                <img src={educator.image} alt={educator.name} />
              </div>
              <div className={styles.educators__card__name}>
                {educator.name}
              </div>
              <div className={styles.educators__card__title}>
                {educator.title}
              </div>
            </div>
          )})}
      </div>
      <div className={styles.educators__button}>
        <button className={styles.educators__button__btn}>Become An Instructor</button>
      </div>
    </div>
  )
}

export default Educators
