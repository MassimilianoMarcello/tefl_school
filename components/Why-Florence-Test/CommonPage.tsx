import { urlFor } from "@/sanity/sanity.client";
import styles from "./commonPage.module.scss";
import Image from "next/image";
import { PageType as CommonPage } from "@/Types/Page";

interface CommonPageTypeProps {
  data: CommonPage;
  dynamicStyle?: string;
}

export default function CommonPageTemplate({
  data,
  dynamicStyle = "defaultContainer",
}: CommonPageTypeProps) {
  const { mainImage, mainTitle, sections } = data;
  const imageUrl = urlFor(mainImage).url();

  return (
    <div className={`${styles[dynamicStyle]}`}>
      {/* Rendering dell'immagine principale */}
      <Image
        className={styles.imageBackground}
        src={imageUrl}
        alt={mainTitle}
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
        <p className={styles.mainText}>{sections[0]?.text}</p> {/* Testo della prima sezione */}
      </div>

      {/* Rendering delle sezioni */}
      <div className={styles.sectionsContainer}>
        {sections.map((section) => (
          <div key={section._key} className={styles.section}>
            {/* Titolo della sezione */}
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {/* Sottotitolo della sezione */}
            <h3 className={styles.sectionSubtitle}>{section.subtitle}</h3>
            {/* Testo della sezione */}
            <p className={styles.sectionText}>{section.text}</p>

            {/* Immagine della sezione */}
            {section.image && (
              <Image
                className={styles.sectionImage}
                src={urlFor(section.image).url()}
                alt={section.title}
                width={800}
                height={400}
              />
            )}

            {/* Contenuto della sezione */}
            {section.content && section.content.map((block, index) => (
              <div key={index} className={styles.sectionContent}>
                {/* Renderizza ogni blocco di contenuto (se è di tipo "block") */}
                <p>{block.children.map((child: any) => child.text).join(' ')}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <span className={styles.square1}></span>
      <span className={styles.square2}></span>
    </div>
  );
}

