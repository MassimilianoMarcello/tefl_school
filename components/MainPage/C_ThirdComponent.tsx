import Image from "next/image";
import type { HomePage } from "@/Types/Homepage";
import styles from "./C_ThirdComponent.module.scss";
import Link from "next/link";

interface ThirdComponentProps {
  data: HomePage[]; // Accetta i dati come prop
}

export default function ThirdComponent({ data }: ThirdComponentProps) {
  // Verifica se data è definito prima di accedere ai suoi elementi
  const thirdComponent = data && data[0]?.components[0];

  return (
    
    
          <section className={styles.one_Main_Container}>
      <div className={styles.two_Section_Container}>
    
        {/* Renderizza solo il secondo componente della prima HomePage se data è definito */}
        {thirdComponent && (
          <div key={thirdComponent._key} className={styles.three_Map_Container}>
              <span className={styles.squareOne}>1</span>
              <span className={styles.squareTwo}>1</span>
            <div className={styles.textContainer}>
              <h1 className={styles.mainTitle}>{thirdComponent.title}</h1>
              <p className={styles.mainText}>{thirdComponent.text}</p>
            </div>
            <div   className={styles.backgroundImageContainer}>
            <Image 
              className={styles.backgroundImage}
              src={thirdComponent.image}
              alt="Component Image"
              width={1250}
              height={600}
              layout="responsive"
            />
            <section className={styles.parallax1}>
        <div className={styles.blueBack}>
          <div className={styles.parallax1Inner}>
            
            <Link href="./">apply now</Link>
          </div>
        </div>
      </section>
            </div>
          </div>
        )}
      </div>
    </section>

  );
}
