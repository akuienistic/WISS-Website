import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Women Ignite South Sudan has transformed lives, providing much-needed support and education to women in dire situations. Their programs uplift and inspire women to achieve their dreams.",
      name: "Hon. Thabo Aboush",
      rating: 5,
    },
    {
      id: 2,
      text: "The organization has contributed significantly to raising awareness about women's issues. They are a beacon of hope for many.",
      name: "Hon. Atong Majok",
      rating: 5,
    },
    {
      id: 3,
      text: "Women Ignite South Sudan creates a supportive network for women, fostering resilience and collaboration. Their impact on the community is profound and uplifting.",
      name: "Edwina Amou",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-header">
              <h2>Feedback</h2>
              <p>
                We value your feedback for the organisation development and
                progress!
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="testimonials-container">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-text">
                    <blockquote>"{testimonial.text}"</blockquote>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <h5>{testimonial.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="partners-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <p className="partners-text">
                Women Ignite South Sudan empowers women through community
                engagement and education. We support various initiatives to
                uplift women's roles in society. The following organisations
                have been part of our journey:
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-2 col-4 mb-4">
              <div className="partner-logo">
                <img src="AAML.webp" alt="Partner 1" className="partner-img" />
              </div>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <div className="partner-logo">
                <img
                  src="UNMISS.webp"
                  alt="Partner 2"
                  className="partner-img"
                />
              </div>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <div className="partner-logo">
                <img
                  src="Ministry.webp"
                  alt="Partner 3"
                  className="partner-img"
                />
              </div>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <div className="partner-logo">
                <img src="RRC.svg" alt="Partner 4" className="partner-img" />
              </div>
            </div>
            <div className="col-md-2 col-4 mb-4">
              <div className="partner-logo">
                <img src="UN.webp" alt="Partner 5" className="partner-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
