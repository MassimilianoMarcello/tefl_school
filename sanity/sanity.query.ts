import { groq } from "next-sanity";
import client from "./sanity.client";
import { PageType } from "@/Types/Page";
import { SlideItem } from "@/Types/SlideItem";
import { HomePage } from "@/Types/Homepage";
import { Course } from "@/Types/Course";
import { Testimonial } from "@/Types/Testimonials";
import { Teachers } from "@/Types/Teachers";
import { CommonTop } from "@/Types/CommonTop";
import { Faq } from "@/Types/Faq";
import {AccreditedType} from '@/Types/Accredited';

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
    { slug }
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
        // "image":image.asset->url,
        image{
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
       
          
    }`
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



export async function getPage(index: number): Promise<PageType> {
  return client.fetch(
    groq`*[_type == 'page'] | order(_createdAt) [${index}...${index + 1}]{
      _id,
      mainImage{
          asset->{
            url
          },
          crop,
          hotspot
        },
      mainTitle,
      pageType,
      sections[]{
        _key,
        order,
        title,
        subtitle,
        text,
        image{
          asset->{
            url
          },
          crop,
          hotspot
        },
        content[]
      }
    }

    
    [0]`
  );
}

export async function getAccredited(index: number): Promise<AccreditedType> {
  return client.fetch(
    groq`*[_type == 'accredited'] | order(_createdAt) [${index}...${index + 1}]{
      _id,
      mainImage{
          asset->{
            url
          },
          crop,
          hotspot
        },
      mainTitle,
      pageType,
      sections[]{
        _key,
        order,
        title,
        subtitle,
        text,
        image{
          asset->{
            url
          },
          crop,
          hotspot
        },
        content[]
      }
    }

    
    [0]`
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

export async function getAllFaqs(): Promise<Faq[]> {
  return client.fetch(
    groq`*[_type == 'faq']{
      _id,
      question,
      answer,
      category,
      _createdAt,
      _updatedAt
    }`
  );
}

