'use client';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function LifePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="hero-page">
        <div className="hero-bg">
          <img src="/images/about-hero.png" alt="Life at Campus" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span className="breadcrumb-current">Life @ EduLink</span>
            </div>
            <h1>Life at Campus</h1>
            <p className="hero-text" style={{ margin: '0 auto', textAlign: 'center' }}>
              Experience the vibrant campus culture, exciting activities, and
              world-class facilities that make EduLink truly special.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CAMPUS EXPERIENCE ==================== */}
      <section className="campus-gallery">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Campus Experience</span>
              <h2 className="section-title">Explore Our Campus</h2>
              <p className="section-subtitle mx-auto">
                Our modern campus provides the perfect environment for learning,
                collaboration, and personal growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="gallery-grid">
            {[
              { src: '/images/hero-campus.png', alt: 'Main Campus Building' },
              { src: '/images/campus-life.png', alt: 'Library' },
              { src: '/images/about-hero.png', alt: 'Student Activities' },
              { src: '/images/events-hero.png', alt: 'Events Hall' },
              { src: '/images/contact-hero.png', alt: 'Reception Area' },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="gallery-item">
                  <img src={img.src} alt={img.alt} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ACTIVITIES ==================== */}
      <section className="section section-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Get Involved</span>
              <h2 className="section-title">Activities & Clubs</h2>
              <p className="section-subtitle mx-auto">
                There's always something happening at EduLink. Join clubs, participate
                in sports, and make lifelong memories.
              </p>
            </div>
          </ScrollReveal>

          <div className="activities-grid">
            {[
              { icon: '⚽', title: 'Sports & Athletics', desc: 'Football, cricket, badminton, and more. Stay active and compete with fellow students.' },
              { icon: '🎭', title: 'Cultural Events', desc: 'Celebrate diversity through cultural festivals, talent shows, and performances.' },
              { icon: '💻', title: 'Tech Clubs', desc: 'Coding bootcamps, hackathons, and tech meetups to sharpen your digital skills.' },
              { icon: '📸', title: 'Media & Arts', desc: 'Photography club, media production, and creative arts workshops.' },
              { icon: '🌿', title: 'Community Service', desc: 'Give back through volunteer programs, charity drives, and community outreach.' },
              { icon: '🗣', title: 'Debate & Public Speaking', desc: 'Build confidence and critical thinking through debate competitions and workshops.' },
            ].map((activity, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="activity-card">
                  <div className="activity-icon">{activity.icon}</div>
                  <h3>{activity.title}</h3>
                  <p>{activity.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STUDENT STORIES ==================== */}
      <section className="testimonials-section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Real Experiences</span>
              <h2 className="section-title">Student Stories</h2>
              <p className="section-subtitle mx-auto">
                Hear directly from our students about their experiences and journeys at EduLink.
              </p>
            </div>
          </ScrollReveal>

          <div className="testimonial-grid" style={{ marginTop: '2rem' }}>
            {[
              {
                name: 'Amina Hassan',
                role: 'BSc Computing — Year 3',
                text: 'EduLink has been my second home. The campus environment, supportive lecturers, and amazing friends made my university journey unforgettable.',
                initials: 'AH',
              },
              {
                name: 'Ryan Fernando',
                role: 'MBA Graduate 2024',
                text: 'The clubs and activities at EduLink taught me leadership skills that no classroom could. I led the coding club and organized our first hackathon!',
                initials: 'RF',
              },
              {
                name: 'Fatima Al-Said',
                role: 'Diploma in Health — Year 2',
                text: 'From sports days to cultural festivals, every week brings something new. The sense of community here is truly remarkable.',
                initials: 'FA',
              },
            ].map((story, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="testimonial-card">
                  <div className="testimonial-quote-icon">"</div>
                  <p className="testimonial-text">{story.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{story.initials}</div>
                    <div>
                      <div className="testimonial-name">{story.name}</div>
                      <div className="testimonial-role">{story.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FACILITIES ==================== */}
      <section className="section section-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">World-Class</span>
              <h2 className="section-title">Our Facilities</h2>
              <p className="section-subtitle mx-auto">
                State-of-the-art facilities designed to enhance your learning experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="facilities-grid">
            {[
              { icon: '📚', title: 'Modern Library', desc: 'Digital and physical resources available 24/7.' },
              { icon: '💻', title: 'Computer Labs', desc: 'Latest hardware and software for hands-on learning.' },
              { icon: '🏋', title: 'Sports Complex', desc: 'Indoor and outdoor facilities for all sports.' },
              { icon: '🍽', title: 'Student Cafeteria', desc: 'Healthy meals and snacks for busy students.' },
              { icon: '🏠', title: 'Student Lounge', desc: 'Comfortable spaces for relaxation and socializing.' },
              { icon: '🅿️', title: 'Parking Facility', desc: 'Secure parking for students and staff.' },
              { icon: '📡', title: 'Free Wi-Fi', desc: 'High-speed internet across the entire campus.' },
              { icon: '🎤', title: 'Auditorium', desc: '500-seat auditorium for events and seminars.' },
            ].map((facility, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="facility-item">
                  <div className="facility-icon">{facility.icon}</div>
                  <h4>{facility.title}</h4>
                  <p>{facility.desc}</p>
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
            <h2>Become Part of Our Community</h2>
            <p>
              Join a vibrant campus community where learning goes beyond the classroom.
              Your journey starts here.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Apply Now <span className="btn-icon">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
