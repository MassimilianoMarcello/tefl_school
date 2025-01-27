import Image from "next/image";
import type { HomePage } from "@/Types/Homepage";
import styles from "./C_ThirdComponent.module.scss";
import Link from "next/link";
import ButtonAzure from "../Buttons/ButtonAzure";
import { urlFor } from "@/sanity/sanity.client"; // Utility per generare URL delle immagini di Sanity

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
            <span className={styles.squareOneC}></span>
            <span className={styles.squareTwoC}></span>
            <span className={styles.squareThreeC}></span>
            <div className={styles.textContainer}>
              <h1 className={styles.mainTitle}>{thirdComponent.title}</h1>
            </div>
            <div className={styles.ParahContainer}>
              <p className={styles.mainText}>{thirdComponent.text}</p>
            </div>
            <div className={styles.backgroundImageContainer}>
              {thirdComponent.image && (
                <Image
                  className={styles.backgroundImage}
                  src={urlFor(thirdComponent.image).width(1250).height(950).url()} 
                  alt={thirdComponent.title || "Component Image"}
                  width={1250}
                  height={600}
                  priority
                />
              )}
              <div className={styles.btnBookCall}>
                <ButtonAzure text={"book a call"} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
