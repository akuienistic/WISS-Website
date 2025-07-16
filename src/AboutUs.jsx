import "./AboutUs.css";

function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      name: "Ms. Adeng Leek",
      position: "Founder & President Of WISS",
      image: "/BOSS.webp",
    },
    {
      id: 2,
      name: "Dr. Abak Raphael Mawien",
      position: "Board Member and Director of Administration & Communication",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 3,
      name: "Hon. Atong Majok",
      position: "Board Member and Director of Policies",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 4,
      name: "Mr. Omara Joseph",
      position: "Board Member and Public Relation & Fundraising Director",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 5,
      name: "Mrs. Edwina Mou",
      position: "Board Member and Director of Treasurer",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Meet our Team</h2>
            <p className="team-description">
              Enlisted below are the visionary minds who sat down and brought
              about the idea of Empowering Women In the Youngest Nation in The
              World. Their philosophy was purely to promote Equality and avoid
              SGB - Violence.
            </p>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-4 col-md-6 mb-4">
              <div className="team-card">
                <div className="team-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid"
                  />
                </div>
                <div className="team-info">
                  <h5>{member.name}</h5>
                  <p>{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <div className="about-content">
              <h3>Our Mission</h3>
              <p>
                Women Ignite South Sudan is dedicated to empowering women
                through education, advocacy, and community engagement. We strive
                to create a supportive environment where women can develop their
                skills, voice their concerns, and contribute to the development
                of their communities.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-content">
              <h3>Our Vision</h3>
              <p>
                We envision a South Sudan where women have equal opportunities,
                rights, and representation in all aspects of society. We work
                towards a future where women's voices are heard, respected, and
                valued in decision-making processes at all levels.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="about-content">
              <h3>Our Values</h3>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="value-card">
                    <h5>Empowerment</h5>
                    <p>
                      Building capacity and confidence in women to take control
                      of their lives.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="value-card">
                    <h5>Equality</h5>
                    <p>
                      Promoting equal rights and opportunities for all women in
                      South Sudan.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="value-card">
                    <h5>Community</h5>
                    <p>
                      Fostering a sense of belonging and support among women
                      across the country.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
