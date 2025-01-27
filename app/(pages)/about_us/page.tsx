
      //  <AboutUs data={aboutUsData} pageType={""} pageIndex={0} />





'use server'

import { getAboutUs, getCommonTopPage, getTeachers } from "@/sanity/sanity.query";
import AboutUs from "@/components/About_Us/AboutUs";
import TopPageAboutUs from '@/components/About_Us/TopPageAboutUS';



 
import { revalidateTag } from 'next/cache'
import OurTeachersList from "@/components/Our-teachers/OutTeachersList";





const page = async () => {
  const commonTopPageData = await getCommonTopPage();
  const aboutUsData = await getAboutUs(0);
  const dataTeachers = await getTeachers();

  return (
    <div>
        <TopPageAboutUs data={commonTopPageData} />
   
        <AboutUs data={aboutUsData} pageType={""} pageIndex={0} />
           <OurTeachersList data={dataTeachers} />

    </div>
  )
}

export default page
      