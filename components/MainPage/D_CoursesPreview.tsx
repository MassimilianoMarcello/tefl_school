import { Course } from "@/Types/Course";
import Image from "next/image";
import styles from "./D_CoursesPreview.module.scss";
import Link from 'next/link'

interface CourseProps {
  data: Course[]; // Accetta i dati come prop
}

export default function D_CoursesPreview({ data }: CourseProps) {
  // Ordina i dati in base all'indice inverso per ottenere gli ultimi progetti
  const sortedData = data.sort((a, b) => data.indexOf(b) - data.indexOf(a));
  // Prendi solo gli ultimi 4 progetti
  const latestProjects = sortedData.slice(0, 4);

  return (
    <main className={styles.mainContainer}>
      <section className={styles.coursesSection}>
        {/* Itera solo sugli ultimi 4 progetti */}
        {latestProjects.map((course) => (
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
            <div className={styles.cardTextContainer}>
              <p className={styles.cardDescription}>{course.description}</p>
              <div className={styles.courseDetails}>
                <p className={styles.courseDetail}>
                  {course.startDate} - {course.endDate}
                </p>
                <p className={styles.courseDetail}>
                  {course.completionTimeWeeks} weeks
                </p>

                <div className={styles.cardHours}>
                  <p className={styles.cardHoursText}>{course.hours} </p>
                  <span className={styles.hourSpan}>hours</span> <br />
                  <span> course</span>
                </div>
                <p className={styles.courseDetail}>Price: {course.price}</p>
              </div>
            </div>
            <div>
            <Link href={`/our_courses/${course.slug}`} className={styles.detailsLink}>Details</Link>
 
            </div>
           
 
          </div>
        ))}


      </section>
    </main>
  );
}
