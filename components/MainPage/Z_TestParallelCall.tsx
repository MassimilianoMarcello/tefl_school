


// import { getHomePage } from '@/sanity/sanity.query';
// import FirstComponent from './A_FirstComponent.tsx';
// import SecondComponent from "./B_SecondComponent";
// import ThirdComponent from "./C_ThirdComponent";
// import { HomePage } from '@/Types/Homepage';



// const MainPageWrapper = async () => {
//   try {
//     const components = [FirstComponent, SecondComponent,ThirdComponent]; // Array dei componenti da includere
  
//     // Genera un array di promesse, una per ogni componente, chiamando getHomePage()
//     const homePageDataPromises = components.map(Component => getHomePage());
  
//     const componentDataArray = await Promise.all(homePageDataPromises);
  
//     // Verifica che tutti i set di dati non siano nulli
//     if (componentDataArray.some((data: any) => !data)) {
//       console.error('Errore nel recupero dei dati: uno o più set di dati sono nulli');
//       return null;
//     }
  
//     return (
//       <>
//         {/* Mappa i dati dei componenti e passali come props ai componenti figlio */}
//         {components.map((Component, index) => (
//           <Component key={index} data={componentDataArray[index]} />
//         ))}
//       </>
//     );
//   } catch (error) {
//     console.error('Errore nel recupero dei dati:', error);
//     return null;
//   }
// };

// export default MainPageWrapper;


// import { getHomePage } from '@/sanity/sanity.query';
// import FirstComponent from './A_FirstComponent.tsx';
// import SecondComponent from "./B_SecondComponent";
