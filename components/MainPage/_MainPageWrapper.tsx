'use server'

import { getHomePage, getCourse, getTestimonials } from "@/sanity/sanity.query";
import FirstComponent from "./A_FirstComponent";
import SecondComponent from "./B_SecondComponent";
import ThirdComponent from "./C_ThirdComponent";
import D_CoursesPreview from "./D_CoursesPreview";
import E_Testimonials from "./E_Testimonials";
import SlideItem from "../SlideItem/SlideItem";
import OurCourses from "../OurCourses/OurCourses";
import F_Parallax from "./F_Parallax";


 
import { revalidateTag } from 'next/cache'
import RenameComponent from "./G_RenameLater";
import FeaturedCourseTitle from "./Z_TitleFeaturedCourse";

const MainPageWrapper = async () => {
  revalidateTag('collection')
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
        {/* Passa i dati come props ai componenti figlio */}
       
       <FirstComponent data={firstComponentData} />
        {/*  <SlideItem/>*/}
        <SecondComponent data={secondComponentData} /> 
   {/* <OurCourses/> */}
        <ThirdComponent data={thirdComponentData} />
        <FeaturedCourseTitle/>
        <D_CoursesPreview data={courseData} />
        {/* <E_Testimonials data={testimonialData} /> */}
        <F_Parallax/>
        <RenameComponent data={renameComponentData}  />   
      </>
    );
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
    return null;
  }
};

export default MainPageWrapper;
