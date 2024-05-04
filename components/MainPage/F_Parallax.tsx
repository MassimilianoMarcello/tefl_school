import Link from "next/link";
import styles from "./F_Parallax.module.scss";

const F_Parallax = () => {
  return (
    <>
      <section className={styles.parallax1}>
        <div className={styles.blueBack}>
          <div className={styles.parallax1Inner}>
            <h1>
            From 2006, our school in Tuscany, located in the heart of Florence, has served as a hub for aspiring TEFL teachers.
            </h1>

            <p>
              Studying in a school located in Tuscany, particularly in Florence,
              is an unparalleled experience that seamlessly blends academic
              rigor with cultural immersion. Tuscany, renowned for its
              breathtaking landscapes, rich history, and artistic heritage,
              serves as an inspiring backdrop for learning. Florence, the heart
              of Tuscany, is a city where every cobblestone street whispers
              tales of the Renaissance, offering students a unique opportunity
              to walk in the footsteps of history's greatest minds.{" "}
            </p>

            <h2>Ready to become a part of Tuscany Tefl Learning Center?</h2>
            <a href="./">apply now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default F_Parallax;
