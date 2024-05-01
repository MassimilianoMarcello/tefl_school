"use client";
import { getCourses } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";


type Props = {
  params: { slug: string };
};

export default async function Courses({ params }: Props) {
  const course = await getCourses(params.slug);

  return (
   <>
   <h1>{course.name}</h1>
   </>
  )
}