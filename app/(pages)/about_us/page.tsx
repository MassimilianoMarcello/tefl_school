// import React from 'react'
// import s from "../../page.module.scss";


// const AboutUs = () => {
//   return (<div className={s.samplePageBackground}>
//     <div className={s.samplePage}>About Us</div>
//     </div>
//   )
// }

// export default AboutUs


'use server'

import { getAboutUs, getCommonTopPage,getTeachers } from "@/sanity/sanity.query";
import AboutUs from "@/components/About_Us/AboutUs";
import TopPageAboutUs from '@/components/About_Us/TopPageAboutUS';



 
import { revalidateTag } from 'next/cache'
import OurTeachers from "@/components/Our teachers/OurTeachers";



const AboutUsPageWrapper = async () => {
  revalidateTag('collection')
  try {
    const [
      aboutUsData,
      commonTopPageData,
      teachersData,
  
    ] = await Promise.all([
      getAboutUs(0),
      getCommonTopPage(),
      getTeachers(),

    ]);

    // Verifica che entrambi i set di dati non siano nulli
    if (
      !aboutUsData ||
      ! commonTopPageData ||
      ! teachersData

    ) {
      console.error(
        "Errore nel recupero dei dati: uno o entrambi i set di dati sono nulli"
      );
      return null;
    }

    return (
      <>
        {/* Passa i dati come props ai componenti figlio */}
        <TopPageAboutUs data={commonTopPageData  } />
       <AboutUs data={aboutUsData} pageType={""} pageIndex={0} />
       <OurTeachers data={teachersData}/>
   
   
        {/* <CommonTopPage data={commonTopPageData } />  */}
 
       

      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default AboutUsPageWrapper;

