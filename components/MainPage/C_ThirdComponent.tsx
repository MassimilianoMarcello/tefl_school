import Image from "next/image";
import type { HomePage } from '@/Types/Homepage';

interface ThirdComponentProps {
    data: HomePage[]; // Accetta i dati come prop
  }
  
  export default function ThirdComponent({ data }: ThirdComponentProps) {
    // Verifica se data è definito prima di accedere ai suoi elementi
    const thirdComponent = data && data[0]?.components[1];
  
    return (
      <main className="pannarru">
        <section className="busicco">
          {/* Renderizza solo il secondo componente della prima HomePage se data è definito */}
          {thirdComponent && (
            <div key={thirdComponent._key} className="gavini">
                <h1>kiss my</h1>
              <h1 className="alicion">{thirdComponent.title}</h1>
              <p className="tamarindo">{thirdComponent.text}</p>
              <Image src={thirdComponent.image} alt="Component Image" width={400} height={300} />
            </div>
          )}
        </section>
      </main>
    );
  }