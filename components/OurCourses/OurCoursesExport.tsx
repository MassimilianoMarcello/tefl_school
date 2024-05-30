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

  return (
    <main className={styles.mainContainer}>
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
    </main>
  );
}
