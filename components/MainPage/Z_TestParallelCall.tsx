// import { getHomePage } from '@/sanity/sanity.query';
// import FirstComponent from './A_FirstComponent.tsx';
// import SecondComponent from "./B_SecondComponent";

// const MainPageWrapper = async () => {
//   try {
//     const [firstComponentData, secondComponentData] = await Promise.all([
//       getHomePage(),
//       getHomePage()
//     ]);

//     // Verifica che entrambi i set di dati non siano nulli
//     if (!firstComponentData || !secondComponentData) {
//       console.error('Errore nel recupero dei dati: uno o entrambi i set di dati sono nulli');
//       return null;
//     }

//     return (
//       <>
//         {/* Passa i dati come props ai componenti figlio */}
//         <FirstComponent data={firstComponentData} />
//         <SecondComponent data={secondComponentData} />
//       </>
//     );
//   } catch (error) {
//     console.error('Errore nel recupero dei dati:', error);
//     return null;
//   }
// };

// export default MainPageWrapper;
