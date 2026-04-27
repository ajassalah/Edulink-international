'use client';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/images/hero-campus.png" alt="EduLink International Campus" />
        </div>
        <div className="hero-overlay"></div>

        {/* Decorative elements */}
        <div className="hero-decoration hero-circle-1"></div>
        <div className="hero-decoration hero-circle-2"></div>
        <div className="hero-dot-grid">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i}></span>
          ))}
        </div>

        <div className="container">
          <div className="hero-content" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <span className="section-label">Welcome to EduLink International Campus</span>
            <h1>
              Empowering Global
              <span className="highlight">Graduates</span>
            </h1>
            <p className="hero-text">
              Discover world-class education with diverse faculties committed to excellence
              and innovation. Explore programs designed to meet the challenges of a globalized
              world and launch your career with confidence.
            </p>
            <div className="hero-buttons">
              <Link href="/courses" className="btn btn-primary btn-lg">
                View Programs <span className="btn-icon">→</span>
              </Link>
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Apply Now
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-number">15K+</div>
                <div className="hero-stat-label">Global Alumni</div>
              </div>
              <div>
                <div className="hero-stat-number">50+</div>
                <div className="hero-stat-label">Programs</div>
              </div>
              <div>
                <div className="hero-stat-number">4</div>
                <div className="hero-stat-label">Faculties</div>
              </div>
              <div>
                <div className="hero-stat-number">99%</div>
                <div className="hero-stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROGRAM FINDER ==================== */}
      <section className="program-finder">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Start Your Journey</span>
              <h2 className="section-title">Find Your Perfect Program</h2>
            </div>
          </ScrollReveal>

          <div className="finder-cards">
            <ScrollReveal delay={100}>
              <Link href="/courses?category=Undergraduate" className="finder-card">
                <div className="finder-card-label">Are just after A/L</div>
                <h3>Undergraduate Degrees</h3>
                <div className="arrow">→</div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/courses?category=Postgraduate" className="finder-card">
                <div className="finder-card-label">Are holding a First Degree</div>
                <h3>Postgraduate Programs</h3>
                <div className="arrow">→</div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link href="/courses?category=Short Courses" className="finder-card">
                <div className="finder-card-label">Are looking for career development</div>
                <h3>Professional Courses</h3>
                <div className="arrow">→</div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== FACULTIES ==================== */}
      <section className="faculties">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Our Schools</span>
              <h2 className="section-title">Advancing Knowledge and Innovation</h2>
              <p className="section-subtitle mx-auto">
                EduLink is home to diverse faculties, each committed to excellence and innovation.
                Explore a wide array of programs designed to meet the challenges of a globalized world.
              </p>
            </div>
          </ScrollReveal>

          <div className="faculty-grid">
            {[
              {
                image: '/images/courses/business.png',
                title: 'School of Management',
                desc: 'Offering innovative programs to develop future business leaders and managers globally.',
                color: '#1E3A5F',
              },
              {
                image: '/images/courses/it.png',
                title: 'School of Computing',
                desc: 'Empowering tech professionals with cutting-edge knowledge and innovative skills.',
                color: '#2A4F7F',
              },
              {
                image: '/images/hero-campus.png',
                title: 'School of Health',
                desc: 'Promoting well-being through advanced healthcare and psychological expertise.',
                color: '#1E3A5F',
              },
              {
                image: '/images/about-hero.png',
                title: 'School of Education',
                desc: 'Shaping educators with modern teaching methods and lifelong learning principles.',
                color: '#2A4F7F',
              },
            ].map((faculty, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="faculty-card">
                  <div className="faculty-card-image">
                    <img src={faculty.image} alt={faculty.title} />
                  </div>
                  <div className="faculty-card-body">
                    <h3>{faculty.title}</h3>
                    <p>{faculty.desc}</p>
                    <Link href={`/courses?faculty=${faculty.title.replace('School of ', '')}`} className="faculty-card-link">
                      View Programs <span>→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="why-section">
        <div className="container">
          <div className="why-content">
            <ScrollReveal>
              <div className="why-text">
                <span className="section-label">Why EduLink?</span>
                <h2>Developing Passionate Learners Who Achieve Their Dreams</h2>
                <p>
                  Founded with a mission to inspire and educate, EduLink offers cutting-edge
                  programs that blend academic excellence with practical experience. From
                  diplomas to postgraduate certifications, we provide a pathway to success for every learner.
                </p>
                <div className="why-features">
                  {[
                    { icon: '🎓', title: 'Academic Excellence', desc: 'Top-tier education with experienced faculty and cutting-edge resources.' },
                    { icon: '🌍', title: 'Global Recognition', desc: 'International collaborations ensuring global exposure for every learner.' },
                    { icon: '⏰', title: 'Flexible Learning', desc: 'Choose from on-campus and online study modes designed for flexibility.' },
                    { icon: '💡', title: 'Industry Focused', desc: 'Industry-focused learning built for careers in business, IT and service sectors.' },
                  ].map((feature, i) => (
                    <div key={i} className="why-feature">
                      <div className="why-feature-icon">{feature.icon}</div>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="btn btn-dark" style={{ marginTop: '1.5rem' }}>
                  Discover More <span className="btn-icon">→</span>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="why-image">
                <img src="/images/campus-life.png" alt="Campus Life at EduLink" />
                <div className="why-image-badge">
                  <strong>15+</strong>
                  <span>Years of academic excellence</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== STATISTICS ==================== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: 15000, suffix: '+', label: 'Graduates Worldwide' },
              { number: 50, suffix: '+', label: 'Academic Programs' },
              { number: 99, suffix: '%', label: 'Student Success Rate' },
              { number: 25, suffix: '+', label: 'Global Partnerships' },
            ].map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-number">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-divider"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EMPOWERING SECTION ==================== */}
      <section className="empower-section">
        <div className="container">
          <div className="empower-grid">
            <ScrollReveal>
              <div className="empower-image">
                <img src="/images/about-hero.png" alt="Empowering Lives Through Education" />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="empower-text">
                <span className="section-label">Empowering Lives</span>
                <h2>Empowering Lives Through Education</h2>
                <p>
                  At EduLink, we believe education is not just a privilege but a transformative
                  tool that shapes futures and uplifts communities. Join a community dedicated to
                  fostering growth, innovation, and success.
                </p>
                <div className="empower-highlights">
                  {[
                    { icon: '📜', text: 'Certificate Programs' },
                    { icon: '📋', text: 'Diploma Programs' },
                    { icon: '🎓', text: 'Undergraduate Programs' },
                    { icon: '🏆', text: 'Postgraduate Programs' },
                  ].map((item, i) => (
                    <div key={i} className="empower-highlight">
                      <div className="empower-highlight-icon">{item.icon}</div>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                  About Us <span className="btn-icon">→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== PARTNERS ==================== */}
      <section className="partners-section">
        <div className="container text-center">
          <ScrollReveal>
            <span className="section-label">Partnerships & Accreditations</span>
            <h2 className="section-title">Exciting Partnerships at EduLink</h2>
            <p className="section-subtitle mx-auto">
              We are proud to partner with globally recognized institutions, expanding
              opportunities for students both locally and internationally.
            </p>
          </ScrollReveal>
          <div className="partners-logos" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', padding: '1.5rem 0', flexWrap: 'wrap' }}>
            {['Qualifi', 'OTHM', 'UKEE', 'Nqual'].map((partner, i) => (
              <div key={i} style={{
                background: 'var(--white)',
                padding: '0.8rem 1.8rem',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                fontSize: '1.1rem',
                fontWeight: '700',
                color: 'var(--primary)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '140px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="testimonials-section">
        <div className="container">
          <ScrollReveal>
            <div className="testimonials-header">
              <div>
                <span className="section-label">Testimonials</span>
                <h2 className="section-title">Hear From Our Students & Educators</h2>
              </div>
              <Link href="/about" className="btn btn-outline btn-sm">
                View All <span className="btn-icon">→</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="testimonial-grid">
            {[
              {
                name: 'Mr Klayan Harish',
                role: 'MBA Graduate — Student of the Year 2024',
                text: 'EduLink has been instrumental in shaping my career. The faculty, resources, and global exposure gave me the confidence to excel in the business world.',
                initials: 'KH',
              },
              {
                name: 'Mr Abdul Kaliq',
                role: 'HND in Information Technology',
                text: 'The hands-on learning experience at EduLink was unlike any other. The course helped me develop practical skills that employers value.',
                initials: 'AK',
              },
              {
                name: 'Mr Akeem Jleel',
                role: 'Senior Lecturer',
                text: 'Teaching at EduLink is a rewarding experience. The institution fosters an environment of continuous learning and academic innovation.',
                initials: 'AJ',
              },
            ].map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="testimonial-card">
                  <div className="testimonial-quote-icon">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{testimonial.initials}</div>
                    <div>
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-role">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== NEWS & EVENTS ==================== */}
      <section className="news-section">
        <div className="container">
          <ScrollReveal>
            <div className="testimonials-header">
              <div>
                <span className="section-label">Latest Updates</span>
                <h2 className="section-title">News & Events @ EduLink</h2>
              </div>
              <Link href="/events" className="btn btn-outline btn-sm">
                View All <span className="btn-icon">→</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="news-grid">
            {[
              {
                tag: 'Event',
                title: 'Embark on an Unforgettable Adventure Trip',
                desc: 'Join us for an exciting outdoor adventure designed to build teamwork and leadership skills.',
                date: 'Mar 15, 2025',
                image: '/images/campus-life.png'
              },
              {
                tag: 'Academic',
                title: 'Level 8 Diploma in Strategic Management',
                desc: 'Advance your career with our new Level 8 qualification in strategic management and leadership.',
                date: 'Feb 28, 2025',
                image: '/images/courses/business.png'
              },
              {
                tag: 'Webinar',
                title: 'Business Management Webinar Series',
                desc: 'Expert-led sessions covering the latest trends in business management and entrepreneurship.',
                date: 'Feb 22, 2025',
                image: '/images/courses/marketing.png'
              },
            ].map((news, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="news-card">
                  <div className="news-card-image">
                    <img src={news.image} alt={news.title} />
                  </div>
                  <div className="news-card-body">
                    <div className="news-card-tag">{news.tag}</div>
                    <h3>{news.title}</h3>
                    <p>{news.desc}</p>
                    <Link href="/events" className="news-card-link">
                      Read More <span>→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Start Your Future Today</h2>
            <p>
              Take the first step towards a world-class education. Apply now and join
              thousands of successful graduates from EduLink International Campus.
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
