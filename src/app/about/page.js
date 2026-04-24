'use client';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="hero-page">
        <div className="hero-bg">
          <img src="/images/about-hero.png" alt="About EduLink" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span className="breadcrumb-current">About Us</span>
            </div>
            <h1>About EduLink International Campus</h1>
            <p className="hero-text" style={{ margin: '0 auto', textAlign: 'center' }}>
              Discover our story, mission, and the values that drive us to deliver
              world-class education to students across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== INTRODUCTION ==================== */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-content">
            <ScrollReveal>
              <div className="about-intro-text">
                <span className="section-label">Our Story</span>
                <h2>Introduction Our Campus</h2>
                <p>
                  EduLink offers a dynamic learning environment with internationally recognized UK qualifications. With a strong focus on student-centered learning, affordable education, and experienced professional faculty, EduLink supports students in achieving their academic ambitions and building successful careers.
                </p>
                <p>
                  At EduLink, our commitment to academic excellence, industry-focused curricula, and strong international partnerships has established us as a leading provider of private education. We equip students with the skills, knowledge, and confidence needed to thrive in today’s competitive global environment.
                </p>
                <p>
                  With campuses across multiple countries and a thriving online learning
                  platform, EduLink continues to break barriers and bring transformative
                  education to learners everywhere.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="about-intro-image">
                <img src="/images/campus-life.png" alt="EduLink Campus" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== VISION & MISSION ==================== */}
      <section className="vision-mission">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Our Purpose</span>
              <h2 className="section-title">Vision & Mission</h2>
            </div>
          </ScrollReveal>

          <div className="vm-grid">
            <ScrollReveal delay={100}>
              <div className="vm-card">
                <div className="vm-icon">👁</div>
                <h3>Our Vision</h3>
                <p>
                  To become a globally recognized institution of higher learning that transforms lives through innovative education,
                  impactful research, and meaningful community engagement.
                  We aim to develop graduates who are critical thinkers, ethical leaders, and drivers of positive change in society.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="vm-card">
                <div className="vm-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  EduLink is committed to delivering accessible, affordable, and globally competitive education. Through innovative teaching approaches,
                  strong academic programs, and close industry partnerships,
                  we prepare students for a successful and future-ready career.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== HISTORY TIMELINE ==================== */}
      <section className="timeline-section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Our Journey</span>
              <h2 className="section-title">Our History</h2>
            </div>
          </ScrollReveal>

          <div className="timeline">
            {[
              { year: '2008', title: 'Foundation', desc: 'EduLink was established with a small campus in Colombo, offering diploma programs in Business and Computing.' },
              { year: '2012', title: 'International Partnerships', desc: 'Partnered with UK awarding bodies including NCC Education and Qualifi to offer internationally recognized qualifications.' },
              { year: '2015', title: 'Campus Expansion', desc: 'Expanded to multiple locations across Sri Lanka and launched the School of Health Sciences.' },
              { year: '2018', title: 'Global Reach', desc: 'Established presence in UAE, KSA, and Maldives, welcoming students from over 15 countries.' },
              { year: '2020', title: 'Digital Transformation', desc: 'Launched a comprehensive online learning platform, making education accessible during the global pandemic.' },
              { year: '2024', title: 'Excellence & Growth', desc: 'Surpassed 15,000 alumni globally and introduced Level 8 doctoral pathway programs.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="section section-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Our Strengths</span>
              <h2 className="section-title">Why Choose EduLink?</h2>
              <p className="section-subtitle mx-auto">
                EduLink offers more than just education — we provide a transformational
                learning experience designed to empower you for the future.
              </p>
            </div>
          </ScrollReveal>

          <div className="faculty-grid" style={{ marginTop: '2rem' }}>
            {[
              { icon: '🏆', title: 'Globally Recognized', desc: 'Qualifications accredited by international awarding bodies.' },
              { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'Learn from industry professionals and experienced academics.' },
              { icon: '🔬', title: 'Research Focused', desc: 'Emphasis on applied research and innovative thinking.' },
              { icon: '🤝', title: 'Industry Links', desc: 'Strong partnerships with leading employers for placements.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="faculty-card">
                  <div className="faculty-card-image">
                    <span className="faculty-icon">{item.icon}</span>
                  </div>
                  <div className="faculty-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PARTNERS ==================== */}
      <section className="partners-section">
        <div className="container text-center">
          <ScrollReveal>
            <span className="section-label">Accreditations</span>
            <h2 className="section-title">Our Partners & Accreditations</h2>
            <p className="section-subtitle mx-auto">
              We are proud to be associated with globally recognized awarding bodies
              and institutions.
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

      {/* ==================== TEAM ==================== */}
      <section className="team-section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Our Team</span>
              <h2 className="section-title">Meet Our Leadership</h2>
              <p className="section-subtitle mx-auto">
                Our team of dedicated professionals drives the institution's academic
                vision and operational excellence.
              </p>
            </div>
          </ScrollReveal>

          <div className="team-grid">
            {[
              { name: 'Dr. Sarah Johnson', role: 'Director & Chancellor', initials: '👩‍💼' },
              { name: 'Prof. Ahmed Khan', role: 'Dean — School of Management', initials: '👨‍🏫' },
              { name: 'Dr. Priya Sharma', role: 'Dean — School of Computing', initials: '👩‍💻' },
              { name: 'Mr. David Williams', role: 'Head of Student Affairs', initials: '👨‍💼' },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="team-card">
                  <div className="team-avatar">{member.initials}</div>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
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
            <h2>Join Our Institution Today</h2>
            <p>
              Be part of a vibrant academic community that fosters growth,
              innovation, and lifelong learning.
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
