import React from 'react';

import FaqPage from '@/components/FAQ/FaqPage';
import { getAllFaqs } from '@/sanity/sanity.query';
import { revalidateTag } from "next/cache";
import FaqTopPageData from '@/components/FAQ/FaqTopPageData';



const Faq = async () => {
  revalidateTag('collection')
  const faqs = await getAllFaqs();


  return <>
  <FaqTopPageData/>
    <FaqPage faqs={faqs} />;
  </>
  

};

export default Faq;