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
    const [
      firstComponentData,
      secondComponentData,
      thirdComponentData,
      courseData,
      testimonialData,
      renameComponentData,
    ] = await Promise.all([
      getHomePage(),
      getHomePage(),
      getHomePage(),
      getCourse(),
      getTestimonials(),
      getHomePage(),
    ]);

    // Verifica che entrambi i set di dati non siano nulli
    if (
      !firstComponentData ||
      !secondComponentData ||
      !thirdComponentData ||
      !courseData         ||
      !testimonialData    ||
      !renameComponentData
    ) {
      console.error(
        "Errore nel recupero dei dati: uno o entrambi i set di dati sono nulli"
      );
      return null;
    }

    return (
      <>
        <FirstComponent data={firstComponentData} />
        <SecondComponent data={secondComponentData} />
        <ThirdComponent data={thirdComponentData} />
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
