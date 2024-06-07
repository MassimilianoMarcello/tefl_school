"use server";

import { getPage } from "@/sanity/sanity.query";
import Page from "@/components/Common_Page/Page";
//        1§1§

import { revalidateTag } from 'next/cache'




const ConsultationSessionsData = async () => {
  revalidateTag('collection')
  try {
    const pageIndex = 4;
    const pageData = await getPage(pageIndex); // Passa l'indice corretto

    // Verifica che i dati non siano nulli
    if (!pageData) {
      console.error(
        "Errore nel recupero dei dati: i dati della pagina sono nulli"
      );
      return null;
    }

    return (
      <>
        <Page data={pageData} pageType={pageData.pageType.current} pageIndex={pageIndex} />
      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default ConsultationSessionsData;
