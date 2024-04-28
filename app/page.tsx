import Image from "next/image";
import s from "./page.module.scss";
import SlideItem from "@/components/SlideItem/SlideItem";
import type { SlideItem as SlideItemType } from "@/Types/SlideItem"; 
import MainPageWrapper from '@/components/MainPage/_MainPageWrapper';

// import B_Design from "@/components/MainPage/B_Design";


export default function Home() {
  return (
    <main className={s.main}>
       {/* <SlideItem  /> */}
       {/* <B_Design/> */}
    <MainPageWrapper/>
     <h1 className={s.h1}>tefl website</h1>
   
    </main>
  );
}
