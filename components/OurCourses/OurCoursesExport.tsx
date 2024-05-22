import React from "react";
import { getCourse } from "@/sanity/sanity.query";
import { format } from "date-fns";
import Image from "next/image";
import { Course as CourseType } from "@/Types/Course";
import Link from "next/dist/client/link";
import styles from "./OurCourses.module.scss";
import { revalidateTag } from 'next/cache'

export default async function OurCoursesExport() {
  revalidateTag('collection')
  const courseCard: CourseType[] = await getCourse();
  const imageBackgorund = "/assets/girl_right_space 3.webp";
  return (
    <main className={styles.mainContainer}>
      <Image
        className={styles.imageBackground}
        src={imageBackgorund}
        alt={"girl background"}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={1250}
        height={600}
      />
      <section className={styles.coursesTextContainer}>
        <h1     className={styles.coursesTitle}>About Our TEFL Courses In Tuscany, Italy</h1>
        <p className={styles.coursesIntroductionOne}>
          Our aspiring English as a Foreign Language TEFL teachers hail from
          diverse professional backgrounds, each with their unique needs and
          aspirations. To accommodate this diversity, our TEFL programs in
          Tuscany, Italy, are tailored to be beginner-friendly, welcoming
          individuals with minimal or no prior teaching experience. </p>
          <p className={styles.coursesIntroductionTwo}>We
          prioritize intimate learning environments, limiting class sizes to a
          maximum of 12 trainees. This ensures personalized attention and
          guidance for everyone. At TEFL Tuscany learning center, we emphasize
          practical teaching experience, offering a minimum of 7 hours of
          in-person teaching practice with real English learners. Our objective
          is to address the developmental requirements of our trainees
          comprehensively, enhancing their teaching abilities and employability.
          To achieve this, we've forged partnerships with several educational
          institutions across Firenze, enabling us to offer a wide array of TEFL
          courses.
        </p>
              <span className={styles.square1}></span>
              <span className={styles.square2}></span>
               <span className={styles.square3}></span>
               <span className={styles.square4}></span>

        <div className={styles.titleBox}>

<h1>Elevate your teaching career with TEFL Tuscany learning center </h1>
      <p>Our extensive TEFL courses are tailored to empower instructors from various walks of life, whether you're aiming to teach remotely or set off on a globetrotting educational expedition.</p>  


</div>
<div className={styles.courseCardsBox}>
{courseCard &&
        courseCard.map((course) => (
          <div key={course._id} className={styles.cardContainer}>
            <div className={styles.cardImageContainer}>
              <Image
                className={styles.cardImage}
                src={course.photo}
                alt={course.name}
                width={500}
                height={300}
              />

              <div className={styles.courseLevelContainer}>
                <p className={styles.courseLevel}>{course.level}</p>
              </div>
              <div className={styles.cardNameContainer}>
                <p className={styles.cardName}>{course.name}</p>
              </div>
            </div>

            {/* text sotto */}
            <div className={styles.cardTextContainer}>
              {/* description course */}
              <p className={styles.cardDescription}>{course.description}</p>

              {/* dates :start and end course */}

              <p className={styles.courseDetail}>
                from {format(new Date(course.startDate), "dd MMMM yyyy")} to{" "}
                {format(new Date(course.endDate), "dd MMMM yyyy")}
              </p>

              {/* weeks to finish the course */}
              <p className={styles.courseWeeks}>
                {" "}
                completion time:
                {course.completionTimeWeeks} weeks
              </p>
              {/* card total hours course  */}
              <div className={styles.cardHours}>
                <p className={styles.cardHoursText}>{course.hours} </p>
                <span className={styles.hourSpan}>hours</span> <br />
                <span className={styles.hourSpanTwo}> course</span>
              </div>

              {/* course price */}
              <p className={styles.coursePrice}>Price: {course.price}</p>
            </div>

            <Link
              href={`/our_courses/${course.slug}`}
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
