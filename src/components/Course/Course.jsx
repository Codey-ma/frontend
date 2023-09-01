import { useEffect } from "react";
import { course } from "./data";
import styles from "./Course.module.css";
import logo from "../../assets/logo.svg";
import thumbnail from "../../assets/images/courseThumbnail.png";
import avatar from "../../assets/images/edu1.png";

const Course = () => {
  useEffect(() => {
    document.title = "Codey - Intro to webdev";
  });

  return (
    <div className={styles.course}>
      <div className={styles.course__title}>Start learning with us</div>
      <div className={styles.course__subtitle}>
        Here you can learn about HTML, CSS, JavaScript and more!
      </div>
      <div className={styles.course__container}>
        <div className={styles.course__content}>
          <div className={styles.course__summary}>
            <img
              src={thumbnail}
              alt="Course thumbnail"
              className={styles.course__thumbnail}
            />
            <div className={styles.course__summary__body}>
              <h3>Description</h3>
              <p>
                Please add you content here. Keep it short and simple. And smile
                :)
              </p>
              <ul>
                <li>3 hours of learning</li>
                <li>Beginner friendly</li>
                <li>Project Included</li>
              </ul>
            </div>
          </div>
          <div className={styles.course__modules__title}>Course modules: </div>
          {course.modules.map((m) => (
            <div key={m.id} className={styles.course__module}>
              <div className={styles.module__body}>
                <img
                  src={m.thumbnail}
                  alt={`${m.title} module thumbnail`}
                  height={80}
                />
                <div>
                  <div className={styles.module__title}>{`Part ${m.id + 1} - ${
                    m.title
                  }`}</div>
                  <div className={styles.module__description}>
                    {m.description}
                  </div>
                </div>
              </div>
              <button className={styles.module__start__button}>Start</button>
            </div>
          ))}
        </div>
        <div className={styles.course__sidebar}>
          <div className={styles.course__summary}>
            <section>
              <h2>Course name xyz</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <h4>Benefits !</h4>
              <ul>
                <li>3 hours of learning</li>
                <li>Beginner friendly</li>
                <li>Project is included</li>
                <li>Project is included</li>
                <li>Project is included</li>
              </ul>
            </section>
            <hr className={styles.course__divider} />
            <section>
              <div className={styles.course__flex}>
                <img src={logo} width={32} />
                <div>
                  <div className={styles.course__published}>Published By</div>
                  <div className={styles.course__publisher}>Codey</div>
                </div>
              </div>
            </section>
          </div>
          <button className={styles.course__add__btn}>+ Add To List</button>
          <div className={styles.course__edu}>
            <h3>Educator : </h3>
            <div className={styles.course__flex}>
              <img src={avatar} />
              <p>Dannette P. Cervantes</p>
            </div>
          </div>
          <div className={styles.course__edu}>
            <h3>Head Educator : </h3>
            <div className={styles.course__flex}>
              <img src={avatar} />
              <p>Dannette P. Cervantes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
