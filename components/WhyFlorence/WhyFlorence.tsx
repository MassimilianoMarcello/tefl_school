import styles from "./WhyFlorence.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import { Page as PageType } from "@/Types/Page";
import Link from "next/link";

interface PageProps {
  data: PageType; // Accetta i dati come prop come un singolo oggetto
}

export default function WhyFlorence({ data }: PageProps) {
  // Estrai i dati necessari dall'oggetto data
  const { mainTitle, sections } = data;

  return (
    <div className={styles.topMainContainer}>
      {sections.map((section) => {
        const { title, subtitle, image, _key } = section;
        const imageUrl = image?.asset?.url || "";

        return (
          <div key={_key} className={styles.sectionContainer}>
            <Image
              className={styles.imageBackground}
              src={imageUrl}
              alt={title}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={1000}
              height={400}
            />
            <div className={styles.topTextContainer}>
            <h1 className={styles.mainTitle}>{mainTitle}</h1>
              <h1 className={styles.mainTitle}>{title}</h1>
              <p className={styles.mainText}>{subtitle}</p>
            </div>
            <span className={styles.square1}></span>
            <span className={styles.square2}></span>
          </div>
        );
      })}
    </div>
  );
}
