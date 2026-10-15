import { testimonial } from "../data/testimonial";

export function Testimonial() {
  return (
    <section
      id="testimonio"
      className="section"
      aria-labelledby="testimonio-heading"
    >
      <div className="section-inner testimonial">
        <p className="section-kicker" id="testimonio-heading">
          {testimonial.kicker}
        </p>
        <blockquote className="testimonial-quote">
          <p>{testimonial.quote}</p>
        </blockquote>
      </div>
    </section>
  );
}
