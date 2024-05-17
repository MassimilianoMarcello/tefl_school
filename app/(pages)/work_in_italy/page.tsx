"use server";

import { getPage } from "@/sanity/sanity.query";
import Page from "@/components/Common_Page/Page";
import styles from './workInItaly.module.scss';

const WorkInItalyPageWrapper = async () => {
  try {
    const pageData = await getPage(4); // Passa l'indice corretto

    // Verifica che i dati non siano nulli
    if (!pageData) {
      console.error(
        "Errore nel recupero dei dati: i dati della pagina sono nulli"
      );
      return null;
    }

    return (
      <>
      <div className={styles.wrapperToCommonPage}>
      <Page data={pageData} pageType={pageData.pageType.current} />
      </div>
     
      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default WorkInItalyPageWrapper;
