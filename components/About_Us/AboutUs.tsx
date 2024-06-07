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
  const mainImageUrl = mainImage?.asset?.url
    ? urlFor(mainImage)
        .width(400 * 1.5)
        .height(600 * 1.5)
        .url()
    : null;

  return (
    <div className={topMainContainerClass}>
      <h1>{mainTitle}</h1>
      <div className={styles.imageTextContainer}>
        {mainImageUrl && (
          <Image
            className={styles.mainImage}
            src={mainImageUrl}
            alt={mainTitle}
            sizes="100vw"
            width={100}
            height={150}
          />
        )}
        
      </div>
      {/* <div className={styles.applyButton}>
           <ApplyTodayButton/>
           </div> */}

      <span className={styles.square1}></span>
      <span className={styles.square2}></span>
      <div className={styles[`gridContainer-${pageIndex}`]}>
        {sections.map((section, index) => {
          const { title, subtitle, text, image, content, _key, order } = section;
          const imageUrl = image?.asset
            ? urlFor(image).width(1400).height(800).url()
            : null;
          const sectionClassName = `${styles.sectionContainer} ${styles[`section-${index}`]}`;
          const imageClassName = `${styles.imageBackground} ${styles[`image-${index}`]}`;

          return (
            <div key={_key} className={sectionClassName}>
              <div className={styles[`section-${index}`]}>
                <div className={styles.imageTextContainer2}>
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
                    <div className={styles.placeholderImage}></div>
                  )}
               
                   
                  </div>
                </div>
              </div>
        
          );
        })}
      </div>
    </div>
  );
}

