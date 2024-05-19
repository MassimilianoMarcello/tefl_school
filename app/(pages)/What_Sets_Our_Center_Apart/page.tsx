// What_Sets_Our_Center_Apart


"use server";

import { getPage } from "@/sanity/sanity.query";
import Page from "@/components/Common_Page/Page";
import styles from './WhatSetsOurCenterApart.module.scss';
import { revalidateTag } from 'next/cache'

const WhatSetsOurCenterApartWrapper = async () => {
  revalidateTag('collection')
  try {
    const pageData = await getPage(3); 

   
    if (!pageData) {
      console.error(
        "Error retrieving data: The page data is null"
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
    console.error("Error retrieving data:", error);
    return null;
  }
};

export default WhatSetsOurCenterApartWrapper ;