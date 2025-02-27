
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import { PageType } from "@/Types/Page";
import { PortableText } from "@portabletext/react";
import ApplyTodayButton from "../../components/Buttons/ApplyToday";
import EnrollNowButton from "../../components/Buttons/EnrollNow";
import styles from "./commonBottomPage.module.scss";



interface PageProps {
  data: PageType;
  containerClass: string;
  id: string;
}

export default function CommonBottomPage({ data, containerClass, id }: PageProps) {
    // Verifica se 'data' è presente
    if (!data) {
      return <p>Caricamento dati in corso...</p>; // O un messaggio di errore appropriato
    }
  
    const { mainTitle, sections, mainImage } = data;
    const mainImageUrl = mainImage?.asset?.url ? urlFor(mainImage).width(1600).height(1000).url() : null;
  
    return (
    <div id={id} className={`${styles.topMainContainer} ${containerClass}`}>
      <h1 className={styles.mainTitlePage}>{mainTitle}</h1>
      {mainImageUrl && (
        <Image
          className={styles.mainImage}
          src={mainImageUrl}
          alt={mainTitle}
          sizes="100vw"
          width={1600}
          height={500}
        />
      )}
      <div className={styles.applyButton}>
        <ApplyTodayButton />
      </div>

      <span className={styles.square1}></span>
      <span className={styles.square2}></span>
      
      <div className={styles.gridContainer}>
        {sections.map((section, index) => {
          const { title, subtitle, text, image, content, _key } = section;
          const imageUrl = image?.asset ? urlFor(image).width(1600).height(1000).url() : null;
          const sectionClassName = `${styles.sectionContainer} ${styles[`sectionContainer${index}`]}`;
const imageClassName = `${styles.imageBackground}`;

          return (
            <div key={_key} className={sectionClassName}>
                <div className={styles.imageContainer}>
                {imageUrl ? (
                <Image
                  className={imageClassName}
                  src={imageUrl}
                  alt={title}
                  sizes="100vw"
                  width={1600}
                  height={1000}
                />
              ) : (
                <div className={styles.placeholderImage}></div>
              )}
                </div>
      
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
      </div>
      <div className={styles.enrollButton}>
        <EnrollNowButton />
      </div>
    </div>
  );
}
