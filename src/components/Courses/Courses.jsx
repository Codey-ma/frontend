/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "./Card/Card";
import styles from "./Courses.module.css";
import Slider from "react-slick";
import { courses } from "./data";
import { useEffect } from "react";
import nextArrow from "../../assets/icons/nextArrow.svg";
import prevArrow from "../../assets/icons/prevArrow.svg";
import searchIcon from "../../assets/icons/searchBlack.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="slick-prev slick-arrow"
    style={{ top: "50%", left: "-50px", transform: "translateY(-50%)" }}
    type="button"
  >
    <img src={prevArrow} alt="prev" />
  </button>
);

const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="slick-next slick-arrow"
    style={{ top: "50%", right: "0px", transform: "translateY(-50%)" }}
    type="button"
  >
    <img src={nextArrow} alt="next" />
  </button>
);

const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  const slideCount = Math.ceil(courses.length / 6);

  useEffect(() => {
    document.title = "Codey - Courses";
  });

  return (
    <div className={styles.courses}>
      <div className={styles.courses__title}>
        <span>Our</span> Courses!
      </div>
      <div className={styles.courses__subtitle}>
        Courses that cover every topic in coding!
      </div>
      <div className={styles.courses__search}>
        <select
          className={styles.courses__search__select}
          placeholder="Select Category"
        >
          <option value="1">Test</option>
          <option value="2">Test</option>
          <option value="3">Test</option>
        </select>
        <div className={styles.courses__search__divider}></div>
        <input
          className={styles.courses__search__input}
          type="text"
          placeholder="Search"
        />
        <button className={styles.courses__search__button}>
          <div className={styles.courses__search__button__text}>
            Search for course
          </div>
          <div className={styles.courses__search__button__icon}>
            <img src={searchIcon} alt="search" />
          </div>
        </button>
      </div>
      <Slider {...settings}>
        {Array.from({ length: slideCount }).map((_, index) => (
          <div key={index}>
            <div className={styles.courses__grid}>
              {courses.slice(index * 6, (index + 1) * 6).map((c) => (
                <Card
                  key={c.id}
                  id={c.id}
                  title={c.title}
                  catergory={c.catergory}
                  rating={c.rating}
                  duration={c.duration}
                  courseCount={c.courseCount}
                  author={c.author}
                  price={c.price}
                  imageUrl={c.imageUrl}
                  avatarUrl={c.avatarUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Courses;
