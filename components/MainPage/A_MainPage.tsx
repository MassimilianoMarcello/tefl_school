
import { getHomePage } from '@/sanity/sanity.query'
import Image from "next/image";
import type {HomePage as HomeType} from '@/Types/Homepage';




import type { HomePage } from '@/Types/Homepage';

export default async function HomePage() {
  // Ottieni i dati della homepage
  const homepage: HomePage[] = await getHomePage();

  return (
    <main className="pannarru">
      <section className="busicco">
        {/* Itera su ciascun oggetto HomePage */}
        {homepage.map((data) => (
          <div key={data._id} className="gavini">
            <h1 className="alicion">{data.mainTitle}</h1>
            <p className="tamarindo">{data.mainText}</p>
            <Image src={data.bannerImage} alt={data.mainTitle} width={1400} height={600} />
            
            {/* Itera su ciascun componente di HomePage */}
            {data.components.map((component) => (
              <div key={component._key}>
                <h2>{component.title}</h2>
                <p>{component.text}</p>
                <Image src={component.image} alt="Component Image" width={400} height={300} />
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
