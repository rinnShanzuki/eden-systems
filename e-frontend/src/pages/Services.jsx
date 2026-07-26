import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Bot, Package, Calendar, Smartphone, Search, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import './Services.css';

const services = [
  {
    id: 'web',
    icon: <Monitor size={48} strokeWidth={1.2} />,
    title: 'Custom Web Systems',
    tagline: 'Built for You',
    desc: 'We design and develop web applications tailored precisely to your operational workflows — not off-the-shelf templates forced to fit your needs.',
    features: ['Admin dashboards', 'Multi-user role systems', 'Real-time data updates', 'API integrations', 'Automated reporting'],
    color: 'green',
  },
  {
    id: 'ai',
    icon: <Bot size={48} strokeWidth={1.2} />,
    title: 'AI Integration',
    tagline: 'Smart Solutions',
    desc: 'Bring artificial intelligence into your business operations. From intelligent chatbots to predictive analytics, we make AI practical and accessible.',
    features: ['AI Chatbots & Assistants', 'Predictive Analytics', 'Natural Language Processing', 'Recommendation Engines', 'Automated Decision Making'],
    color: 'cyan',
  },
  {
    id: 'inventory',
    icon: <Package size={48} strokeWidth={1.2} />,
    title: 'Inventory Management',
    tagline: 'Track Everything',
    desc: 'Keep your stock, supplies, and assets perfectly organized with real-time tracking systems that eliminate guesswork and reduce losses.',
    features: ['Stock tracking & alerts', 'Purchase order management', 'Multi-location support', 'Barcode/QR scanning', 'Detailed reports & analytics'],
    color: 'green',
  },
  {
    id: 'booking',
    icon: <Calendar size={48} strokeWidth={1.2} />,
    title: 'Attendance & Booking',
    tagline: 'Organized Operations',
    desc: 'Automate your scheduling, appointments, and attendance tracking. Eliminate manual timekeeping and reduce administrative overhead.',
    features: ['Online appointment booking', 'Automated attendance logging', 'Calendar sync', 'Notification & reminders', 'Reporting & payroll-ready exports'],
    color: 'cyan',
  },
  {
    id: 'mobile',
    icon: <Smartphone size={48} strokeWidth={1.2} />,
    title: 'Mobile App Development',
    tagline: 'Your Business, Mobile',
    desc: 'Reach your users wherever they are with cross-platform mobile apps built for both iOS and Android, integrated with your existing systems.',
    features: ['Cross-platform (iOS & Android)', 'Offline-first capability', 'Push notifications', 'Backend API sync', 'App Store deployment support'],
    color: 'green',
  },
  {
    id: 'consult',
    icon: <Search size={48} strokeWidth={1.2} />,
    title: 'IT Consultation',
    tagline: 'Expert Guidance',
    desc: 'Not sure where to start? Our team assesses your current setup, identifies gaps, and delivers a clear technology roadmap for your growth.',
    features: ['Tech stack assessment', 'System architecture planning', 'Security review', 'Digital transformation roadmap', 'Vendor evaluation'],
    color: 'cyan',
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We learn your business goals, challenges, and requirements in depth.' },
  { step: '02', title: 'Planning', desc: 'We map out the architecture, features, and timeline with full transparency.' },
  { step: '03', title: 'Build', desc: 'Agile development in sprints, with regular demos and your feedback.' },
  { step: '04', title: 'Launch', desc: 'We deploy, test, and ensure everything runs flawlessly before go-live.' },
  { step: '05', title: 'Support', desc: 'Ongoing maintenance, updates, and growth features as your business evolves.' },
];

function Services() {
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
    <div className="services">
      {/* ── Page Hero ─────────────────────────────────────────────────────── */}
      <section className="page-hero section-animate">
        <div className="page-hero-bg">
          <img src="banner.png" alt="E-Den Systems Banner" className="page-hero-img" />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-glow" />
        <div className="container pop-up">
          <span className="page-hero-badge">⚙️ What We Build</span>
          <h1 className="page-hero-title">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="page-hero-subtitle">
            End-to-end digital solutions — from custom systems and AI to mobile apps and IT strategy.
            Everything built to grow with you.
          </p>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────────────── */}
      <section className="section services-main">
        <div className="container">
          <div className="services-list">
            {services.map(({ id, icon, title, tagline, desc, features, color }) => (
              <div key={id} className="section-animate">
                <div className={`srv-card srv-card--${color} pop-up`}>
                  <div className="srv-card-left">
                    <div className="srv-icon">{icon}</div>
                    <span className={`srv-tag srv-tag--${color}`}>{tagline}</span>
                    <h2 className="srv-title">{title}</h2>
                    <p className="srv-desc">{desc}</p>
                    <Link to="/portfolio" className="srv-cta">See Related Work →</Link>
                  </div>
                  <div className="srv-card-right">
                    <h4 className="srv-features-title">What's Included</h4>
                    <ul className="srv-features">
                      {features.map((f) => (
                        <li key={f}>
                          <span className="srv-check"><CheckCircle2 size={16} strokeWidth={2.5} /></span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ───────────────────────────────────────────────────── */}
      <section className="section process-section section-animate">
        <div className="container pop-up">
          <SectionHeader
            badge="How We Work"
            title="Our Development Process"
            subtitle="A clear, repeatable process that keeps your project on track from start to finish."
          />
          <div className="process-track">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="process-step">
                <div className="process-step-number gradient-text">{step}</div>
                <div className="process-step-line" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="cta-banner section-animate">
        <div className="cta-glow" />
        <div className="container cta-inner pop-up">
          <h2>Let's Build <span className="gradient-text">Your Solution</span></h2>
          <p>Tell us what you need and we'll show you how we can make it happen.</p>
          <div className="cta-actions">
            <a href="mailto:hello@edensystems.dev" className="btn-primary">Contact Us</a>
            <Link to="/portfolio" className="btn-ghost">View Portfolio</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
