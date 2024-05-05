import Image from "next/image";
import type { HomePage } from '@/Types/Homepage';
import styles from './C_ThirdComponent.module.scss';
interface RenameComponentProps {
    data: HomePage[]; // Accetta i dati come prop
  }
  
  export default function RenameComponent({ data }: RenameComponentProps) {
    // Verifica se data è definito prima di accedere ai suoi elementi
    const renameComponent = data && data[0]?.components[1];
  
    return (
      <main className={styles.oneMainContainer}>
           <section className={styles.twoSectionContainer}>
           <span className={styles.square1}>1</span>
              <span className={styles.square2}>1</span>
                   {renameComponent && (
            <div key={renameComponent._key} className={styles.threeMapContainer}>
              
              <h1 className={styles.mainTitle}>{renameComponent.title}</h1>
              <p className={styles.mainText}>{renameComponent.text}</p>
              <Image src={renameComponent.image} alt="Component Image" width={400} height={300} />
            </div>
          )}
        </section>
      </main>
    );
  }