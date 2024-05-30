import React from 'react'
import s from "../../page.module.scss";
import ConsultationSessionsData from '@/components/ConsultationSessions/ConsultationSessionsData';
import OurCoursesExport from '@/components/OurCourses/OurCoursesExport';

const ConsultationSessions = () => {
  return (
   <>
      <div>
   <ConsultationSessionsData/>

    <h2>related products</h2>
    <OurCoursesExport/>
    

   </div>
   </>
  )
}

export default ConsultationSessions