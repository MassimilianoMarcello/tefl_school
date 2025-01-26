import styles from "./teachers.module.scss";
import { getTeachers,getCommonTopPage } from "@/sanity/sanity.query";
import { urlFor } from "@/sanity/sanity.client";

import Image from "next/image";
import TopPageTeachers from "@/common-components/topPage";
import { Teachers as TeachersType } from "@/Types/Teachers";
import Link from "next/dist/client/link";
import { revalidateTag } from "next/cache";
import ButtonAzure from "../Buttons/ButtonAzure";



export default async function OurTeachers() {
revalidateTag("collection");
  const dataTopPage = await getCommonTopPage();
  const data= await getTeachers();
  return (
    <>
    <TopPageTeachers
          data={dataTopPage}
          dynamicStyle="ourteachersContainer"
          id="d1b1177b-c086-4f38-86c6-ac32c794b342"
        />
    <main className={styles.mainContainer}>
      <section className={styles.coursesTextContainer}>
        <span className={styles.square3}></span>
        <span className={styles.square4}></span>

        <div className={styles.courseCardsBox}>
          {data &&
            data.map((teacher, index) => (
              <div
                key={teacher._id}
                className={`${styles.cardContainer} ${styles[`cardContainer${index}`]}`}
              >
                <div className={styles.cardImageContainer}>
                  {/* <Image
                    className={styles.cardImage}
                    src={teacher.idPhoto}
                    alt={teacher.alt}
                    width={500}
                    height={300}
                  /> */}
                  <Image
                    src={urlFor(teacher.idPhoto).width(300).height(300).url()}
                    width={200}
                    height={200}
                    alt={teacher.alt}
                    className={styles.cardImage}
                  />
                   <span className={styles.squareBoss}></span>
                   <span className={styles.squareBoss1}></span>
                   <span className={styles.squareBoss2}></span>
                   <span className={styles.squareBoss3}></span>


                  <div className={styles.courseLevelContainer}>
                    {/* <p className={styles.courseLevel}>
                      {teacher.infoParagraph}
                    </p> */}
                  </div>
                  <div className={styles.cardNameContainer}>
                    <h3 className={styles.cardName}>{teacher.name}</h3>
                    <p className={styles.cardRole}>{teacher.role}</p>
                  </div>
                </div>

                {/* <Link href={`/`} className={styles.detailsLink}>
                  Details
                </Link> */}
           
              
              </div>
            ))}
          
        </div>
        <div className={styles.buttonApplication}>
                <ButtonAzure text={"Join The Team"}/>
                <p>We’re always looking for talented teachers to join our team.</p>
                </div>
      </section>
    </main>
    </>
  );
}
