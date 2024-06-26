import Image from "next/image";
import type { HomePage } from "@/Types/Homepage";
import styles from "./B_SecondComponent.module.scss";
import Link from "next/link";

interface SecondComponentProps {
  data: HomePage[]; // Accetta i dati come prop
}

export default function SecondComponent({ data }: SecondComponentProps) {
  // Verifica se data è definito prima di accedere ai suoi elementi
  const secondComponent = data && data[0]?.components[0];

  return (
    <main className={styles.one_MainContainer}>
      <section className={styles.two_SectionContainer}>
        <div className={styles.three_introContainer}>
          <h1 className={styles.mainTitle}>
            {" "}
            <span className={styles.coloredTeflTitle}> tefl </span>
            <span className={styles.coloredTuscanyTitle}>tuscany</span>
          </h1>
          <div className={styles.textBox}>
            <div className={styles.aboutUs}>
              <p>
                TEFL Tuscany has been offering its language students and TEFL
                trainees top-notch services since 2006 when it opened its doors
                as TEFL International - The Learning Center. We offer an
                extremely high-quality TESOL/TEFL certification program and we
                quickly grew to become a well-respected language and culture
                center. The locals know about the local language center and
                continuously refer their family and friends to take part in our
                offerings.
              </p>
              <Link
                href={"./What_Sets_Our_Center_Apart"}
                className={styles.readMoreLink}
              >
                What Sets Our Center Apart?
              </Link>
            </div>

            <p className={styles.sloganOne}>
              Unlocking Language, Connecting Cultures.{" "}
              <span> Where Communication Transcends Boundaries.</span>
            </p>
            <div className={styles.sloganTwoBox}>
              <p className={styles.sloganTwo}>
                Immerse Yourself in Language, Embrace a Global Perspective.{" "}
                <span>Your Gateway to Cultural Fluency.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
