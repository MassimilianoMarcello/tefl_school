import { getCommonTopPage } from "@/sanity/sanity.query";
import TopPageOurCourses from '@/components/OurCourses/TopPageOurCourses';
import { revalidateTag } from 'next/cache';

const OurCoursesWrapper = async () => {
  revalidateTag('collection');

  try {
    const commonTopPageData = await getCommonTopPage();

    if (!commonTopPageData) {
      console.error("Errore nel recupero dei dati: il dato è nullo");
      return null;
    }

    return (
      <>
        <TopPageOurCourses data={commonTopPageData} />
      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default OurCoursesWrapper;
