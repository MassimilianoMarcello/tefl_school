import React from 'react';
import styles from './FaqPage.module.scss'; 
import {Faq} from '@/Types/Faq'; 



interface FaqPageProps {
    faqs: Faq[];
  }
  
  const FaqPage: React.FC<FaqPageProps> = ({ faqs }) => {
    const generalFaqs = faqs.filter(faq => faq.category === 'general');
    const technicalFaqs = faqs.filter(faq => faq.category === 'technical');
    const livingCostsFaqs = faqs.filter(faq => faq.category === 'living costs');
  
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <h2>General Questions</h2>
          <ul>
            {generalFaqs.map(faq => (
              <li key={faq._id}>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.box}>
          <h2>Paperwork and Documentation</h2>
          <ul>
            {technicalFaqs.map(faq => (
              <li key={faq._id}>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.box}>
          <h2>Questions about Florence: Living in Italy</h2>
          <ul>
            {livingCostsFaqs.map(faq => (
              <li key={faq._id}>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default FaqPage;