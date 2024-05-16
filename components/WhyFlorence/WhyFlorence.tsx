import styles from "./WhyFlorence.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import { PageType } from "@/Types/Page";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';



interface PageProps {
  data: PageType; // Accetta i dati come prop come un singolo oggetto
}

export default function WhyFlorence({ data }: PageProps) {
  const { mainTitle, sections } = data;

  return (
    <div className={styles.topMainContainer}>
      {sections.map((section) => {
        const { title, subtitle, image, content, _key } = section;
        const imageUrl = urlFor(image).width(1400).height(500).url();

        return (
          <div key={_key} className={styles.sectionContainer}>
            <Image
              className={styles.imageBackground}
              src={imageUrl}
              alt={title}
              sizes="100vw"
              width={1400}
              height={500}
            />
            <div className={styles.topTextContainer}>
              <h1 className={styles.mainTitle}>{title}</h1>
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
