import styles from "./page.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import { PageType } from "@/Types/Page";
import { PortableText } from "@portabletext/react";

interface PageProps {
    data: PageType;
    pageType: string;
  }
  
// from schema Page

export default function CommonPage({ data }: PageProps) {
  const { mainTitle, sections } = data;

  return (
    <div className={styles.topMainContainer} >
        <h1>{mainTitle}</h1>
           <span className={styles.square1}>sdffsdfsdfs</span>
            
            <span className={styles.square2}>aaaaaaaaaaaaa</span>
      {sections.map((section, index) => {
        const { title, subtitle, image, content, _key,order } = section;
        const imageUrl = image?.asset ? urlFor(image).width(1150).height(400).url() : null;
        const sectionClassName = `${styles.sectionContainer} ${styles[`section-${index}`]}`;
        const imageClassName = `${styles.imageBackground} ${styles[`image-${index}`]}`;

        return (
          <div key={_key} className={sectionClassName}>
            <div className={styles.titleSquareContainer}></div>
             
   
            <p>{order}</p>
            {imageUrl ? (
              <Image
                className={imageClassName}
                src={imageUrl}
                alt={title}
                sizes="100vw"
                width={1150}
                height={400}
              />
            ) : (
              <div className={styles.placeholderImage}>No Image Available</div>
            )}
            <div className={styles.topTextContainer}>
              <h2 className={styles.mainTitle}>{title}</h2>
              <p className={styles.mainText}>{subtitle}</p>
              <div className={styles.portableTextContainer}>
                <PortableText value={content} />
              </div>
            </div>
         
          </div>
        );
      })}
    </div>
  );}