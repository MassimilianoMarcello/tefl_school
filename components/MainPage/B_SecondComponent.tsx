


import Image from "next/image";
import type { HomePage } from '@/Types/Homepage';

interface SecondComponentProps {
  data: HomePage[]; // Accetta i dati come prop
}

export default function SecondComponent({ data }: SecondComponentProps) {
  // Verifica se data è definito prima di accedere ai suoi elementi
  const secondComponent = data && data[0]?.components[0];

  return (
    <main className="pannarru">
      <section className="busicco">
        {/* Renderizza solo il secondo componente della prima HomePage se data è definito */}
        {secondComponent && (
          <div key={secondComponent._key} className="gavini">
            <h1 className="alicion">{secondComponent.title}</h1>
            <p className="tamarindo">{secondComponent.text}</p>
            <Image src={secondComponent.image} alt="Component Image" width={400} height={300} />
          </div>
        )}
      </section>
    </main>
  );
}
