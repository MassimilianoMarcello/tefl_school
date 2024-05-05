import { Course } from "@/Types/Course";
import Image from "next/image";
import styles from "./D_CoursesPreview.module.scss";
import Link from 'next/link'
import { format } from 'date-fns';

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
  <div className={styles.coursesColumn}>
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

            {/* text sotto */}
            <div className={styles.cardTextContainer}>

              {/* description course */}
              <p className={styles.cardDescription}>{course.description}</p>

              {/* dates :start and end course */}
           
              <p className={styles.courseDetail}>
              from  {format(new Date(course.startDate), 'dd MMMM yyyy')} to {format(new Date(course.endDate), 'dd MMMM yyyy')}
              </p>

                {/* weeks to finish the course */}
                 <p className={styles.courseWeeks}> completion time:
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
           
            <Link href={`/our_courses/${course.slug}`} className={styles.detailsLink}>Details</Link>        

 
        
           
 
          </div>
          
        ))}


      </section>
  </div>
  <div className={styles.stickyComponent}>
  <div>
   sticky container
  </div>
  </div>
</main>


     

  );
}
