// File: Types/Page.ts
export interface AccreditedType {
    _id: string;
    mainImage: {
      asset: {
        url: string;
      };
      crop?: object;
      hotspot?: object;
    };
    mainTitle: string;
    pageType: {
      current: string;
    };
    sections: Array<{
      _key: string;
      order: number;
      title: string;
      subtitle: string;
      text:string;
      image: {
        asset: {
          url: string;
        };
        crop?: object;
        hotspot?: object;
      };
      content: any[];
    }>;
  }
  
  
    