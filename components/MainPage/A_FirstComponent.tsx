import styles from "./A_FirstCompoent.module.scss";
import Image from "next/image";
import { HomePage } from '@/Types/Homepage';
import { urlFor } from "@/sanity/sanity.client"; // Utility per generare URL delle immagini di Sanity

interface FirstComponentProps {
  data: HomePage[]; 
}

export default function FirstComponent({ data }: FirstComponentProps) {
  return (
    <main className={styles.oneMainContainer}>
      <section className={styles.twoSectionContainer}>
        <span className={styles.square1A}></span>
        <span className={styles.square2A}></span>
        {/* Verifica se data è definito prima di eseguire l'iterazione */}
        {data && data.map((homePage) => (
          <div key={homePage._id} className={styles.threeMapContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.mainTitle}>{homePage.mainTitle}</h1>
              <p className={styles.mainText}>{homePage.mainText}</p>
            </div>
            {homePage.bannerImage && (
              <Image 
                className={styles.backgroundImage}
                priority
                src={urlFor(homePage.bannerImage).width(1250).height(950).url()} // Genera URL ottimizzati con Sanity
                alt={homePage.mainTitle || "Banner Image"}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={1250}
                height={600}
              />
            )}
          </div>
        ))}
      </section>
    </main>
  );
}

