import styles from "./Accredited.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import { AccreditedType } from "@/Types/Accredited";
import { PortableText } from "@portabletext/react";
import ApplyTodayButton from "../Buttons/ApplyToday";
import EnrollNowButton from "../Buttons/EnrollNow";

interface AccreditedProps {
  data: AccreditedType;
  pageType: string;
  pageIndex: number;
}const accreditatLogo = '/assets/accreditat_logo.webp'

export default function AccreditedPage({ data, pageIndex }: AccreditedProps) {
  const { mainTitle, sections, mainImage } = data;

  const topMainContainerClass = `${styles.topMainContainer} ${styles[`page-${pageIndex}`]}`;

  // Estrai l'URL dell'immagine principale
  const mainImageUrl = mainImage?.asset?.url
    ? urlFor(mainImage)
        .width(400 * 1.5)
        .height(600 * 1.5)
        .url()
    : null;

  return (
    <div className={topMainContainerClass}>
      <h1>{mainTitle}</h1>
      <div className={styles.imageTextContainer}>
        {mainImageUrl && (
          <Image
            className={styles.mainImage}
            src={mainImageUrl}
            alt={mainTitle}
            sizes="100vw"
            width={100}
            height={150}
          />
        )}
        <div>
               <Image
                      className={styles.accreditatImage}
                      src={accreditatLogo}
                      alt='accreditat logo'
                      sizes="100vw"
                      width={200}
                      height={50}
                    />
        <p>
          Our course has been in operation in the Florence city center and most
          recently in Borgo San Lorenzo since 2006, and we have trained over a
          thousand newly qualified TESOL teachers who have gone on to work all
          over the world. Our graduates are sought-after by local and
          international language schools due to their ability to interview
          extremely well. After they’ve finished the TEFL Tuscany course, they
          are consistently ready to take on any teaching challenge and thrive
          while doing so!
        </p>
        </div>
      </div>
      {/* <div className={styles.applyButton}>
           <ApplyTodayButton/>
           </div> */}

      <span className={styles.square1}></span>
      <span className={styles.square2}></span>
      <div className={styles[`gridContainer-${pageIndex}`]}>
        {sections.map((section, index) => {
          const { title, subtitle, text, image, content, _key, order } = section;
          const imageUrl = image?.asset
            ? urlFor(image).width(1400).height(800).url()
            : null;
          const sectionClassName = `${styles.sectionContainer} ${styles[`section-${index}`]}`;
          const imageClassName = `${styles.imageBackground} ${styles[`image-${index}`]}`;

          return (
            <div key={_key} className={sectionClassName}>
              <div className={styles[`section-${index}`]}>
                <div className={styles.imageTextContainer2}>
                  {imageUrl ? (
                    <Image
                      className={imageClassName}
                      src={imageUrl}
                      alt={title}
                      sizes="100vw"
                      width={400}
                      height={300}
                    />
                  ) : (
                    <div className={styles.placeholderImage}></div>
                  )}
               
                    <p>
                      <b>Brian Tomlinson </b> has worked as a teacher, teacher trainer,
                      curriculum developer, film extra, football coach and
                      university academic in Indonesia, Italy, Japan, Nigeria, Oman,
                      Singapore, UK, Vanuatu and Zambia, as well as giving invited
                      presentations in over seventy countries. He is the Founder and
                      President of MATSDA (the international Materials Development
                      Association), a Visiting Professor at the University of
                      Liverpool and a TESOL Professor at Anaheim University. He has
                      over one hundred publications on materials development,
                      language awareness and teacher development and has recently
                      co-authored with Hitomi Masuhara <i>The Complete Guide to the
                      Theory and Practice of Materials Development for Language
                      Learning</i> (Wiley, 2018) and <i>SLA Applied: Connecting Theory and
                      Practice</i> (Cambridge University Press, 2021).
                    </p>
                 
                  </div>
                </div>
              </div>
        
          );
        })}
      </div>
    </div>
  );
}

