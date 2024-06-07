import styles from "./aboutUs.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import { AboutUsType } from "@/Types/AboutUs";
import { PortableText } from "@portabletext/react";
import ApplyTodayButton from "../Buttons/ApplyToday";
import EnrollNowButton from "../Buttons/EnrollNow";

interface AboutUsProps {
  data: AboutUsType;
  pageType: string;
  pageIndex: number;
}
const accreditatLogo = '/assets/accreditat_logo.webp'

export default function AboutUsPage({ data, pageIndex }: AboutUsProps) {
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
              {/* <p>{order}</p> */}
              {imageUrl ? (
                <Image
                  className={imageClassName}
                  src={imageUrl}
                  alt={title}
                  sizes="100vw"
                  width={1400}
                  height={800}
                />
              ) : (
                <div className={styles.placeholderImage}></div>
              )}
              <div className={styles.topTextContainer}>
                <h2 className={styles.mainTitle}>{title}</h2>
                <p className={styles.mainSubtitle}>{subtitle}</p>
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
  