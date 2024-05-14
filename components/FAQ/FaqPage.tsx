'use client'


import React, {useState} from 'react';
import styles from './FaqPage.module.scss'; 
import {Faq} from '@/Types/Faq'; 








interface FaqPageProps {
  faqs: Faq[];
}

const FaqPage: React.FC<FaqPageProps> = ({ faqs }) => {
  const [openFaqs, setOpenFaqs] = useState<{ [key: string]: boolean }>({});

  const toggleFaq = (id: string) => {
    setOpenFaqs(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const generalFaqs = faqs.filter(faq => faq.category === 'general');
  const technicalFaqs = faqs.filter(faq => faq.category === 'technical');
  const livingCostsFaqs = faqs.filter(faq => faq.category === 'living costs');

  const renderFaqs = (faqs: Faq[]) => (
    <ul>
      {faqs.map(faq => (
        <li key={faq._id} className={`${styles.faqItem} ${openFaqs[faq._id] ? styles.open : ''}`}>
          <div className={styles.question} onClick={() => toggleFaq(faq._id)}>
            <strong>{faq.question}</strong>
            <button className={styles.toggleButton}>
              {openFaqs[faq._id] ? '-' : '+'}
            </button>
          </div>
          <div className={styles.answerWrapper}>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>General Questions</h2>
        {renderFaqs(generalFaqs)}
      </div>
      <div className={styles.box}>
        <h2>Paperwork and Documentation</h2>
        {renderFaqs(technicalFaqs)}
      </div>
      <div className={styles.box}>
        <h2>Questions about Florence: Living in Italy</h2>
        {renderFaqs(livingCostsFaqs)}
      </div>
    </div>
  );
};

export default FaqPage;
