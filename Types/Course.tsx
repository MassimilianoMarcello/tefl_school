export interface Course {
    _id: string;
    name: string;
    startDate: string; // Assumendo che le date siano rappresentate come stringhe
    endDate: string;
    price: number; // Assumendo che il prezzo sia rappresentato come un numero
    completionTimeWeeks: number;
    slug: string;
    description: string;
    hours: number;
    level: string;
    photo: string; // Assumendo che l'URL dell'immagine sia rappresentato come una stringa
  }
  