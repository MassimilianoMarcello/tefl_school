import { getCourses } from "@/sanity/sanity.query";
// import Course from '@/Types/Course';
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import styles from "../singleCourse.module.scss";
import { format } from "date-fns";

type Props = {
  params: { slug: string };
};

export default async function Courses({ params }: Props) {
  const course = await getCourses(params.slug);

  return (
    <>
      <div className={styles.titleContainer}>
        <h1>{course.name}</h1>
        <Image
          className={styles.ImageSingleCourse}
          src={course.photo}
          alt={course.name}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={1250}
          height={600}
        />
        <div className={styles.courseAllDetailsText} >
        <div className={styles.courseLevelContainer}>
          <p className={styles.courseLevel}>{course.level}</p>
        </div>
        <div className={styles.cardNameContainer}>
          <p className={styles.cardName}>{course.name}</p>
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
      </div>
      </div>
    </>
  );
}
