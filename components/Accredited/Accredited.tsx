import styles from "./Accredited.module.scss";
import { getCommonTopPage } from "@/sanity/sanity.query";
import { urlFor } from "@/sanity/sanity.client";


import Image from "next/image";
import { CommonTop as CommonTopType } from "@/Types/CommonTop";
import Link from "next/dist/client/link";
import { revalidateTag } from "next/cache";

interface CommonTopTypeProps {
  data: CommonTopType[]; // Accetta i dati come prop
  id: string;
}

export default function CommonTopPageTeachers({ data,id }: CommonTopTypeProps) {
  revalidateTag("collection");

  // Filtra i dati per trovare solo l'elemento desiderato
  const specificItem = data.find(item => item._id === id);

  if (!specificItem) {
    return null; // Se l'elemento specifico non esiste, ritorna null o gestisci di conseguenza
  }

  const imageUrl = urlFor(specificItem.backgroundImage).url();


  const { title, subtitle } = specificItem;

  return (
    <div className={styles.topMainContainer} >
      {/* Utilizza l'URL dell'immagine nell'elemento Image */}
      <Image
        className={styles.imageBackground}
        src={imageUrl}
        // src={imageUrl}
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
      <h1 className={styles.mainTitle}>{title}</h1>
      <p className={styles.mainText}>{subtitle}</p>
      </div>
      <span className={styles.square1}></span>
        <span className={styles.square2}></span>

    </div>
  )};