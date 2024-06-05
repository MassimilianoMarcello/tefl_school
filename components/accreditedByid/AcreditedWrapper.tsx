// 'use server'

// import {  getCommonTopPage } from "@/sanity/sanity.query";
// import CommonTopPageTeachers from "@/components/Accredited/Accredited";




 
// import { revalidateTag } from 'next/cache'



// const TeacherPageWrapper = async () => {
//   revalidateTag('collection')
//   try {
//     const [
//       commonTopPageData,
//       commonTopPageData2,
  
//     ] = await Promise.all([
//       getCommonTopPage(),
//       getCommonTopPage(),

//     ]);

//     // Verifica che entrambi i set di dati non siano nulli
//     if (
//       ! commonTopPageData  ||
//       ! commonTopPageData2 

//     ) {
//       console.error(
//         "Errore nel recupero dei dati: uno o entrambi i set di dati sono nulli"
//       );
//       return null;
//     }

//     return (
//       <>
//         {/* Passa i dati come props ai componenti figlio */}
//         <CommonTopPageTeachers data={commonTopPageData  } id="6473cb9f-c4a9-4e5d-bbca-722ff643ec62"/>
//         <CommonTopPageTeachers data={commonTopPageData2 } id="33363b6c-26c3-445d-aad8-0f638cb2c92e"/>
      
   
   
//         {/* <CommonTopPage data={commonTopPageData } />  */}
 
       

//       </>
//     );
//   } catch (error) {
//     console.error("Errore nel recupero dei dati:", error);
//     return null;
//   }
// };

// export default TeacherPageWrapper;