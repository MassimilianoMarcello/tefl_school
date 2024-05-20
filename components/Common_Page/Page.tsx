import styles from "./page.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import { PageType } from "@/Types/Page";
import { PortableText } from "@portabletext/react";
import { title } from "node:process";



  
  interface PageProps {
    data: PageType;
    pageType: string;
    pageIndex: number;
  }
  
  export default function CommonPage({ data, pageIndex }: PageProps) {
    const { mainTitle, sections, mainImage } = data;
  
    const topMainContainerClass = `${styles.topMainContainer} ${styles[`page-${pageIndex}`]}`;
  
    // Estrai l'URL dell'immagine principale
    const mainImageUrl = mainImage?.asset?.url ? urlFor(mainImage).width(1400).height(500).url() : null;
  
    return (
      <div className={topMainContainerClass}>
        <h1>{mainTitle}</h1>
        {mainImageUrl && (
          <Image
            className={styles.mainImage}
            src={mainImageUrl}
            alt={mainTitle}
            sizes="100vw"
            width={1400}
            height={500}
          />
        )}
        <span className={styles.square1}></span>
        <span className={styles.square2}></span>
        {sections.map((section, index) => {
          const { title, subtitle, image, content, _key, order } = section;
          const imageUrl = image?.asset ? urlFor(image).width(1400).height(500).url() : null;
          const sectionClassName = `${styles.sectionContainer} ${styles[`section-${index}`]}`;
          const imageClassName = `${styles.imageBackground} ${styles[`image-${index}`]}`;
  
          return (
            <div key={_key} className={sectionClassName}>
              <div className={styles[`section-${index}`]}></div>
              <p>{order}</p>
              {imageUrl ? (
                <Image
                  className={imageClassName}
                  src={imageUrl}
                  alt={title}
                  sizes="100vw"
                  width={1400}
                  height={500}
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
    );
  }
  