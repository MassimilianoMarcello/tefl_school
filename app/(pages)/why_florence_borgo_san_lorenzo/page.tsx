'use server'

import { getPage } from "@/sanity/sanity.query";
// import WhyFlorence from "@/components/WhyFlorence/WhyFlorence";
import WhyFlorence from '@/components/WhyFlorence/WhyFlorence';



 
import { revalidateTag } from 'next/cache'



const WhyFlorencePageWrapper = async () => {
  revalidateTag('collection')
  try {
    const [
      // whyFlorenceData,
      PageData,
  
    ] = await Promise.all([
      // getTestimonials(),
      getPage(),

    ]);

    // Verifica che entrambi i set di dati non siano nulli
    if (
    //  ! whyFlorenceData ||
      PageData 

    ) {
      console.error(
        "Errore nel recupero dei dati: uno o entrambi i set di dati sono nulli"
      );
      return null;
    }

    return (
      <>
        {/* Passa i dati come props ai componenti figlio */}
        <WhyFlorence data={PageData  } />
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
