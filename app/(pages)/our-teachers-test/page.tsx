import styles from "./teachers.module.scss";

import TopPageTeachers from "@/common-components/topPage";
import { getCommonTopPage } from "@/sanity/sanity.query";

export default async function Page() {
  const data = await getCommonTopPage(); // Ottieni i dati da Sanity
  return (
    
    <TopPageTeachers
      data={data}
      dynamicStyle={styles.ourteachersContainer}
      id="d1b1177b-c086-4f38-86c6-ac32c794b342"
    />
  );
}