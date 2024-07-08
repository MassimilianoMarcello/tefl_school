// import React from 'react'
// import s from "../../page.module.scss";
// import OurCourses from '@/components/OurCourses/OurCourses';

// const CoursesList = () => {
//   return (
//     <div className={s.samplePage}>
//       <OurCourses/>
//     </div>
//   )
// }

// export default OurCourses

'use server'

import { getCommonTopPage, } from "@/sanity/sanity.query";

import TopPageOurCourses from '@/components/OurCourses/TopPageOurCourses';
import { revalidateTag } from 'next/cache'
import OurTeachers from "@/components/Our teachers/OurTeachers";



const OurCoursesWrapper = async () => {
  revalidateTag('collection')
  try {
    const [
      // aboutUsData,
      commonTopPageData,
      // teachersData,
  
    ] = await Promise.all([
      // getAboutUs(0),
      getCommonTopPage(),
      // getTeachers(),

    ]);

    // Verifica che entrambi i set di dati non siano nulli
    if (
    
      !commonTopPageData
     

    ) {
      console.error(
        "Errore nel recupero dei dati: uno o entrambi i set di dati sono nulli"
      );
      return null;
    }

    return (
      <>
        {/* Passa i dati come props ai componenti figlio */}
        <TopPageOurCourses data={commonTopPageData  } />
       {/* <AboutUs data={aboutUsData} pageType={""} pageIndex={0} />
       <OurTeachers data={teachersData}/> */}
   
   
        {/* <CommonTopPage data={commonTopPageData } />  */}
 
       

      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default OurCoursesWrapper;