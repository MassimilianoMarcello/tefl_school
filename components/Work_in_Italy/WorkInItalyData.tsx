import React from "react";
import WorkingInItalyTopPage from "@/common-components/common-top-page/topPage";
import { getCommonTopPage } from "@/sanity/sanity.query";
import { revalidateTag } from "next/cache";

const WorkInItalyData = async () => {
  revalidateTag("collection");
  const dataTopPage = await getCommonTopPage();
  return (
    <div>
      <WorkingInItalyTopPage
        data={dataTopPage}
        dynamicStyle="workingInItalyTopPage"
        id="ee6d9b24-7a59-4c2f-a31b-19cf7aa81a2d"
      />
    </div>
  );
};

export default WorkInItalyData;
