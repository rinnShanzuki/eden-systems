import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Bot, Layers, Globe, Palette, Server, Database, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import './Services.css';

const services = [
  {
    id: 'custom-web',
    icon: <Monitor size={48} strokeWidth={1.2} />,
    title: 'Custom Web Application Development',
    tagline: 'Tailor-Made for You',
    desc: 'Tailor-made web applications designed for your business needs — built from the ground up to match your exact workflows and goals.',
    features: ['Admin dashboards', 'Multi-user role systems', 'Real-time data updates', 'API integrations', 'Automated reporting'],
    color: 'green',
  },
  {
    id: 'biz-systems',
    icon: <Layers size={48} strokeWidth={1.2} />,
    title: 'Business Management Systems',
    tagline: 'Streamline Operations',
    desc: 'Custom systems to streamline your day-to-day operations — from tracking inventory to managing appointments, visitors, and events.',
    features: ['Inventory Management', 'Attendance Monitoring', 'Appointment Booking', 'Library Management', 'Event Registration', 'Visitor Management', 'School, Clinic, Restaurant & other Management Systems'],
    color: 'cyan',
  },
  {
    id: 'biz-website',
    icon: <Globe size={48} strokeWidth={1.2} />,
    title: 'Business Website Development',
    tagline: 'Your Online Presence',
    desc: 'Professional websites, landing pages, company profiles, and portfolio websites that establish your online presence and attract the right audience.',
    features: ['Company profile websites', 'Landing pages', 'Portfolio websites', 'SEO-ready structure', 'Mobile-responsive design'],
    color: 'green',
  },
  {
    id: 'ai',
    icon: <Bot size={48} strokeWidth={1.2} />,
    title: 'AI-Powered Solutions',
    tagline: 'Smart Automation',
    desc: 'Integrate Artificial Intelligence into your system for automation, chatbots, recommendations, analytics, image recognition, and other smart features.',
    features: ['AI Chatbots & Assistants', 'Predictive Analytics', 'Recommendation Engines', 'Image Recognition', 'Smart Automation'],
    color: 'cyan',
  },
  {
    id: 'uiux',
    icon: <Palette size={48} strokeWidth={1.2} />,
    title: 'UI/UX Design',
    tagline: 'Design That Feels Right',
    desc: 'Modern, responsive, and user-friendly interface designs focused on delivering a great user experience that keeps users engaged.',
    features: ['Wireframing & prototyping', 'Responsive design', 'Design systems', 'User flow optimization', 'Accessibility standards'],
    color: 'green',
  },
  {
    id: 'backend',
    icon: <Server size={48} strokeWidth={1.2} />,
    title: 'Backend & API Development',
    tagline: 'Secure & Scalable',
    desc: 'Secure server-side development, API integration, authentication, payment gateways, and third-party service connections.',
    features: ['RESTful & GraphQL APIs', 'Authentication & authorization', 'Payment gateway integration', 'Third-party service APIs', 'Webhook & real-time events'],
    color: 'cyan',
  },
  {
    id: 'database',
    icon: <Database size={48} strokeWidth={1.2} />,
    title: 'Database Design & Management',
    tagline: 'Reliable Data Storage',
    desc: 'Efficient, scalable, and secure database architecture for reliable data storage, fast retrieval, and long-term data management.',
    features: ['Schema design & normalization', 'Query optimization', 'Data migration', 'Backup & recovery planning', 'Multi-database support'],
    color: 'green',
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
                <div className="process-step-number">{step}</div>
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
