'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ScrollReveal from '@/components/ScrollReveal';
import { allCoursesData } from '@/data/courses';

const categories = ['All', 'Undergraduate', 'Postgraduate', 'Diploma', 'Short Course'];
const faculties = ['All Faculties', 'Computing', 'Management', 'Health', 'Education'];

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialFaculty = searchParams.get('faculty') || 'All Faculties';
  const initialCategory = searchParams.get('category') || 'All';
  const [activeTab, setActiveTab] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeFaculty, setActiveFaculty] = useState(initialFaculty);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const q = searchParams.get('search');
    if (q !== null) setSearchQuery(q);
    const f = searchParams.get('faculty');
    if (f !== null) setActiveFaculty(f);
    const c = searchParams.get('category');
    if (c !== null) setActiveTab(c);
  }, [searchParams]);

  useEffect(() => { setVisibleCount(9); }, [activeTab, searchQuery, activeFaculty]);

  const filteredCourses = allCoursesData.filter((course) => {
    const matchesCategory = activeTab === 'All' || course.level === activeTab;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFaculty = activeFaculty === 'All Faculties' || course.faculty === activeFaculty;
    return matchesCategory && matchesSearch && matchesFaculty;
  });

  const featuredCourses = allCoursesData.filter((c) => c.featured);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Undergraduate': return '#2563EB';
      case 'Postgraduate': return '#7C3AED';
      case 'Diploma': return '#0891B2';
      case 'Short Course': return '#059669';
      default: return 'var(--accent)';
    }
  };

  const getFacultyIcon = (faculty) => {
    switch(faculty) {
      case 'Computing': return '💻';
      case 'Management': return '📊';
      case 'Health': return '🏥';
      case 'Education': return '📚';
      default: return '🎓';
    }
  };

  return (
    <>
      <section className="hero-page">
        <div className="hero-bg"><img src="/images/campus-life.png" alt="Our Programs" /></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <span className="breadcrumb-current">Courses</span>
            </div>
            <h1>Our Programs</h1>
            <p className="hero-text" style={{ margin: '0 auto', textAlign: 'center' }}>
              Explore {allCoursesData.length}+ programs across Computing, Management, Health, and Education
            </p>
          </div>
        </div>
      </section>

      <section className="courses-filter">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-search">
              <span className="filter-search-icon">🔍</span>
              <input type="text" placeholder="Search programs..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <select className="form-control" value={activeFaculty} onChange={(e) => setActiveFaculty(e.target.value)} style={{ width: 'auto', minWidth: '180px' }}>
              {faculties.map((f) => (<option key={f} value={f}>{f}</option>))}
            </select>
          </div>
          <div className="filter-tabs" style={{ marginTop: '1rem' }}>
            {categories.map((cat) => (
              <button key={cat} className={`filter-tab ${activeTab === cat ? 'active' : ''}`} onClick={() => setActiveTab(cat)}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                Showing {filteredCourses.length} program{filteredCourses.length !== 1 ? 's' : ''}
              </p>
            </div>
          </ScrollReveal>
          <div className="course-grid">
            {filteredCourses.slice(0, visibleCount).map((course, i) => (
              <ScrollReveal key={course.id} delay={(i % 3) * 100}>
                <div className="course-card">
                  <div className="course-card-header">
                    <span className="course-card-level" style={{ background: getLevelColor(course.level) + '18', color: getLevelColor(course.level) }}>{course.level}</span>
                    <h3>{course.title}</h3>
                  </div>
                  <div className="course-card-body">
                    <div className="course-meta">
                      <div className="course-meta-item">
                        <span className="course-meta-icon">{getFacultyIcon(course.faculty)}</span>
                        {course.faculty}
                      </div>
                    </div>
                    <Link href={`/courses/${course.slug}`} className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                      View Details <span className="btn-icon">→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredCourses.length > 9 && (
            <div className="text-center" style={{ marginTop: '2rem' }}>
              {visibleCount < filteredCourses.length ? (
                <button className="btn btn-outline" onClick={() => setVisibleCount(prev => prev + 9)} style={{ minWidth: '220px' }}>
                  Show More ({filteredCourses.length - visibleCount} remaining) <span className="btn-icon">↓</span>
                </button>
              ) : (
                <button className="btn btn-outline" onClick={() => { setVisibleCount(9); window.scrollTo({ top: document.querySelector('.courses-filter')?.offsetTop - 80, behavior: 'smooth' }); }} style={{ minWidth: '220px' }}>
                  Show Less <span className="btn-icon">↑</span>
                </button>
              )}
            </div>
          )}

          {filteredCourses.length === 0 && (
            <div className="text-center" style={{ padding: '3rem' }}>
              <h3>No programs found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Popular Choices</span>
              <h2 className="section-title">Featured Programs</h2>
              <p className="section-subtitle mx-auto">Our most popular programs chosen by students for their global recognition and career prospects.</p>
            </div>
          </ScrollReveal>
          <div className="course-grid" style={{ marginTop: '2rem' }}>
            {featuredCourses.slice(0, 6).map((course, i) => (
              <ScrollReveal key={course.id} delay={i * 100}>
                <div className="course-card">
                  <div className="course-card-header">
                    <span className="course-card-level" style={{ background: getLevelColor(course.level) + '18', color: getLevelColor(course.level) }}>{course.level}</span>
                    <h3>{course.title}</h3>
                  </div>
                  <div className="course-card-body">
                    <div className="course-meta">
                      <div className="course-meta-item">
                        <span className="course-meta-icon">{getFacultyIcon(course.faculty)}</span>
                        {course.faculty}
                      </div>
                    </div>
                    <Link href={`/courses/${course.slug}`} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                      View Details <span className="btn-icon">→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Start Your Journey?</h2>
            <p>Apply now and begin your path to a globally recognized qualification at EduLink International Campus.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">Apply Now <span className="btn-icon">→</span></Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div style={{ padding: '100px 0', textAlign: 'center' }}>Loading programs...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
