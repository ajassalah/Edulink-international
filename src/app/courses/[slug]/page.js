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
    'Diploma': '#0891B2', 'Short Course': '#059669'
  }[course.level] || '#2563EB';

  return (
    <>
      <section className="hero-page" style={{ minHeight: '45vh' }}>
        <div className="hero-bg"><img src="/images/campus-life.png" alt={course.title} /></div>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>
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

              {course.units && (
                <ScrollReveal delay={100}>
                  <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                    <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>📚 Course Units</h2>
                    {course.units.mandatory && (
                      <>
                        <h4 style={{ color: levelColor, marginBottom: '0.5rem' }}>Mandatory Units</h4>
                        <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                          {course.units.mandatory.map((u, i) => <li key={i} style={{ padding: '4px 0', color: 'var(--text-body)' }}>{u}</li>)}
                        </ul>
                      </>
                    )}
                    {course.units.elective && (
                      <>
                        <h4 style={{ color: levelColor, marginBottom: '0.5rem' }}>Elective Units</h4>
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
                <div className="card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
                  <h3 style={{ marginBottom: '1.5rem' }}>Program Details</h3>
                  {[
                    ['🏫', 'School', course.faculty],
                    ['📍', 'Location', course.location || 'Mount Lavinia'],
                    ['💻', 'Learning Mode', course.mode || 'Online | Physical'],
                    ['⏱', 'Duration', course.duration || '06 - 08 months'],
                    ['🏅', 'Awarding Body', course.awardingBody || 'Qualifi'],
                    ['📊', 'Credits', course.credits || '120 Credits'],
                  ].map(([icon, label, value], i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ color: 'var(--text-light)' }}>{icon} {label}</span>
                      <span style={{ fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{value}</span>
                    </div>
                  ))}

                  <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>Registration Documents</h4>
                  {['Passport Size Photo', 'Birth Certificate & NIC', 'CV', 'Education Documents (OL, AL, Other)', 'Service Letter'].map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                      <span>📄</span> {d}
                    </div>
                  ))}

                  <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
                  <div className="course-card">
                    <div className="course-card-header">
                      <span className="course-card-level">{c.level}</span>
                      <h3>{c.title}</h3>
                    </div>
                    <div className="course-card-body">
                      <Link href={`/courses/${c.slug}`} className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                        View Details <span className="btn-icon">→</span>
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
