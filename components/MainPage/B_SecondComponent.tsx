


import Image from "next/image";
import type { HomePage } from '@/Types/Homepage';
import styles from "./B_SecondComponent.module.scss";

interface SecondComponentProps {
  data: HomePage[]; // Accetta i dati come prop
}

export default function SecondComponent({ data }: SecondComponentProps) {
  // Verifica se data è definito prima di accedere ai suoi elementi
  const secondComponent = data && data[0]?.components[0];

  return (
    <main className="pannarru">
      <section className="busicco">
      <div className={styles.introContainer}>
<h1 className={styles.mainTitle}>TEFL <span>Tuscany</span></h1>
<p className={styles.mainText}>TEFL Tuscany has been offering its language students and TEFL trainees top-notch services since 2006 when it opened its doors as TEFL Tuscany, offers an extremely high-quality TESOL/TEFL certification program and has quickly grown to become a well-respected language and culture center. The locals know about the local language center and continuously refer their family and friends to take part in its offerings.</p>
<p className={styles.mainText}>TEFL Tuscany believes that the study of language enhances communication, understanding and knowledge and that language and culture are inseparable. We are dedicated to the concept of intercultural exchange through language with the intention to provide deeper cultural understanding and awareness through our language teaching.</p>
</div>
        {/* Renderizza solo il secondo componente della prima HomePage se data è definito */}
        {secondComponent && (
          <div key={secondComponent._key} className="gavini">
            <h1 className="alicion">{secondComponent.title}</h1>
            <p className="tamarindo">{secondComponent.text}</p>
            <Image src={secondComponent.image} alt="Component Image" width={400} height={300} />
          </div>
        )}
      </section>
    </main>
  );
}
