import styles from "./Accredited.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import { AccreditedType } from "@/Types/Accredited";
import { PortableText } from "@portabletext/react";
import { title } from "node:process";
import ApplyTodayButton from "../Buttons/ApplyToday";
import EnrollNowButton from "../Buttons/EnrollNow";



  
  interface AccreditedProps {
    data: AccreditedType;
    pageType: string;
    pageIndex: number;
  }
  
  export default function AccreditedPage({ data, pageIndex }: AccreditedProps) {
    const { mainTitle, sections, mainImage } = data;
  
    const topMainContainerClass = `${styles.topMainContainer} ${styles[`page-${pageIndex}`]}`;
  
    // Estrai l'URL dell'immagine principale
    const mainImageUrl = mainImage?.asset?.url ? urlFor(mainImage).width(400*1.5).height(600*1.5).url() : null;
  
    return (
      <div className={topMainContainerClass}>
        <h1>{mainTitle}</h1>
        {mainImageUrl && (
          <Image
            className={styles.mainImage}
            src={mainImageUrl}
            alt={mainTitle}
            sizes="100vw"
            width={400}
            height={600}
          />
        )}
           <div className={styles.applyButton}>
           <ApplyTodayButton/>
           </div>
     
        <span className={styles.square1}></span>
        <span className={styles.square2}></span>
        <div className={styles[`gridContainer-${pageIndex}`]}>
        {sections.map((section, index) => {
          const { title, subtitle,text, image, content, _key, order } = section;
          const imageUrl = image?.asset ? urlFor(image).width(1400).height(800).url() : null;
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
                  width={400}
                  height={300}
                />
              ) : (
                <div className={styles.placeholderImage}>No Image Available</div>
              )}
              <div className={styles.topTextContainer}>
                <h2 className={styles.mainTitle}>{title}</h2>
                <p className={styles.mainText}>{subtitle}</p>
                <p className={styles.mainText}>{text}</p>
                <div className={styles.portableTextContainer}>
                  <PortableText value={content} />
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.enrollButton}>
        <EnrollNowButton/>
        </div>
      
        </div>
      </div>
    );
  }
  