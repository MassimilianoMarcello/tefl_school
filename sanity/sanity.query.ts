import { groq } from "next-sanity";
import client from "./sanity.client";

import { SlideItem } from "@/Types/SlideItem";
import { HomePage } from "@/Types/Homepage";
import { Course } from "@/Types/Course";
import { Testimonial } from "@/Types/Testimonials";

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
          
      }`,
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
        
        
      
  }`,
    // {
    //   next: {
    //     revalidate: 63,
    //   },
    // }
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
  }`,
    // {
    //   next: {
    //     revalidate: 63,
    //   },
    // }
  );
}

// export async function getProject(slug: string): Promise<Project> {
//   return client.fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
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
    //     revalidate: 64,
    //   },
    // }
  );
}

// export async function getComponent(): Promise<Component[]> {
//   return client.fetch(
//     groq`*[_type == "components"]{

//         title,
//         text,
//           _key,
//         "image":image.asset->url

//    }`
//     // {
//     //   next: {
//     //     revalidate: 63,
//     //   },
//     // }
//   );
// }

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

// export async function getAboutMe(): Promise<AboutMe[]> {
//   return client.fetch(
//     groq`*[_type == 'aboutMe' ]{
//       _id,
//       _type,
//       description,
//       "skillsName":skills[]{"skillIconImage":icon.asset->url,name},
//     }`,
//     {
//       next: {
//         revalidate: 67,
//       },
//     }
//   );
// }
