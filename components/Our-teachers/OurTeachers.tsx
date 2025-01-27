import React from "react";
import { getTeachers, getCommonTopPage } from "@/sanity/sanity.query";
import TopPageTeachers from "@/common-components/topPage";
import OurTeachersList from "./OutTeachersList";
import styles from "./teachers.module.scss";

const OurTeachers = async () => {
  const dataTopPage = await getCommonTopPage();
  const dataTeachers = await getTeachers();
  return (
    <>
      <TopPageTeachers
        data={dataTopPage}
        dynamicStyle="ourteachersContainer"
        id="d1b1177b-c086-4f38-86c6-ac32c794b342"
      />
      <span className={styles.titleTeachers}></span>
      <h1 className={styles.titleTeachers}>    At Tuscany TEFL School, we pride ourselves on providing top-tier
      education and training in Teaching English as a Foreign Language (TEFL).</h1>
      <span className={styles.titleTeachers}></span>
      <div className={styles.containerTeachersText}>
      <p className={styles.textTeachersIntroduction}>

        Our team of highly qualified and experienced teachers is passionate
        about helping you succeed in your journey to becoming a certified TEFL
        instructor. Each of our teachers holds internationally recognized TEFL
        certifications and has a wealth of experience in diverse teaching
        environments. 
      </p>
      <p className={styles.textTeachersIntroduction}>They bring a personalized approach to their teaching,
        ensuring that every student receives the support and guidance needed to
        excel. With a focus on practical skills, cultural awareness, and
        innovative teaching methods, our teachers are dedicated to preparing you
        for a successful career in teaching English abroad or online. Whether
        you are new to teaching or looking to enhance your skills, our teachers
        are here to guide you every step of the way. Join us and learn from the
        best in the field!</p>
        </div>
      <OurTeachersList data={dataTeachers} />
    </>
  );
};

export default OurTeachers;
