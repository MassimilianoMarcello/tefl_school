// import Image from 'next/image';
import styles from "./teachers.module.scss";
// import {Teachers} from '@/Types/Teachers';
import { getTeachers } from "@/sanity/sanity.query";






import React from "react";


import Image from "next/image";
import { Teachers as TeachersType } from "@/Types/Teachers";
import Link from "next/dist/client/link";

import { revalidateTag } from 'next/cache'

export default async function OurTeachers() {
  revalidateTag('collection')
  const teacherCard: TeachersType[] = await getTeachers();

  return (
    <main className={styles.mainContainer}>
    
      <section className={styles.coursesTextContainer}>

              <span className={styles.square1}></span>
              <span className={styles.square2}></span>
               <span className={styles.square3}></span>
               <span className={styles.square4}></span>

      


<div className={styles.courseCardsBox}>
{teacherCard &&
        teacherCard.map((teacher) => (
          <div key={teacher._id} className={styles.cardContainer}>
            <div className={styles.cardImageContainer}>
              <Image
                className={styles.cardImage}
                src={teacher.idPhoto}
                alt={teacher.alt}
                width={500}
                height={300}
              />

              <div className={styles.courseLevelContainer}>
                <p className={styles.courseLevel}>{teacher.infoParagraph}</p>
              </div>
              <div className={styles.cardNameContainer}>
                <p className={styles.cardName}>{teacher.role}</p>
              </div>
            </div>


            <Link
              href={`/`}
              className={styles.detailsLink}
            >
              Details
            </Link>
          </div>
        ))}
</div>
      </section>
     
    </main>
  );
}
