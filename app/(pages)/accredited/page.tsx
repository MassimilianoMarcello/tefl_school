"use server";

import { getAccredited } from "@/sanity/sanity.query";
import Page from "@/components/Accredited/Accredited";
import { revalidateTag } from 'next/cache'


const Accredited = async () => {
  revalidateTag('collection')
  try {
    const pageIndex = 0;
    const pageData = await getAccredited(pageIndex); // Passa l'indice corretto

    // Verifica che i dati non siano nulli
    if (!pageData) {
      console.error(
        "Errore nel recupero dei dati: i dati della pagina sono nulli"
      );
      return null;
    }

    return (
      
       
        <Page data={pageData} pageType={pageData.pageType.current} pageIndex={pageIndex}/>
     
      
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default Accredited;
