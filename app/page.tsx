import Image from "next/image";
import s from "./page.module.scss";
import SlideItem from "@/components/SlideItem/SlideItem";


export default function Home() {
  return (
    <main className={s.main}>
       <SlideItem  />
     <h1 className={s.h1}>tefl website</h1>
   
    </main>
  );
}
