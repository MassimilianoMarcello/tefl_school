


import Image from "next/image";
import { HomePage } from '@/Types/Homepage';

interface FirstComponentProps {
  data: HomePage[]; // Accetta i dati come prop
}

export default function FirstComponent({ data }: FirstComponentProps) {
  return (
    <main className="pannarru">
      <section className="busicco">
        {/* Verifica se data è definito prima di eseguire l'iterazione */}
        {data && data.map((homePage) => (
          <div key={homePage._id} className="gavini">
            <h1 className="alicion">{homePage.mainTitle}</h1>
            <p className="tamarindo">{homePage.mainText}</p>
            <Image src={homePage.bannerImage} alt={homePage.mainTitle} width={1400} height={600} />
          </div>
        ))}
      </section>
    </main>
  );
}
