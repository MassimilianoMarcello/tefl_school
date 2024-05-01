import React from 'react'
import { Course } from '@/Types/Course';
import Image from "next/image";



interface CourseProps {
    data: Course[]; // Accetta i dati come prop
  }

export default function D_CoursesPreview({ data }: CourseProps) {
    return (
      <main className="pannarru">
        <section className="busicco">
          {/* Verifica se data è definito prima di eseguire l'iterazione */}
          {data && data.map((course) => (
            <div key={course._id} className="gavini">
              <h1 className="alicion">{course.name}</h1>
              <p className="tamarindo">{course.description}</p>
              <Image src={course.photo} alt={course.name} width={300} height={300} />
              <h1 className="alicion">{course.completionTimeWeeks}</h1>
              <h1 className="alicion">{course.hours}</h1>
              <h1 className="alicion">{course.startDate}</h1>
              <h1 className="alicion">{course.endDate}</h1>
              <h1 className="alicion">{course.price}</h1>
              <h1 className="alicion">{course.level}</h1>
            </div>
          ))}
        </section>
      </main>
    );
  }