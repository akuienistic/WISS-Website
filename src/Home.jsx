import "./Home.css";
import { FaCheckCircle } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="home-section py-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="hero-content">
              <h1 className="hero-title">Empowering Women in South Sudan</h1>
              <p className="hero-text">
                Women Ignite South Sudan focuses on uplifting women's voices
                through various programs and initiatives designed to create a
                supportive environment.
              </p>
              <div className="initiatives">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="initiatives-list">
                      <p>
                        <FaCheckCircle className="list-icon" /> Community
                        Engagement and Education
                      </p>
                      <p>
                        <FaCheckCircle className="list-icon" /> Raising
                        Awareness of Women's Issues
                      </p>
                      <p>
                        <FaCheckCircle className="list-icon" /> Inspiring Change
                        Within Communities
                      </p>
                      <p>
                        <FaCheckCircle className="list-icon" /> Strengthening
                        Women's Leadership Roles
                      </p>
                      <p>
                        <FaCheckCircle className="list-icon" /> Building Skills
                        for Economic Empowerment
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <img src="/Women.png" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="empowerment-section">
        <div className="container py-3">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Empowering Women Together</h3>
              <p className="text-center mb-5">
                Women Ignite South Sudan is dedicated to supporting women
                through the following 5 steps to ensure that women in South
                Sudan from (rural or urban areas) enjoy their rights equally.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="step-card">
                <h6 className="step-label">Step 1</h6>
                <h5>Community Engagement Initiatives</h5>
                <p>
                  We focus on community outreach to raise awareness about the
                  challenges women face and create a supportive environment.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="step-card">
                <h6 className="step-label">Step 2</h6>
                <h5>Educational Programs for Women</h5>
                <p>
                  Our organization offers educational initiatives aimed at
                  empowering women with skills and knowledge for greater
                  success.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="step-card">
                <h6 className="step-label">Step 3</h6>
                <h5>Support and Outreach Services</h5>
                <p>
                  We provide various support services, including counseling and
                  mentorship, to inspire women in their personal and
                  professional lives.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="step-card">
                <h6 className="step-label">Step 4</h6>
                <h5>Advocacy for Women's Rights</h5>
                <p>
                  We advocate for women's rights, working towards sustainable
                  change in societal perceptions and policies within and outside
                  South Sudan.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="step-card">
                <h6 className="step-label">Step 5</h6>
                <h5>Join Our Mission</h5>
                <p>
                  Become a part of our journey to empower women and help us
                  create a thriving community for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
