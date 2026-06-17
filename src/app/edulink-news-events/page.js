'use client';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function EventsPage() {
  const upcomingEvents = [
    {
      day: '15',
      month: 'APR',
      tag: 'Workshop',
      title: 'AI & Machine Learning Workshop',
      desc: 'Start your AI journey with real-world projects using Python and TensorFlow open to all aspiring learners.',
    },
    {
      day: '22',
      month: 'APR',
      tag: 'Seminar',
      title: 'Business Leadership Summit 2025',
      desc: 'Explore innovative business strategies and leadership skills shared by industry professionals.',
    },
    {
      day: '05',
      month: 'MAY',
      tag: 'Webinar',
      title: 'Digital Marketing Masterclass',
      desc: 'Learn modern digital marketing strategies from certified experts in Google and Meta platforms.',
    },
    {
      day: '18',
      month: 'MAY',
      tag: 'Event',
      title: 'Annual Sports Day 2025',
      desc: 'Enjoy a day of sports, teamwork, and exciting competitions across all faculties.',
    },
  ];

  const pastEvents = [
    { title: 'Celebrating academic success and the achievements of our graduates as they step into their future careers.', date: 'Dec 2024', img: '/images/about-hero.png' },
    { title: 'An exciting innovation-driven event where students collaborate, create, and solve real-world tech challenges.', date: 'Nov 2024', img: '/images/campus-life.png' },
    { title: 'A vibrant celebration of diversity, showcasing talent, traditions, and creativity from our student community.', date: 'Oct 2024', img: '/images/events-hero.png' },
    { title: 'Connecting students with top employers, industry experts, and career opportunities for future success.', date: 'Sep 2024', img: '/images/hero-campus.png' },
    { title: 'Welcoming new students with guidance, support, and an introduction to campus life and academic pathways.', date: 'Aug 2024', img: '/images/contact-hero.png' },
    { title: 'An unforgettable experience promoting teamwork, exploration, and student bonding in a scenic environment.', date: 'Jul 2024', img: '/images/about-hero.png' },
  ];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="hero-page">
        <div className="hero-bg">
          <img src="/images/events-hero.png" alt="Events at EduLink" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span className="breadcrumb-current">News & Events</span>
            </div>
            <h1>News & Events</h1>
            <p className="hero-text" style={{ margin: '0 auto', textAlign: 'center' }}>
              Stay informed about the latest happenings, upcoming events,
              and exciting opportunities at EduLink International Campus.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== UPCOMING EVENTS ==================== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div>
              <span className="section-label">What's Coming Up</span>
              <h2 className="section-title">Upcoming Events</h2>
            </div>
          </ScrollReveal>

          <div className="events-grid">
            {upcomingEvents.map((event, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="event-card">
                  <div className="event-date-block">
                    <div className="event-date-day">{event.day}</div>
                    <div className="event-date-month">{event.month}</div>
                  </div>
                  <div className="event-card-body">
                    <span className="event-tag">{event.tag}</span>
                    <h3>{event.title}</h3>
                    <p>{event.desc}</p>
                    <Link href="/contact" className="btn btn-outline btn-sm">
                      Register <span className="btn-icon">→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PAST EVENTS ==================== */}
      <section className="section section-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Looking Back</span>
              <h2 className="section-title">Past Events</h2>
              <p className="section-subtitle mx-auto">
                A gallery of memorable moments from our previous events and celebrations.
              </p>
            </div>
          </ScrollReveal>

          <div className="past-events-grid">
            {pastEvents.map((event, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="past-event-card">
                  <img src={event.img} alt={event.title} />
                  <div className="past-event-overlay">
                    <h4>{event.title}</h4>
                    <p>{event.date}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EVENT CATEGORIES ==================== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Browse By Type</span>
              <h2 className="section-title">Event Categories</h2>
            </div>
          </ScrollReveal>

          <div className="event-categories">
            {[
              { icon: '🛠', title: 'Workshops' },
              { icon: '🎓', title: 'Seminars' },
              { icon: '💻', title: 'Webinars' },
              { icon: '🏆', title: 'Competitions' },
              { icon: '🎉', title: 'Social Events' },
            ].map((cat, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="event-category">
                  <div className="event-category-icon">{cat.icon}</div>
                  <h4>{cat.title}</h4>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Don't Miss Out!</h2>
            <p>
              Register for upcoming events and be part of the exciting experiences
              at EduLink International Campus.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Register Now <span className="btn-icon">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
