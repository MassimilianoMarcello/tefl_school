
import styles from "./A_FirstCompoent.module.scss";

import Image from "next/image";
import { HomePage } from '@/Types/Homepage';

interface FirstComponentProps {
  data: HomePage[]; // Accetta i dati come prop
}

export default function FirstComponent({ data }: FirstComponentProps) {
  return (
    <main className={styles.oneMainContainer}>
    
      <section className={styles.twoSectionContainer}>
      <span className={styles.square1}></span>
              <span className={styles.square2}></span>
        {/* Verifica se data è definito prima di eseguire l'iterazione */}
        {data && data.map((homePage) => (
          <div key={homePage._id} className={styles.threeMapContainer}>
            <div className={styles.textContainer}>
             
            <h1 className={styles.mainTitle}>{homePage.mainTitle}</h1>
            <p className={styles.mainText}>{homePage.mainText}</p>
            </div>
            <Image className={styles.backgroundImage} priority     src={homePage.bannerImage} alt={homePage.mainTitle} sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={1250} height={600} 
     />
          </div>
        ))}
      </section>
    </main>
  );
}
