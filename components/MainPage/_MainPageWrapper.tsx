'use server'

import { getHomePage, getCourse, getTestimonials } from "@/sanity/sanity.query";



 
import { revalidateTag } from 'next/cache'

import dynamic from 'next/dynamic';

const FirstComponent = dynamic(() => import("./A_FirstComponent"), { ssr: false });
const SecondComponent = dynamic(() => import("./B_SecondComponent"), { ssr: false });
const ThirdComponent = dynamic(() => import("./C_ThirdComponent"), { ssr: false });
const D_CoursesPreview = dynamic(() => import("./D_CoursesPreview"), { ssr: false });
const E_Testimonials = dynamic(() => import("./E_Testimonials"), { ssr: false });
const F_Parallax = dynamic(() => import("./F_Parallax"), { ssr: false });
const RenameComponent = dynamic(() => import("./G_RenameLater"), { ssr: false });
const FeaturedCourseTitle = dynamic(() => import("./Z_TitleFeaturedCourse"), { ssr: false });

const MainPageWrapper = async () => {
  revalidateTag('collection');
  try {
    const homePageData = await getHomePage();
    const [courseData, testimonialData] = await Promise.all([
      getCourse(),
      getTestimonials(),
    ]);

    if (!homePageData || !courseData || !testimonialData) {
      console.error("Errore: alcuni dati non sono stati recuperati");
      return null;
    }

    return (
      <>
        <FirstComponent data={homePageData} />
        <SecondComponent data={homePageData} />
        <ThirdComponent data={homePageData} />
        <FeaturedCourseTitle />
        <D_CoursesPreview data={courseData} />
        <E_Testimonials data={testimonialData} />
        <F_Parallax />
      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default MainPageWrapper;

