




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



// import { getHomePage } from '@/sanity/sanity.query';
// import FirstComponent from './A_FirstComponent.tsx';
// import SecondComponent from "./B_SecondComponent";

// const getHomePageData = async () => {
//   try {
//     return await getHomePage();
//   } catch (error) {
//     console.error('Errore nel recupero dei dati di HomePage:', error);
//     return null;
//   }
// };

// const MainPageWrapper = async () => {
//   try {
//     const components = [FirstComponent, SecondComponent]; // Array dei componenti da includere
  
//     // Genera un array di promesse, una per ogni componente, chiamando getHomePageData()
//     const homePageDataPromises = components.map(Component => getHomePageData());
  
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


import { getHomePage } from '@/sanity/sanity.query';
import FirstComponent from './A_FirstComponent.tsx';
import SecondComponent from "./B_SecondComponent";
import { HomePage } from '@/Types/Homepage';



const MainPageWrapper = async () => {
  try {
    const components = [FirstComponent, SecondComponent]; // Array dei componenti da includere
  
    // Genera un array di promesse, una per ogni componente, chiamando getHomePage()
    const homePageDataPromises = components.map(Component => getHomePage());
  
    const componentDataArray = await Promise.all(homePageDataPromises);
  
    // Verifica che tutti i set di dati non siano nulli
    if (componentDataArray.some((data: any) => !data)) {
      console.error('Errore nel recupero dei dati: uno o più set di dati sono nulli');
      return null;
    }
  
    return (
      <>
        {/* Mappa i dati dei componenti e passali come props ai componenti figlio */}
        {components.map((Component, index) => (
          <Component key={index} data={componentDataArray[index]} />
        ))}
      </>
    );
  } catch (error) {
    console.error('Errore nel recupero dei dati:', error);
    return null;
  }
};

export default MainPageWrapper;
