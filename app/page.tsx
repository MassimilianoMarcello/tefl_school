import Image from "next/image";
import s from "./page.module.scss";
import SlideItem from "@/components/SlideItem/SlideItem";
import type { SlideItem as SlideItemType } from "@/Types/SlideItem"; 
import HomePage from "@/components/MainPage/A_MainPage";
// import B_Design from "@/components/MainPage/B_Design";


export default function Home() {
  return (
    <main className={s.main}>
       {/* <SlideItem  /> */}
       {/* <B_Design/> */}
       <HomePage/>
     <h1 className={s.h1}>tefl website</h1>
   
    </main>
  );
}
