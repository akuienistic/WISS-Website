import "./Events.css";
import { FaCalendarAlt } from "react-icons/fa";

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      date: "8 March 2025",
      title: "Celebrating Women's Achievements",
      description:
        "Join us to celebrate women's achievements and learn about our programs and initiatives.",
    },
    {
      id: 2,
      date: "Apr 24",
      title: "Empowering Women Through Programs",
      description: "Your support can change lives today.",
    },
    {
      id: 3,
      date: "Apr 25",
      title: "Get Involved and Make a Difference",
      description: "Workshops and training for women empowerment.",
    },
    {
      id: 4,
      date: "Apr 26",
      title: "Workshops for Skill Development",
      description: "Hear inspiring stories from local women.",
    },
    {
      id: 5,
      date: "Apr 27",
      title: "Stories of Resilience and Strength",
      description: "Join our campaigns to raise awareness.",
    },
    {
      id: 6,
      date: "Apr 28",
      title: "Awareness Campaigns for Women",
      description: "Volunteer opportunities for community engagement.",
    },
    {
      id: 7,
      date: "Apr 29",
      title: "Become a Volunteer Today",
      description: "Stay updated with our latest news.",
    },
  ];

  return (
    <section id="events" className="events-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="events-header">
              <h2>Upcoming events</h2>
              <p>Join us to celebrate women's achievements.</p>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="col-md-6 mb-4">
                  <div className="event-card">
                    <div className="event-date">
                      <FaCalendarAlt className="calendar-icon" />
                      <span>{event.date}</span>
                    </div>
                    <h5 className="event-title">{event.title}</h5>
                    <p className="event-description">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
