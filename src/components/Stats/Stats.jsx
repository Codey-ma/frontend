import React from 'react';
import styles from './Stats.module.css';
import usersThree from '../../assets/icons/users-three.svg';
import users from '../../assets/icons/users.svg';
import videoCamera from '../../assets/icons/video-camera.svg';
import CountUp from 'react-countup';
const Stats = () => {
    return (
        <div className={styles.stats}>
            <div className={styles.stat}>
                <div className={styles.icon1}>
                    <img src={usersThree} alt="real-estate" />
                </div>
                <div className={styles.statText}>
                    <div> <CountUp end={20} />+</div>
                    <div>Staff</div>
                </div>
            </div>
            <div className={styles.stat}>
                <div className={styles.icon2}>
                    <img src={users} alt="real-estate" />
                </div>
                <div className={styles.statText}>
                    <div> <CountUp end={80} />+</div>
                    <div>Members</div>
                </div>
            </div>
            <div className={styles.stat}>
                <div className={styles.icon3}>
                    <img src={videoCamera} alt="real-estate" />
                </div>
                <div className={styles.statText}>
                    <div> <CountUp end={50} />+</div>
                    <div>Resources</div>
                </div>
            </div>

        </div>
    )
}

export default Stats
