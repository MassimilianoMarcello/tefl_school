
'use server'

import { getPage } from "@/sanity/sanity.query";
import WhyFlorence from '@/components/WhyFlorence/WhyFlorence';

const WhyFlorencePageWrapper = async () => {
  try {
    const pageData = await getPage(0); // Passa l'indice corretto

    // Verifica che i dati non siano nulli
    if (!pageData) {
      console.error("Errore nel recupero dei dati: i dati della pagina sono nulli");
      return null;
    }

    return (
      <>
        <WhyFlorence data={pageData} />
      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default WhyFlorencePageWrapper;
