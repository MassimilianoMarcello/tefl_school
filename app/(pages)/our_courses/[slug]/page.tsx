
import { getCourses } from "@/sanity/sanity.query";
// import Course from '@/Types/Course';
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import styles from '../singleCourse.module.scss';


type Props = {
  params: { slug: string };
};

export default async function Courses({ params }: Props) {
  const course = await getCourses(params.slug);

  return (
   <>
   <div className={styles.titleContainer}>
   <h1>{course.name}</h1>
   <Image className={styles.ImageSingleCourse} src={course.photo} alt={course.name}  sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',}}
        width={1250} height={600} 
/>

   </div>


   

   </>
  )
}