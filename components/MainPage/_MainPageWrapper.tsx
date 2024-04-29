


import { getHomePage,getCourse } from '@/sanity/sanity.query';
import FirstComponent from './A_FirstComponent.tsx';
import SecondComponent from "./B_SecondComponent";
import ThirdComponent from "./C_ThirdComponent";
import D_CoursesPreview from './D_CoursesPreview';


const MainPageWrapper = async () => {
  try {
    const [firstComponentData, secondComponentData,thirdComponentData,courseData] = await Promise.all([
      getHomePage(),
      getHomePage(),
      getHomePage(),
      getCourse()
    ]);

    // Verifica che entrambi i set di dati non siano nulli
    if (!firstComponentData  || !secondComponentData  || !thirdComponentData || !courseData) {
      console.error('Errore nel recupero dei dati: uno o entrambi i set di dati sono nulli');
      return null;
    }

    return (
      <>
        {/* Passa i dati come props ai componenti figlio */}
        <FirstComponent data={firstComponentData} />
        <SecondComponent data={secondComponentData} />
        <ThirdComponent data={thirdComponentData} />
        <D_CoursesPreview data={courseData}/>
      </>
    );
  } catch (error) {
    console.error('Errore nel recupero dei dati:', error);
    return null;
  }
};

export default MainPageWrapper;
