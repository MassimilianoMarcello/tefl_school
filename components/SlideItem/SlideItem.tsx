// import Image from "next/image";
// import { getSlideItem } from "@/sanity/sanity.query";
// import type { SlideItem } from "@/Types/SlideItem";


// export default async function SlideItem() {
//   const profile: SlideItem[] = await getSlideItem();

// export default SlideItem

import Image from "next/image";
import { getSlideItem } from "@/sanity/sanity.query";
import type { SlideItem } from "@/Types/SlideItem";

export default async function SlideCarousel() {
  const slideItems: SlideItem[] = await getSlideItem();

  return (
    <div className="carousel">
      {slideItems.map((item) => (
        <div key={item._id} className="carousel-item">
          <Image src={item.image} alt={item.alt} width={200} height={200} /> {/* Definisci larghezza e altezza */}
          <div className="carousel-text">
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <p>{item.text}</p>
            <a href={item.slug}>{item.linkText}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
