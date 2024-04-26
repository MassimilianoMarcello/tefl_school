// import Image from "next/image";
// import { getSlideItem } from "@/sanity/sanity.query";
// import type { SlideItem } from "@/Types/SlideItem";


// export default async function SlideItem() {
//   const profile: SlideItem[] = await getSlideItem();

// export default SlideItem

// 22222222222222
// import Image from "next/image";
// import { getSlideItem } from "@/sanity/sanity.query";
// import type { SlideItem } from "@/Types/SlideItem";

// export default async function SlideCarousel() {
//   const slideItems: SlideItem[] = await getSlideItem();
//   const firstSlideItem = slideItems[0]; // Accedi al primo elemento dell'array

//   if (!firstSlideItem) {
//     // Gestisci il caso in cui non ci sia nessun elemento nell'array
//     return null;
//   }

//   return (
//     <div className="carousel">
//       <div key={firstSlideItem._id} className="carousel-item">
//         <Image src={firstSlideItem.image} alt={firstSlideItem.alt} width={200} height={200} />
//         <div className="carousel-text">
//           <h2>{firstSlideItem.title}</h2>
//           <p>{firstSlideItem.subtitle}</p>
//           <p>{firstSlideItem.text}</p>
//           <a href={firstSlideItem.slug}>{firstSlideItem.linkText}</a>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"
// 333333333333333333

import { useState, useEffect } from 'react';
import Image from "next/image";
import { getSlideItem } from "@/sanity/sanity.query";
import type { SlideItem } from "@/Types/SlideItem";

export default function SlideCarousel() {
  const [slideItems, setSlideItems] = useState

  ([]); // Inizializzo lo stato slideItems come un array vuoto
const [index, setIndex] = useState(0); // Inizializzo lo stato index a 0

useEffect(() => {
async function fetchSlideItems() {
const items: SlideItem[] = await getSlideItem();
setSlideItems(items);
}
fetchSlideItems();
}, []);

const prevSlide = () => {
setIndex((prevIndex) => (prevIndex === 0 ? slideItems.length - 1 : prevIndex - 1));
};

const nextSlide = () => {
setIndex((prevIndex) => (prevIndex === slideItems.length - 1 ? 0 : prevIndex + 1));
};

return (
<div className="carousel">
{slideItems.length > 0 && (
<div key={slideItems[index]._id} className="carousel-item">
<Image src={slideItems[index].image} alt={slideItems[index].alt} width={1200} height={600} />
<div className="carousel-text">
<h2>{slideItems[index].title}</h2>
<p>{slideItems[index].subtitle}</p>
<p>{slideItems[index].text}</p>
<a href={slideItems[index].slug}>{slideItems[index].linkText}</a>
</div>
</div>
)}
<div className="controls">
<button onClick={prevSlide}>Prev</button>
<button onClick={nextSlide}>Next</button>
</div>
</div>
);
}
