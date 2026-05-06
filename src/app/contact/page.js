"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      setSubmitError(error.message || "Unable to send your message right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="hero-page">
        <div className="hero-bg">
          <img src="/images/contact-hero.png" alt="Contact Us" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div
            className="hero-content"
            style={{ animation: "fadeInUp 0.8s ease forwards" }}
          >
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span className="breadcrumb-current">Contact Us</span>
            </div>
            <h1>Contact Us</h1>
            <p
              className="hero-text"
              style={{ margin: "0 auto", textAlign: "center" }}
            >
              Have questions? We're here to help. Reach out to us for
              admissions, support, or general inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT INFO ==================== */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal delay={0}>
              <div className="contact-card">
                <div className="contact-card-icon">📞</div>
                <h4>Call Us</h4>
                <p>0112589202</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="contact-card">
                <div className="contact-card-icon">✉</div>
                <h4>Email Us</h4>
                <p>info@edulink.edu.lk</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="contact-card">
                <div className="contact-card-icon">📍</div>
                <h4>Visit Us</h4>
                <p>6 Glen Aber Road Colombo, Colombo, Sri Lanka, 004</p>
              </div>
            </ScrollReveal>
          </div>

          {/* ==================== FORM + MAP ==================== */}
          <div className="contact-form-section">
            <ScrollReveal>
              <div className="contact-form">
                <h3>Send Us a Message</h3>

                {submitted && (
                  <div
                    style={{
                      background: "rgba(56, 161, 105, 0.1)",
                      border: "1px solid var(--success)",
                      borderRadius: "var(--radius-md)",
                      padding: "1rem 1.5rem",
                      marginBottom: "1.5rem",
                      color: "var(--success)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitError && (
                  <div
                    style={{
                      background: "rgba(229, 62, 62, 0.08)",
                      border: "1px solid var(--danger)",
                      borderRadius: "var(--radius-md)",
                      padding: "1rem 1.5rem",
                      marginBottom: "1.5rem",
                      color: "var(--danger)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Enter your phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="category">Inquiry Category *</label>
                      <select
                        id="category"
                        name="category"
                        className="form-control"
                        value={formData.category}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a category</option>
                        <option value="admissions">Admissions</option>
                        <option value="courses">Course Information</option>
                        <option value="fees">Fees & Payments</option>
                        <option value="scholarships">Scholarships</option>
                        <option value="support">Student Support</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: "100%" }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}{" "}
                    <span className="btn-icon">→</span>
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps?q=6.8955932,79.8544076&z=17&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EduLink Glen Aber Road Location"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== SOCIAL MEDIA ==================== */}
      <section className="section section-gray">
        <div className="container text-center">
          <ScrollReveal>
            <span className="section-label">Stay Connected</span>
            <h2 className="section-title">Follow Us on Social Media</h2>
            <p className="section-subtitle mx-auto">
              Stay updated with the latest news, events, and announcements from
              EduLink.
            </p>
          </ScrollReveal>

          <div className="social-links">
            {[
              {
                label: "Facebook",
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                ),
              },
              {
                label: "Instagram",
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                ),
              },
              {
                label: "TikTok",
                icon: (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95v7.4c-.01 2.98-1.73 5.8-4.48 6.99-2.58 1.12-5.75.82-8.06-.79-2.22-1.56-3.48-4.32-3.11-7.05.3-2.25 1.58-4.34 3.49-5.54 2.16-1.34 4.96-1.61 7.37-.8v4.11c-1.33-.24-2.77-.16-3.99.46-1.12.56-1.9 1.63-2.12 2.87-.24 1.34.19 2.79 1.14 3.73 1.05.99 2.65 1.28 4.02.7 1.6-.68 2.59-2.4 2.6-4.14V.02z" />
                  </svg>
                ),
              },
              {
                label: "YouTube",
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                ),
              },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className="social-link"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Begin Your Journey?</h2>
            <p>
              Apply now and take the first step towards a world-class education
              at EduLink International Campus.
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
