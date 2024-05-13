

export interface CommonTop {
  _id: string;
  _rev: string;
  title: string;
  subtitle: string;
  backgroundImage: {
    asset: {
      _id: string;
      url: string;
    };
    crop?: {
      // Specifica i tipi per i dati di crop
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    hotspot?: {
      // Specifica i tipi per i dati di hotspot
      height: number;
      width: number;
      x: number;
      y: number;
    };
    alt: string;
  };
}

  