'use server'

import { getTestimonials, getCommonTopPage } from "@/sanity/sanity.query";
import Reviews from "@/components/Reviews/Reviews";
import CommonTopPageTeachers from '@/components/Reviews/CommonTopPageTeviews';



 
import { revalidateTag } from 'next/cache'



const ReviewsPageWrapper = async () => {
  revalidateTag('collection')
  try {
    const [
      reviewsData,
      commonTopPageData,
  
    ] = await Promise.all([
      getTestimonials(),
      getCommonTopPage(),

    ]);

    // Verifica che entrambi i set di dati non siano nulli
    if (
      !reviewsData ||
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
       <Reviews data={reviewsData } />
   
   
        {/* <CommonTopPage data={commonTopPageData } />  */}
 
       

      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default ReviewsPageWrapper;
