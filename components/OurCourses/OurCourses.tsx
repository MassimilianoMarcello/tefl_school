import React from 'react'
import { getCourse } from "@/sanity/sanity.query";
import Image from "next/image";
import { Course as CourseType } from '@/Types/Course';

export default async function OurCourses() {
    const courseCard: CourseType[] = await getCourse();
return(
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
    {courseCard &&
      courseCard.map((course) => (
        <div key={course._id}>
          <section className="gilandro">
            <div className="piloddo">
              <h1 className="cannizzu">
             {course.name}
              </h1>

              <div className="nenneddu">
              {course.description}
              </div>
            </div>

            <div className="gaglioffo">
              <div>
                <Image
                  className="cilandro"
                  src={course.photo}
                  width={400}
                  height={400}
                  quality={100}
                  alt={course.name}
                />

           
             
              
              </div>

         
     
              </div>
            </section>

            
          </div>
        ))}
    </main>
  );
}






