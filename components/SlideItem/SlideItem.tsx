

"use client"


import { useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import { getSlideItem } from "@/sanity/sanity.query";
import styles from './SlideCarousel.module.scss'; // Importa il file Sass

import type { SlideItem as SlideItemType } from "@/Types/SlideItem";

export default function SlideCarousel() {
  const [slideItems, setSlideItems] = useState([] as SlideItemType[]);
  const [index, setIndex] = useState(0);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchSlideItems = async () => {
      if (!fetched) {
        const items: SlideItemType[] | null = await getSlideItem();
        if (items) {
          setSlideItems(items);
          setFetched(true);
        }
      }
    };
    fetchSlideItems();
  }, [fetched]);

  const prevSlide = useCallback(() => setIndex((prevIndex) => (prevIndex === 0 ? slideItems.length - 1 : prevIndex - 1)), [slideItems]);
  const nextSlide = useCallback(() => setIndex((prevIndex) => (prevIndex === slideItems.length - 1 ? 0 : prevIndex + 1)), [slideItems]);

  return (
    <>
      {slideItems.length > 0 && (
        <div key={slideItems[index]._id} className={styles['carousel-item']}>
          <Image src={slideItems[index].image} alt={slideItems[index].alt} width={1400} height={200} />
          <div className={styles['carousel-text']}>
            <h2>{slideItems[index].title}</h2>
            <p>{slideItems[index].subtitle}</p>
            <p>{slideItems[index].text}</p>
            <a href={slideItems[index].slug}>{slideItems[index].linkText}</a>
          </div>
          <div className={styles.controls}>
            <button className={styles.button} onClick={prevSlide}>Prev</button>
            <button className={styles.button} onClick={nextSlide}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}
