import PropTypes from "prop-types";
import styles from "./Card.module.css";
import starIcon from "../../../assets/icons/starIcon.svg";
import starIconFilled from "../../../assets/icons/starIconFilled.svg";
import time from "../../../assets/icons/time.svg";
import video from "../../../assets/icons/video.svg";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <img
        src={props.imageUrl}
        alt="Course banner"
        className={styles.card__banner}
      />
      <div className={styles.card__subheader}>
        <div className={styles.card__category}>{props.catergory}</div>
        <div className={styles.card__flex}>
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={index < props.rating ? starIconFilled : starIcon}
              height={20}
              className={styles.card__star}
              alt="Rating star"
            />
          ))}
        </div>
      </div>
      <div className={styles.card__header}>{props.title}</div>
      <hr className={styles.card__divider} />
      <div className={styles.card__subheader}>
        <div className={styles.card__flex}>
          <img src={time} height={22}></img>
          <div className={styles.card__detail}>{props.duration}</div>
        </div>
        <div className={styles.card__flex}>
          <img src={video} height={26}></img>
          <div className={styles.card__detail}>{props.courseCount} Courses</div>
        </div>
      </div>
      <div className={styles.card__avatar__container}>
        <div className={styles.card__flex}>
          <img src={props.avatarUrl} className={styles.card__avatar}></img>
          <div className={styles.card__author}>{props.author}</div>
        </div>
        <div className={styles.card__price}>{props.price}</div>
      </div>
      <button
        className={styles.card__button}
        onClick={() => {
          navigate(`/courses/${props.id}`);
        }}
      >
        Join Course
      </button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  catergory: PropTypes.string,
  rating: PropTypes.number,
  duration: PropTypes.string,
  courseCount: PropTypes.number,
  author: PropTypes.string,
  price: PropTypes.string,
  imageUrl: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default Card;
