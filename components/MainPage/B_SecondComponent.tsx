import { getHomePage } from '@/sanity/sanity.query'
import Image from "next/image";
import type {HomePage } from '@/Types/Homepage';


export default async function SecondComponent() {
    // Ottieni i dati della homepage
    const homepage: HomePage[] = await getHomePage();
  
    // Estrai il secondo componente dalla prima HomePage
    const secondComponent = homepage[0]?.components[0];
  
    return (
      <main className="pannarru">
        <section className="busicco">
          {/* Renderizza solo il secondo componente della prima HomePage */}
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
  




