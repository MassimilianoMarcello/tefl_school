
import { Testimonial} from '@/Types/Testimonials';
import Image from "next/image";



interface TestimonialProps {
    data: Testimonial[]; // Accetta i dati come prop
  }

export default function E_Testimonials({ data }: TestimonialProps) {
    return (
      <main className="pannarru">
        <section className="busicco">
          {/* Verifica se data è definito prima di eseguire l'iterazione */}
          {data && data.map((testimonial) => (
            <div key={testimonial._id} className="gavini">
              <h1 className="alicion">{testimonial.name}</h1>
              <p className="tamarindo">{testimonial.title}</p>
              <Image src={testimonial.image} alt={testimonial.name} width={400} height={400} />
              <h1 className="alicion">{testimonial.review}</h1>
              <h1 className="alicion">{testimonial.state}</h1>
              <h1 className="alicion">{testimonial.city}</h1>
             
            </div>
          ))}
        </section>
      </main>
    );
  }