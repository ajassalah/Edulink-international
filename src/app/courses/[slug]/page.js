'use client';
import { use } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { getCourseBySlug, allCoursesData } from '@/data/courses';

export default function CourseDetailPage({ params }) {
  const { slug } = use(params);
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div style={{ padding: '200px 0', textAlign: 'center' }}>
        <h1>Course Not Found</h1>
        <p>The course you are looking for does not exist.</p>
        <Link href="/courses" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
          Browse All Courses
        </Link>
      </div>
    );
  }

  const relatedCourses = allCoursesData
    .filter(c => c.faculty === course.faculty && c.slug !== course.slug)
    .slice(0, 3);

  const levelColor = {
    'Undergraduate': '#2563EB', 'Postgraduate': '#7C3AED',
    'Diploma': '#0891B2', 'Short Courses': '#059669'
  }[course.level] || '#2563EB';

  return (
    <>
      <section className="hero-page" style={{ minHeight: '45vh' }}>
        <div className="hero-bg"><img src={course.image} alt={course.title} /></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/courses">Courses</Link><span>/</span>
              <span className="breadcrumb-current">{course.title}</span>
            </div>
            <h1>{course.title}</h1>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: levelColor, color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>{course.level}</span>
              <span style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem' }}>School of {course.faculty}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="course-detail-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>
            <div>
              <ScrollReveal>
                <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                  <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Program Overview</h2>
                  <p style={{ lineHeight: 1.8, color: 'var(--text-body)' }}>{course.description}</p>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                    {course.accreditations?.map((a, i) => (
                      <span key={i} style={{ background: 'var(--off-white)', padding: '8px 16px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 500 }}>✅ {a}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {course.units && (course.units.mandatory?.length > 0 || course.units.elective?.length > 0) && (
                <ScrollReveal delay={100}>
                  <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                    <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>📚 Course Units</h2>
                    {course.units.mandatory && course.units.mandatory.length > 0 && (
                      <>
                        <h4 style={{ color: levelColor, marginBottom: '0.5rem' }}>
                          {course.faculty === 'Management' ? 'Mandatory Units' : 'Core Units'}
                        </h4>
                        <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                          {course.units.mandatory.map((u, i) => <li key={i} style={{ padding: '4px 0', color: 'var(--text-body)' }}>{u}</li>)}
                        </ul>
                      </>
                    )}
                    {course.units.elective && course.units.elective.length > 0 && (
                      <>
                        <h4 style={{ color: levelColor, marginBottom: '0.5rem' }}>
                          {course.faculty === 'Management' ? 'Optional Units' : 'Elective Units'}
                        </h4>
                        <ul style={{ paddingLeft: '1.2rem' }}>
                          {course.units.elective.map((u, i) => <li key={i} style={{ padding: '4px 0', color: 'var(--text-body)' }}>{u}</li>)}
                        </ul>
                      </>
                    )}
                  </div>
                </ScrollReveal>
              )}

              {course.entryRequirements && (
                <ScrollReveal delay={200}>
                  <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                    <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>📋 Entry Requirements</h2>
                    <ul style={{ paddingLeft: '1.2rem' }}>
                      {course.entryRequirements.map((r, i) => <li key={i} style={{ padding: '6px 0', color: 'var(--text-body)', lineHeight: 1.6 }}>{r}</li>)}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {course.learningOutcomes && (
                <ScrollReveal delay={300}>
                  <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                    <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>🎯 Learning Outcomes</h2>
                    <ul style={{ paddingLeft: '1.2rem' }}>
                      {course.learningOutcomes.map((o, i) => <li key={i} style={{ padding: '6px 0', color: 'var(--text-body)', lineHeight: 1.6 }}>{o}</li>)}
                    </ul>
                  </div>
                </ScrollReveal>
              )}
            </div>

            <div>
              <ScrollReveal>
                <div className="card course-detail-sidebar" style={{ padding: '2rem', position: 'sticky', top: '100px', borderTop: '4px solid var(--accent)' }}>
                  <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>Program Details</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      ['🏫', 'School', course.faculty],
                      ['💻', 'Learning Mode', course.mode || 'Online Only'],
                      ['⏱', 'Duration', course.duration || '06 - 08 months'],
                      ['🏅', 'Awarding Body', course.awardingBody || 'Qualifi, OTHM, UKEE, Nqual']
                    ].map(([icon, label, value], i) => (
                      <div key={i} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '1rem', 
                        padding: '1rem', 
                        background: 'var(--off-white)', 
                        borderRadius: '12px',
                        border: '1px solid var(--mid-gray)',
                        transition: 'all 0.3s ease'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '42px',
                          height: '42px',
                          background: 'var(--white)',
                          borderRadius: '10px',
                          fontSize: '1.25rem',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                          flexShrink: 0
                        }}>
                          {icon}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
                          <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.4' }}>{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--mid-gray)' }}>
                    <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary)' }}>Registration Documents</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {['Passport Size Photo', 'Birth Certificate & NIC', 'CV', 'Education Documents (OL, AL, Other)', 'Service Letter'].map((d, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-body)', fontWeight: '500' }}>
                          <div style={{ width: '8px', height: '8px', background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))', borderRadius: '50%', flexShrink: 0 }}></div>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link href="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                      Apply Now <span className="btn-icon">→</span>
                    </Link>
                    <Link href="/contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {relatedCourses.length > 0 && (
        <section className="section section-gray">
          <div className="container">
            <ScrollReveal>
              <div className="text-center">
                <span className="section-label">Explore More</span>
                <h2 className="section-title">Related Programs</h2>
              </div>
            </ScrollReveal>
            <div className="course-grid" style={{ marginTop: '2rem' }}>
              {relatedCourses.map((c, i) => (
                <ScrollReveal key={c.id} delay={i * 100}>
                  <div className="related-program-card">
                    <div className="rp-card-top">
                      <div className="rp-school-tag">{c.faculty} SCHOOL</div>
                      <div className="rp-level-badge">{c.level}</div>
                      <h3>{c.title}</h3>
                    </div>
                    <div className="rp-card-bottom">
                      <Link href={`/courses/${c.slug}`} className="rp-explore-btn">
                        Explore Program <span>→</span>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Enroll?</h2>
            <p>Take the first step towards your future. Apply now for {course.title}.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">Apply Now <span className="btn-icon">→</span></Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
