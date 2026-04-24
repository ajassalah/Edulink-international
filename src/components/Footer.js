import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Column */}
          <div className="footer-about">
            <Link href="/" className="logo">
              <img src="/images/Edulink Logo-02.png" alt="EduLink Logo" style={{ height: '70px', width: 'auto' }} />
            </Link>
            <p>
              EduLink International Campus is committed to providing world-class education,
              fostering innovation, and shaping future leaders. Join our community of
              passionate learners from around the globe.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95v7.4c-.01 2.98-1.73 5.8-4.48 6.99-2.58 1.12-5.75.82-8.06-.79-2.22-1.56-3.48-4.32-3.11-7.05.3-2.25 1.58-4.34 3.49-5.54 2.16-1.34 4.96-1.61 7.37-.8v4.11c-1.33-.24-2.77-.16-3.99.46-1.12.56-1.9 1.63-2.12 2.87-.24 1.34.19 2.79 1.14 3.73 1.05.99 2.65 1.28 4.02.7 1.6-.68 2.59-2.4 2.6-4.14V.02z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/life">Life @ EduLink</Link>
            <Link href="/events">News & Events</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          {/* Our Campus */}
          <div className="footer-col">
            <h4>Academics</h4>
            <Link href="/courses">All Programs</Link>
            <a href="#">School of Computing</a>
            <a href="#">School of Management</a>
            <a href="#">School of Health</a>
            <a href="#">School of Education</a>
            <a href="#">Online Learning</a>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>123 University Avenue, Colombo 07, Sri Lanka</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <span>+94 771 771 799<br />+94 771 756 292</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉</span>
              <span>info@edulink.edu<br />admissions@edulink.edu</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">🌍</span>
              <span>Sri Lanka | UAE | KSA | Maldives</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2025 EduLink International Campus. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
