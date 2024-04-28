// import FirstComponent from './A_FirstComponent.tsx';
// // import SecondComponent from './B_SecondComponent.jsx';
// import SecondComponent from "./B_SecondComponent";

// const _MainPageWrapper = () => {
//   return (<>
//   <FirstComponent/>
//   <SecondComponent/>
//   </>
   
//   )
// }

// export default _MainPageWrapper
"use client"

import { useEffect, useState } from 'react';
import { getHomePage } from '@/sanity/sanity.query';
import FirstComponent from './A_FirstComponent.tsx';
import SecondComponent from "./B_SecondComponent";

const _MainPageWrapper = () => {
  const [data, setData] = useState([]); // Inizializza lo stato con un array vuoto

  useEffect(() => {
    // Funzione per il fetching parallelo dei dati
    const fetchData = async () => {
      try {
        // Esegui il fetching parallelo dei dati
        const [firstComponentData, secondComponentData] = await Promise.all([
          getHomePage(),
          getHomePage() // Chiamata duplicata, puoi aggiungere altre chiamate se necessario
        ]);

        // Imposta i dati nello stato
        setData([firstComponentData, secondComponentData]);
      } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
      }
    };

    // Richiama la funzione per il fetching dei dati
    fetchData();
  }, []); // [] indica che useEffect viene eseguito solo al montaggio del componente

  return (
    <>
      {/* Passa i dati come props ai componenti figlio */}
      <FirstComponent data={data[0]} />
      <SecondComponent data={data[1]} />
    </>
  );
};

export default _MainPageWrapper;
