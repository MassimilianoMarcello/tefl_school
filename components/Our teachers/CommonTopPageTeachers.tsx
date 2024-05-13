import styles from "./teachers.module.scss";
import { getCommonTopPage } from "@/sanity/sanity.query";

import Image from "next/image";
import { CommonTop as CommonTopType } from "@/Types/CommonTop";
import Link from "next/dist/client/link";
import { revalidateTag } from "next/cache";

interface CommonTopTypeProps {
  data: CommonTopType[]; // Accetta i dati come prop
}

export default function CommonTopPageTeachers({ data }: CommonTopTypeProps) {
  revalidateTag("collection");

  return <>
  <div>
{data && data.map((topPage,index)=>(
    <div key={topPage._id}>
    <Image src={topPage.image} alt={topPage.title}/>
    <h1>{topPage.title}</h1>
    <p>{topPage.subtitle}</p>
    
    
    </div>
    ))}
  
  </div>
  
  
  </>;
}
