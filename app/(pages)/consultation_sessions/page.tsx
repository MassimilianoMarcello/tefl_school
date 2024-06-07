'use server'

import { getTeachers, getCommonTopPage } from "@/sanity/sanity.query";
import OurTeachers from "@/components/Our teachers/OurTeachers";
import ConsulationTopPage from '@/components/ConsultationSessions/ConstultationsTopPage';



 
import { revalidateTag } from 'next/cache'
import ConsultationSessionsData from "@/components/ConsultationSessions/ConsultationSessionsData";
import OurCourses from "../our_courses/page";
import OurCoursesExport from "@/components/OurCourses/OurCoursesExport";



const TeacherPageWrapper = async () => {
  revalidateTag('collection')
  try {
    const [
      teachersData,
      commonTopPageData,
  
    ] = await Promise.all([
      getTeachers(),
      getCommonTopPage(),

    ]);

    // Verifica che entrambi i set di dati non siano nulli
    if (
      !teachersData ||
      ! commonTopPageData 

    ) {
      console.error(
        "Errore nel recupero dei dati: uno o entrambi i set di dati sono nulli"
      );
      return null;
    }

    return (
      <>
        {/* Passa i dati come props ai componenti figlio */}
        <ConsulationTopPage data={commonTopPageData  }/>
        <ConsultationSessionsData/>
        <OurCoursesExport/>
    
   
   
        {/* <CommonTopPage data={commonTopPageData } />  */}
 
       

      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default TeacherPageWrapper;