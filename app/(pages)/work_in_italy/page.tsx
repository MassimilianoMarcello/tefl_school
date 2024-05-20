"use server";

import { getPage } from "@/sanity/sanity.query";
import Page from "@/components/Common_Page/Page";
import styles from './workInItaly.module.scss';
import { revalidateTag } from 'next/cache'

const WorkInItalyPageWrapper = async () => {
  revalidateTag('collection')
  try {
    const pageData = await getPage(2); // Passa l'indice corretto
const pageIndex = 2;
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
      <Page data={pageData} pageType={pageData.pageType.current} pageIndex={pageIndex} />
      </div>
     
      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default WorkInItalyPageWrapper;
