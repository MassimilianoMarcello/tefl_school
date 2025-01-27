import { getPages } from "@/sanity/sanity.query";
import CommonPage from "@/components/Why-Florence-Test/CommonPage";

import React from 'react'

const WhyFlorence = async () => {
  const dataPage = await getPages("06c27cc1-0da9-40be-bbbb-ffa6c28c8581"); // Passa l'ID
  return (
    <div>
      <CommonPage
        data={dataPage}
        dynamicStyle="ourteachersContainer"
      />
    </div>
  )
}

export default WhyFlorence


