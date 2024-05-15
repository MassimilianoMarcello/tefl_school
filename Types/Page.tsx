export interface Page {
    _id: string;
    mainTitle: string;
    sections: Section[];
  }
  
  interface Section {
    order: number;
    title: string;
    subtitle: string;
    image?: Image;
    content: Content[];
    richText: RichTextItem[];
  }
  
  interface Image {
    asset: {
      url: string;
      metadata: {
        crop: Crop;
        hotspot: Hotspot;
      };
    };
  }
  
  interface Crop {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }
  
  interface Hotspot {
    x: number;
    y: number;
    height: number;
    width: number;
  }
  
  interface Content {
    // Definisci la struttura per altri tipi di contenuto se necessario
  }
  
  interface RichTextItem {
    // Definisci la struttura degli elementi del testo ricco se necessario
  }
  
  // Definizione dei tipi per gli array
  type ContentArray = Content[];
  type RichTextArray = RichTextItem[];
  