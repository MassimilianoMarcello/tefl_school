// "use server";

// import { getAccredited } from "@/sanity/sanity.query";
// import Page from "@/components/Accredited/Accredited";
// import { revalidateTag } from 'next/cache'
// import TopPageCommon from "@/components/Accredited/TopPageCommon";


// const Accredited = async () => {
//   revalidateTag('collection')
//   try {
//     const pageIndex = 0;
//     const pageData = await getAccredited(pageIndex); // Passa l'indice corretto

//     // Verifica che i dati non siano nulli
//     if (!pageData) {
//       console.error(
//         "Errore nel recupero dei dati: i dati della pagina sono nulli"
//       );
//       return null;
//     }

//     return (<>
//     <TopPageCommon data={commonTopPageData  }/>
//     <Page data={pageData} pageType={pageData.pageType.current} pageIndex={pageIndex}/>
    
//     </>
      
       
         
      
//     );
//   } catch (error) {
//     console.error("Errore nel recupero dei dati:", error);
//     return null;
//   }
// };

// export default Accredited;


'use server'

import { getAccredited, getCommonTopPage } from "@/sanity/sanity.query";
import Accredited from "@/components/Accredited/Accredited";
import TopPageCommon from '@/components/Accredited/TopPageCommon';



 
import { revalidateTag } from 'next/cache'



const AccreditedPageWrapper = async () => {
  revalidateTag('collection')
  try {
    const [
      accreditedData,
      commonTopPageData,
  
    ] = await Promise.all([
      getAccredited(0),
      getCommonTopPage(),

    ]);

    // Verifica che entrambi i set di dati non siano nulli
    if (
      !accreditedData ||
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
        <TopPageCommon data={commonTopPageData  } />
       <Accredited data={accreditedData} pageType={""} pageIndex={0} />
   
   
        {/* <CommonTopPage data={commonTopPageData } />  */}
 
       

      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default AccreditedPageWrapper;

