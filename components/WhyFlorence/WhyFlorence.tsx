// File: WhyFlorence.tsx

import styles from "./WhyFlorence.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import { PageType } from "@/Types/Page";
import { PortableText } from "@portabletext/react";
import { revalidateTag } from "next/cache";
interface PageProps {
  data: PageType;
}

export default function WhyFlorence({ data }: PageProps) {
  revalidateTag("collection");
  const { mainTitle, sections } = data;


  return (
    <div className={styles.topMainContainer}>
      <h1>{mainTitle}</h1>
      {sections.map((section) => {
        const { title, subtitle, image, content, _key } = section;
        const imageUrl = image?.asset ? urlFor(image).width(1400).height(500).url() : null;

        return (
          <div key={_key} className={styles.sectionContainer}>
            {imageUrl && (
              <Image
                className={styles.imageBackground}
                src={imageUrl}
                alt={title}
                sizes="100vw"
                width={1200}
                height={500}
              />
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
