import { Testimonial } from "@/Types/Testimonials";
import Image from "next/image";
import styles from "./reviews.module.scss";
import Link from "next/link";
import { urlFor } from "@/sanity/sanity.client";

interface TestimonialProps {
  data: Testimonial[]; // Accetta i dati come prop
}

export default function E_Testimonials({ data }: TestimonialProps) {
  // const sortedData = data.sort((a, b) => data.indexOf(b) - data.indexOf(a));
  // const latestReviews = data.slice(0, 3);
  const latestReviews = data;
  return (
    <main className={styles.testimonialOneMain}>
      <div className={styles.titleBox}>
        <h1>Students' Reviews:</h1>
      </div>

      <section className={styles.testimonialTwoSection}>
        {/* Verifica se data è definito prima di eseguire l'iterazione */}
        {latestReviews &&
          latestReviews.map((testimonial) => (
            <div key={testimonial._id} className={styles.testimonialBox}>
              <Image
                className={styles.testimonialImage}
                src={urlFor(testimonial.image).width(300).height(300).url()}
                // src={testimonial.image}
                alt={testimonial.name}
                width={160}
                height={200}
              />

              <div className={styles.testimonialText}>
                <p className={styles.testimonialTitle}>"{testimonial.title}"</p>
              </div>
              <p className={styles.testimonialReview}>{testimonial.review}</p>
              <div className={styles.testimonialData}>
                <h1 className={styles.testimonialName}>{testimonial.name}</h1>

                <p>
                  {testimonial.city}, {testimonial.state}.
                </p>
              </div>
              
            </div>
            
          ))}
             </section>
             {/* <Link href={"/testimonials"} className={styles.testimonialsLink}> More reviews</Link> */}

    </main>
  );
}
