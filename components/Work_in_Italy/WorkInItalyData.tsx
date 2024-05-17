"use server";



import { getPage } from "@/sanity/sanity.query";
import Page from "@/components/Commo_Page/Page";

const WorkInItalyPageWrapper = async () => {
  try {
    const pageData = await getPage(1); // Passa l'indice corretto

    // Verifica che i dati non siano nulli
    if (!pageData) {
      console.error(
        "Errore nel recupero dei dati: i dati della pagina sono nulli"
      );
      return null;
    }

    return (
      <>
        <Page data={pageData} pageType={pageData.pageType.current} />
      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default WorkInItalyPageWrapper;
