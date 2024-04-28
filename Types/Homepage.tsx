// Definizione del tipo HomePage
export type HomePage = {
  _id: string;
    mainTitle: string;
    mainText: string;
    bannerImage: string;
    components: {
      _key: string;
      title: string;
      text: string;
      image: string;
    }[];
  };
  
