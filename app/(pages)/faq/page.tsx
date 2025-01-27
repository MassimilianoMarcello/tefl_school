import React from 'react';

import FaqPage from '@/components/FAQ/FaqPage';
import FaqCommonTopPage from '@/common-components/topPage';
import { getAllFaqs } from '@/sanity/sanity.query';
import { getCommonTopPage } from '@/sanity/sanity.query';
import { revalidateTag } from "next/cache";
import FaqTopPageData from '@/components/FAQ/FaqTopPageData';



const Faq = async () => {
  revalidateTag('collection')
  const faqs = await getAllFaqs();
  const dataTopPage = await getCommonTopPage();


  return <>
  <FaqCommonTopPage
     data={dataTopPage}
     dynamicStyle="faqContainer"
     id="e2f3f321-0fc0-4912-9abb-640ab8111aaa"
  />
    <FaqPage faqs={faqs} />;
  </>
  

};

export default Faq;

function getTeachers() {
  throw new Error('Function not implemented.');
}
