// Esempio di definizione del tipo PageType
export interface PageType {
  _id: string;
  mainTitle: string;
  sections: {
    _key: string;
    order: number;
    title: string;
    subtitle: string;
    image: {
      asset: {
        url: string;
      };
      crop?: any;
      hotspot?: any;
    };
    content: any[];
  }[];
}

  