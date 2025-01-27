"use server";

import { getHomePage, getCourse, getTestimonials } from "@/sanity/sanity.query";
import { revalidateTag } from "next/cache";
import dynamic from "next/dynamic";

const FirstComponent = dynamic(() => import("./A_FirstComponent"));
const SecondComponent = dynamic(() => import("./B_SecondComponent"));
const ThirdComponent = dynamic(() => import("./C_ThirdComponent"));
const D_CoursesPreview = dynamic(() => import("./D_CoursesPreview"));
const E_Testimonials = dynamic(() => import("./E_Testimonials"));
const F_Parallax = dynamic(() => import("./F_Parallax"), { ssr: false });
const FeaturedCourseTitle = dynamic(() => import("./Z_TitleFeaturedCourse"));

const fetchData = async () => {
  const [homePageData, courseData, testimonialData] = await Promise.all([
    getHomePage(),
    getCourse(),
    getTestimonials(),
  ]);

  return { homePageData, courseData, testimonialData };
};

const MainPageWrapper = async () => {
  revalidateTag("collection");

  try {
    const { homePageData, courseData, testimonialData } = await fetchData();

    if (!homePageData || !courseData || !testimonialData) {
      console.error("Errore: alcuni dati non sono stati recuperati");
      return <h1>Errore nel caricamento dei dati.</h1>;
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
    return <h1>Si è verificato un errore durante il caricamento.</h1>;
  }
};

export default MainPageWrapper;


