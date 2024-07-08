import styles from "./TopPageOurCourses.module.scss";
import { getCommonTopPage } from "@/sanity/sanity.query";
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import { CommonTop as CommonTopType } from "@/Types/CommonTop";
import { revalidateTag } from "next/cache";
import OurCoursesExport from "./OurCoursesExport";

interface CommonTopTypeProps {
  data: CommonTopType[]; // Accetta i dati come prop
}

export default function TopPageAboutUs({ data }: CommonTopTypeProps) {
  revalidateTag("collection");

  // Filtra i dati per trovare solo l'elemento desiderato
  const specificItem = data.find(
    (item) => item._id === "97d80791-1917-490a-8aaa-a922d5427434"
  );

  if (!specificItem) {
    return null; // Se l'elemento specifico non esiste, ritorna null o gestisci di conseguenza
  }

  const imageUrl = urlFor(specificItem.backgroundImage).url();

  const { title, subtitle } = specificItem;

  return (
    <div>
      <div className={styles.topMainContainerOurCourses}>
        {/* Utilizza l'URL dell'immagine nell'elemento Image */}
        <section className={styles.coursesTextContainer}>
          <Image
            className={styles.imageBackgroundCourses}
            src={imageUrl}
            // src={imageUrl}
            alt={title}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={1000}
            height={400}
          />
          <h1 className={styles.coursesTitle}>
            About Our TEFL Courses In Tuscany, Italy
          </h1>
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
            employability. To achieve this, we've forged partnerships with
            several educational institutions across Firenze, enabling us to
            offer a wide array of TEFL courses.
          </p>
          <span className={styles.square1}></span>
          <span className={styles.square2}></span>
          <span className={styles.square3}></span>
          <span className={styles.square4}></span>

          {/* <div className={styles.titleBox}>

<h1>Specialize in TESOL with TEFL Tuscany in beautiful Italy </h1>
      <p>Our extensive TEFL courses are tailored to empower both seasoned teachers and those who are just starting out, whether you're aiming to teach remotely or set off on a globetrotting educational expedition.</p>  


</div> */}
          <div className={styles.coursesListCards}>
            <OurCoursesExport />
          </div>
        </section>
      </div>
    </div>
  );
}
