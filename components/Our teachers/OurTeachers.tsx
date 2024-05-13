import styles from "./teachers.module.scss";
import { getTeachers } from "@/sanity/sanity.query";

import Image from "next/image";
import { Teachers as TeachersType } from "@/Types/Teachers";
import Link from "next/dist/client/link";
import { revalidateTag } from "next/cache";

interface TeachersTypeProps {
  data: TeachersType[]; // Accetta i dati come prop
}

export default function OurTeachers({ data }: TeachersTypeProps) {
  revalidateTag("collection");


  return (
    <main className={styles.mainContainer}>
      <section className={styles.coursesTextContainer}>
 
        <span className={styles.square3}></span>
        <span className={styles.square4}></span>

        <div className={styles.courseCardsBox}>
          {data &&
           data.map((teacher, index) => (
              <div key={teacher._id} className={`${styles.cardContainer} ${styles[`cardContainer${index}`]}`}>
                <div className={styles.cardImageContainer}>
                  <Image
                    className={styles.cardImage}
                    src={teacher.idPhoto}
                    alt={teacher.alt}
                    width={500}
                    height={300}
                  />

                  <div className={styles.courseLevelContainer}>
                    <p className={styles.courseLevel}>
                      {teacher.infoParagraph}
                    </p>
                  </div>
                  <div className={styles.cardNameContainer}>
                    <p className={styles.cardName}>{teacher.role}</p>
                  </div>
                </div>

                <Link href={`/`} className={styles.detailsLink}>
                  Details
                </Link>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
