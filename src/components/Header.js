'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/courses', label: 'Courses' },
    { href: '/life', label: 'Life @ EduLink' },
    { href: '/events', label: 'News & Events' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="header-top">
        <div className="container header-top-inner">
          <div className="header-top-left">
            <a href="mailto:admissions@edulink.edu">
              <span>✉</span> admissions@edulink.edu
            </a>
            <a href="tel:+94771771799">
              <span>📞</span> +94 111 111 111
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : 'header-transparent'}`} style={{ top: scrolled ? 0 : '32px' }}>
        <div className="container header-inner">
          <Link href="/" className="logo">
            <img src="/images/Edulink Logo-02.png" alt="EduLink Logo" style={{ height: '70px', width: 'auto' }} />
          </Link>

          <nav className="nav-menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <form className={`search-container ${isSearchOpen ? 'open' : ''}`} onSubmit={handleSearch}>
              <button
                type="button"
                className="search-icon-btn"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search programs, news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </form>

            <div className="nav-cta">
              <Link href="/contact" className="btn btn-primary btn-sm">
                Apply Now <span className="btn-icon">→</span>
              </Link>
            </div>
          </div>

          <button
            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
          Apply Now
        </Link>
      </div>
    </>
  );
}
