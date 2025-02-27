import React from 'react'
import { getPages } from "@/sanity/sanity.query";
import WorkInItalyData from '@/components/Work_in_Italy/WorkInItalyData'
import CommonBottomPage from "@/common-components/common-bottom-page/bottomPage";
import { revalidateTag } from 'next/cache'

const WorkInItaly = async () => {
    revalidateTag('collection')
    const pageId = "2cbf78fc-12f1-4150-98cd-b3156f8cb098"; // Passa l'ID della pagina dinamicamente
  const pageData = await getPages(pageId);
  return (
    <>
        <WorkInItalyData/>
        <CommonBottomPage 
      data={pageData} 
      containerClass="workingInItalyBottomPage" 
      id={pageId} 
    />
    </>
  )
}

export default WorkInItaly


