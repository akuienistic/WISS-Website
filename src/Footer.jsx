import "./Footer.css";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="footer-info">
              <h3>
                Women<span>Ignite</span>SSD
              </h3>
              <p>
                Empowering women through education, advocacy, and community
                engagement to create a more equitable and inclusive society in
                South Sudan.
              </p>
              <div className="social-links mt-4">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-1 mb-md-0">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#events">Events</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <p>+211 910 008 300</p>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <p>Hai Amarat, Juba - South Sudan</p>
              </div>
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <p>Mon - Fri: 8am - 4pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="copyright">
                <hr className="line" />
                &copy; {currentYear} Women Ignite South Sudan. All rights
                reserved. Designed and Built by
                <a
                  href="https://linkedin.com/in/simon-akuien-atem-710895290/"
                  target="_blank"
                  rel="noopener"
                >
                  {" </ Simon Akuien Atem> "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}

export default Footer;
