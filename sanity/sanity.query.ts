import { groq } from "next-sanity";
import client from "./sanity.client";

import { SlideItem } from "@/Types/SlideItem";
import { HomePage } from "@/Types/Homepage";
import { Course } from "@/Types/Course";
import { Testimonial } from "@/Types/Testimonials";
import {Teachers} from '@/Types/Teachers';
import {CommonTop} from '@/Types/CommonTop';
import {Faq} from '@/Types/Faq'

export async function getSlideItem(): Promise<SlideItem[]> {
  return client.fetch(
    groq`*[_type == "slideItem"]{
        _id,
          _rev,
          subtitle,
          title,
          linkText,
          text,
          "slug": slug.current,
          "image":image.asset->url,
           "imageIcon":image.asset->url,
          alt,
          
      }`
    // {
    //   next: {
    //     revalidate: 63,
    //   },
    // }
  );
}

export async function getCourse(): Promise<Course[]> {
  return client.fetch(
    groq`*[_type == 'course']{
 
      _id,
    name,
    startDate,
      endDate,
      price,
      completionTimeWeeks,
      "slug":slug.current,
        description,
        hours,
        level,
       "photo":photo.asset->url,
        
        
      
  }`
    // {
    //   next: {
    //     revalidate: 63,
    //   },
    // }
  );
}

export async function getCourses(slug: string): Promise<Course> {
  return client.fetch(
    groq`*[_type == "course" && slug.current == $slug][0]{
    _id,
    name,
    startDate,
      endDate,
      price,
      completionTimeWeeks,
      "slug":slug.current,
        description,
        hours,
        level,
       "photo":photo.asset->url,
}`,
 { slug },
  );
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    groq`*[_type == 'testimonial']{
      name,
        _id,
        city,
        review,
        state,
        title,
        "image":image.asset->url,
  }`
    // ,{
    //   next: {
    //     revalidate: 62,
    //   },
    // }
  );
}

// export async function getProject(slug: string): Promise<Project> {
//   return client.fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{}`)}
//       _id,
//       _createdAt,
//       author->,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content,
//       githubUrl
//     }`,
//     { slug },
//     {
//       next: {
//         revalidate: 63,
//       },
//     }
//   );
// }

export async function getHomePage(): Promise<HomePage[]> {
  return client.fetch(
    groq`*[_type == "homepage"]{
      _id,
      mainTitle,
        mainText,
        "bannerImage":bannerImage.asset->url,
       components[]{
         title,
         text,
           _key,
         "image":image.asset->url
       }
       
          
    }`,
    // {
    //   next: {
    //     revalidate: 10,
    //   },
    // }
  );
}

export async function getTeachers(): Promise<Teachers[]> {
  return client.fetch(
    groq`*[_type == "teachers"]{
 _id,
        _type,
        "idPhoto":idPhoto.asset->url,
       name,
       role,
       infoParagraph,
      //  content,
        "slug": slug.current

   }`

  );
}

export async function getCommonTopPage(): Promise<CommonTop[]> {
  return client.fetch(
    groq`*[_type == 'commonTopPage']{
      _id,
      _rev,
      title,
      subtitle,
      backgroundImage{
        asset->{
          _id,
          url
        },
        crop,
        hotspot,
        alt
      }

   }`

  );
}

// export async function getPosts(slug: string): Promise<Post> {
//   return client.fetch(
//     groq`*[_type == 'post' && slug.current == $slug][0]{
//       _id,
//       title,
//       author->{name, "bio":bio[].children[].text,_createdAt},
//       "body": body[]{
//         ...,
//         _type == 'block' => {
//           ...,
//           "children": children[]{
//             ...,
//             _type == 'span' => {
//               ...,
//               "marks": marks[]->{
//                 _type,
//               }
//             },
//             _type == 'image' => {
//               ...,
//               "asset": asset->{
//                 ...
//               }
//             },
//             _type == 'link' => {
//               ...,
//               "href": href
//             }
//           }
//         }
//       },
//       categories[]->{title,_Id},
//       "imageURL": mainImage.asset->url,
//       "slug": slug.current,
//       "mainImage": mainImage.asset->url,
//       // Aggiungi campi separati per le immagini e i link
//       "images": body[][_type == 'image'].asset->url,
//       "links": body[][_type == 'link'].href
//     }`,
//      {slug},
//     {
//       next: {
//         revalidate: 63,
//       },
//     }
//   );
// }

export async function getFaq(): Promise<Faq[]> {
  return client.fetch(
    groq`*[_type == 'faq']{
      _id,
        question,
        answer,
        category,
     }`,

  );
}



// test query

// export async function getCourse(name:string)Promise<Course> {
//   return client.fetch(
//     groq`*[_type == 'course' && name == $name][0] {
//       _id,
//       name,
//       startDate,
//       endDate,
//       price,
//       completionTimeWeeks,
//       "slug": slug.current,
//       description,
//       hours,
//       level,
//       "photo": photo.asset->url
//     }`,
//     { name } // Utilizza il titolo passato come argomento
//   );
// }


// componente in cui mettiamo come argomento il nome del corso "computer"


// import { getHomePage, getTestimonials, getCourse } from "@/sanity/sanity.query";
// import FirstComponent from "./A_FirstComponent.tsx";
// import SecondComponent from "./B_SecondComponent";
// import ThirdComponent from "./C_ThirdComponent";
// import D_CoursesPreview from "./D_CoursesPreview";
// import E_Testimonials from "./E_Testimonials";
// import SlideItem from "../SlideItem/SlideItem";
// import OurCourses from "../OurCourses/OurCourses";

// const MainPageWrapper = async () => {
//   try {
//     const [
//       firstComponentData,
//       secondComponentData,
//       thirdComponentData,
//       courseData,
//       testimonialData,
//     ] = await Promise.all([
//       getHomePage(),
//       getHomePage(),
//       getHomePage(),
//       getCourse("computer"), // Chiamata per recuperare i dati del corso filtrando per il titolo "computer"
//       getTestimonials(),
//     ]);

//     // Verifica che tutti i set di dati non siano nulli
//     if (
//       !firstComponentData ||
//       !secondComponentData ||
//       !thirdComponentData ||
//       !courseData ||
//       !testimonialData
//     ) {
//       console.error(
//         "Errore nel recupero dei dati: uno o più set di dati sono nulli"
//       );
//       return null;
//     }

//     return (
//       <>
//         {/* Passa i dati come props ai componenti figlio */}
//         {/* <FirstComponent data={firstComponentData} /> */}
//         {/* <SlideItem/> */}
//         {/* <SecondComponent data={secondComponentData} /> */}
//         {/* <OurCourses/> */}
//         {/* <ThirdComponent data={thirdComponentData} /> */}
//         <D_CoursesPreview data={courseData} />
//         {/* <E_Testimonials data={testimonialData} /> */}
//       </>
//     );
//   } catch (error) {
//     console.error("Errore nel recupero dei dati:", error);
//     return null;
//   }
// };

// export default MainPageWrapper;


