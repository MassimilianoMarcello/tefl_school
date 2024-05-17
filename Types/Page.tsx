// File: Types/Page.ts
export interface PageType {
  _id: string;
  mainTitle: string;
  pageType: {
    current: string;
  };
  sections: Array<{
    _key: string;
    order: number;
    title: string;
    subtitle: string;
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


  