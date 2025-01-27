import styles from "./TextFotTopPage.module.scss";

export default function TextForTopPAge() {
  return (
    <div className={styles.topMain}>
              <span className={styles.square1}></span>
              <span className={styles.square2}></span>
      <div className={styles.topMainContainerOurCourses}>
        <section className={styles.coursesTextContainer}>
          <p className={styles.coursesIntroductionOne}>
            Our aspiring English as a Foreign Language TEFL teachers hail from
            diverse professional backgrounds, each with their unique needs and
            aspirations. To accommodate this diversity, our TEFL programs in
            Tuscany, Italy, are tailored to be beginner-friendly, welcoming
            individuals with minimal or no prior teaching experience.{" "}
          </p>
          <p className={styles.coursesIntroductionTwo}>
            We prioritize intimate learning environments, limiting class sizes
            to a maximum of 12 trainees. This ensures personalized attention and
            guidance for everyone. At TEFL Tuscany learning center, we emphasize
            practical teaching experience, offering a minimum of 7 hours of
            in-person teaching practice with real English learners. Our
            objective is to address the developmental requirements of our
            trainees comprehensively, enhancing their teaching abilities and
            employability. To achieve this, we have forged partnerships with
            several educational institutions across Firenze, enabling us to
            offer a wide array of TEFL courses.
          </p>
    
          <span className={styles.square3}></span>
          <span className={styles.square4}></span>

          <div className={styles.coursesListCards}></div>
        </section>
      </div>
    </div>
  );
}
