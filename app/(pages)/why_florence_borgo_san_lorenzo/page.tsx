'use server'

import { getTestimonials, getCommonTopPage } from "@/sanity/sanity.query";
import WhyFlorence from "@/components/WhyFlorence/WhyFlorence";
import CommonTopPageWhyFlorence from '@/components/WhyFlorence/CommonTopPageWhyFlorence';



 
import { revalidateTag } from 'next/cache'



const WhyFlorencePageWrapper = async () => {
  revalidateTag('collection')
  try {
    const [
      whyFlorenceData,
      commonTopPageData,
  
    ] = await Promise.all([
      // getTestimonials(),
      getCommonTopPage(),

    ]);

    // Verifica che entrambi i set di dati non siano nulli
    if (
    //  ! whyFlorenceData ||
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
        <CommonTopPageWhyFlorence data={commonTopPageData  } />
       {/* <WhyFlorence data={whyFlorenceData} /> */}
   
   
        {/* <CommonTopPage data={commonTopPageData } />  */}
 
       

      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default WhyFlorencePageWrapper;
