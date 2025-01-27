import React from 'react';
import { getCommonTopPage } from '@/sanity/sanity.query';
import OurCoursesCommonTopPage from '@/common-components/topPage';
import './TopPageCourse.module.scss'
  // import { revalidateTag } from 'next/cache'


import TextForTopPAge from './TextForTopPage';

const TopPageCourses = async () => {
  // revalidateTag('collection');
  const dataTopPage = await getCommonTopPage();
  return (
    <>
      <OurCoursesCommonTopPage
        data={dataTopPage}
        dynamicStyle="ourcoursesTopPage"
        id="97d80791-1917-490a-8aaa-a922d5427434"
      />

      <div className="fixed-container">
        <TextForTopPAge />
      </div>
    </>
  );
};

export default TopPageCourses;
