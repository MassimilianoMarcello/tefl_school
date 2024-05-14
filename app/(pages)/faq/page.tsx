import React from 'react';

import FaqPage from '@/components/FAQ/FaqPage';
import { getAllFaqs } from '@/sanity/sanity.query';



const Faq = async () => {
  const faqs = await getAllFaqs();

  return <FaqPage faqs={faqs} />;
};

export default Faq;