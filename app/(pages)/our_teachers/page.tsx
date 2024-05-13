'use server'

import { getTeachers, getCommonTopPage } from "@/sanity/sanity.query";
import OurTeachers from "@/components/Our teachers/OurTeachers";
import CommonTopPageTeachers from '@/components/Our teachers/CommonTopPageTeachers';



 
import { revalidateTag } from 'next/cache'



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
        <CommonTopPageTeachers data={commonTopPageData  } />
       <OurTeachers data={teachersData } />
   
   
        {/* <CommonTopPage data={commonTopPageData } />  */}
 
       

      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default TeacherPageWrapper;
