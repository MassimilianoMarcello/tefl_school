import styles from "./WhyFlorence.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import { PageType } from "@/Types/Page";
import { PortableText } from "@portabletext/react";

interface PageProps {
    data: PageType;
    pageType: string;
  }
  

export default function WhyFlorence({ data, pageType }: PageProps) {
  const { mainTitle, sections } = data;

  return (
    <div className={`${styles.topMainContainer} ${styles[pageType]}`}>
      <h1>{mainTitle}</h1>
      {sections.map((section, index) => {
        const { title, subtitle, image, content, _key } = section;
        const imageUrl = image?.asset ? urlFor(image).width(1400).height(500).url() : null;
        const sectionClassName = `${styles.sectionContainer} ${styles[`section-${index}`]}`;
        const imageClassName = `${styles.imageBackground} ${styles[`image-${index}`]}`;

        return (
          <div key={_key} className={sectionClassName}>
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
            <span className={styles.square1}></span>
            <span className={styles.square2}></span>
          </div>
        );
      })}
    </div>
  );
}
