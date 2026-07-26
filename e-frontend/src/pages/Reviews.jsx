import { useEffect } from 'react';
import { UserCircle2, UserRound, UserCircle, UserCheck, Star, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    name: 'Maria Santos',
    company: 'Santos Retail Group',
    role: 'Business Owner',
    rating: 5,
    avatar: <UserCircle2 size={32} strokeWidth={1.5} />,
    text: 'E-Den Systems completely transformed how we run our stores. The POS and inventory system they built is incredibly smooth and saved us hours of manual work every day. Highly recommend!',
    service: 'POS & Inventory System',
  },
  {
    id: 2,
    name: 'James Reyes',
    company: 'Reyes Clinic Network',
    role: 'Operations Manager',
    rating: 5,
    avatar: <UserCheck size={32} strokeWidth={1.5} />,
    text: 'Our online booking system now runs itself. Patients can book appointments 24/7, staff get instant notifications, and no-shows dropped by 40% thanks to automated reminders. Outstanding work.',
    service: 'Booking Platform',
  },
  {
    id: 3,
    name: 'Ana Cruz',
    company: 'Cruz Logistics Co.',
    role: 'CEO',
    rating: 5,
    avatar: <UserRound size={32} strokeWidth={1.5} />,
    text: 'The AI document processing tool they built cut our data entry time by 90%. What used to take my team a whole day is now done in minutes. The ROI was immediate.',
    service: 'AI Document Analyzer',
  },
  {
    id: 4,
    name: 'Roberto Tan',
    company: 'Tan Manufacturing',
    role: 'Plant Manager',
    rating: 5,
    avatar: <UserCircle size={32} strokeWidth={1.5} />,
    text: 'Their attendance and HR system replaced three separate tools we were using. Everything is in one place now — timekeeping, payroll exports, leave requests. It just works.',
    service: 'HR & Attendance System',
  },
  {
    id: 5,
    name: 'Carla Lim',
    company: 'Lim Fashion Store',
    role: 'Store Manager',
    rating: 5,
    avatar: <UserCircle2 size={32} strokeWidth={1.5} />,
    text: 'I was skeptical at first, but the team was incredibly patient and thorough. They understood exactly what we needed, even when we couldn\'t fully articulate it ourselves. The result exceeded expectations.',
    service: 'E-Commerce Platform',
  },
  {
    id: 6,
    name: 'Diego Mendoza',
    company: 'Mendoza Real Estate',
    role: 'Director',
    rating: 5,
    avatar: <UserRound size={32} strokeWidth={1.5} />,
    text: 'Professional, responsive, and genuinely invested in our success. The property booking platform they delivered is sleek and our clients love using it. E-Den Systems is our go-to tech partner.',
    service: 'Online Booking Platform',
  },
];

const ratingBreakdown = [
  { stars: 5, pct: 92 },
  { stars: 4, pct: 6 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'star star--filled' : 'star'}>
          <Star size={16} fill={i < count ? 'currentColor' : 'none'} strokeWidth={i < count ? 0 : 2} />
        </span>
      ))}
    </div>
  );
}

function Reviews() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('.section-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="reviews">
      {/* ── Page Hero ─────────────────────────────────────────────────────── */}
      <section className="page-hero section-animate">
        <div className="page-hero-bg">
          <img src="banner.png" alt="E-Den Systems Banner" className="page-hero-img" />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-glow" />
        <div className="container pop-up">
          <span className="page-hero-badge">⭐ Client Stories</span>
          <h1 className="page-hero-title">
            What Clients <span className="gradient-text">Say About Us</span>
          </h1>
          <p className="page-hero-subtitle">
            Real results from real businesses. Here's what our clients experience when they choose E-Den Systems.
          </p>
        </div>
      </section>

      {/* ── Rating Summary ────────────────────────────────────────────────── */}
      <section className="section rating-summary-section">
        <div className="container">
          <div className="section-animate">
            <div className="rating-summary pop-up">
            <div className="rating-big">
              <span className="rating-number gradient-text">5.0</span>
              <Stars count={5} />
              <p className="rating-count">Based on {reviews.length}+ reviews</p>
            </div>
            <div className="rating-bars">
              {ratingBreakdown.map(({ stars, pct }) => (
                <div key={stars} className="rating-bar-row">
                  <span className="rating-bar-label">{stars} ★</span>
                  <div className="rating-bar-track">
                    <div
                      className="rating-bar-fill"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="rating-bar-pct">{pct}%</span>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Grid ─────────────────────────────────────────────── */}
      <section className="section testimonials-section">
        <div className="container">
          <SectionHeader
            badge="Testimonials"
            title="Client Testimonials"
            subtitle="Don't take our word for it — hear directly from the businesses we've helped grow."
          />
          <div className="testimonials-grid">
            {reviews.map(({ id, name, company, role, rating, avatar, text, service }) => (
              <div key={id} className="section-animate">
                <div className="testimonial-card pop-up">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{avatar}</div>
                  <div className="testimonial-info">
                    <strong className="testimonial-name">{name}</strong>
                    <span className="testimonial-role">{role}</span>
                    <span className="testimonial-company">{company}</span>
                  </div>
                  <Stars count={rating} />
                </div>
                <p className="testimonial-text">"{text}"</p>
                <div className="testimonial-service">
                  <span className="service-pill"><CheckCircle2 size={12} strokeWidth={2.5} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} /> {service}</span>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="cta-banner section-animate">
        <div className="cta-glow" />
        <div className="container cta-inner pop-up">
          <h2>Join Our <span className="gradient-text">Happy Clients</span></h2>
          <p>Let's create a success story together. Reach out and let's get started.</p>
          <div className="cta-actions">
            <a href="mailto:hello@edensystems.dev" className="btn-primary">Work With Us</a>
            <a href="/portfolio" className="btn-ghost">View Our Work</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
