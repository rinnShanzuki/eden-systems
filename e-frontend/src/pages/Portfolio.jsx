import { useState, useEffect } from 'react';
import { Store, Bot, Calendar, LineChart, Package, ShoppingCart, Smartphone, FileText, Users } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import './Portfolio.css';

const filters = ['All', 'Web', 'AI', 'Systems', 'Mobile'];

const projects = [
  {
    id: 1,
    title: 'Smart POS System',
    category: 'Systems',
    desc: 'A full-featured point-of-sale system with inventory tracking, sales reports, and multi-cashier support for a retail chain.',
    tags: ['React', 'Node.js', 'MySQL'],
    icon: <Store size={32} strokeWidth={1.5} />,
    color: 'green',
  },
  {
    id: 2,
    title: 'AI Customer Assistant',
    category: 'AI',
    desc: 'Intelligent chatbot integrated into a service company\'s website, handling 80% of customer inquiries automatically.',
    tags: ['Python', 'OpenAI API', 'FastAPI'],
    icon: <Bot size={32} strokeWidth={1.5} />,
    color: 'cyan',
  },
  {
    id: 3,
    title: 'Online Booking Platform',
    category: 'Web',
    desc: 'Multi-service appointment booking system with calendar sync, client reminders, and staff availability management.',
    tags: ['React', 'Express', 'PostgreSQL'],
    icon: <Calendar size={32} strokeWidth={1.5} />,
    color: 'green',
  },
  {
    id: 4,
    title: 'Attendance Tracker',
    category: 'Systems',
    desc: 'QR-based employee attendance system with real-time dashboard, payroll export, and manager approval workflows.',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    icon: <LineChart size={32} strokeWidth={1.5} />,
    color: 'cyan',
  },
  {
    id: 5,
    title: 'Inventory Pro',
    category: 'Systems',
    desc: 'Multi-warehouse inventory management system with barcode scanning, low-stock alerts, and supplier management.',
    tags: ['React', 'Laravel', 'MySQL'],
    icon: <Package size={32} strokeWidth={1.5} />,
    color: 'green',
  },
  {
    id: 6,
    title: 'E-Commerce Platform',
    category: 'Web',
    desc: 'Full custom e-commerce solution with product catalog, payment gateway integration, and order management dashboard.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    icon: <ShoppingCart size={32} strokeWidth={1.5} />,
    color: 'cyan',
  },
  {
    id: 7,
    title: 'Service Booking App',
    category: 'Mobile',
    desc: 'Cross-platform mobile app for booking home services, with GPS tracking, in-app chat, and secure payment flow.',
    tags: ['React Native', 'Firebase', 'Stripe'],
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    color: 'green',
  },
  {
    id: 8,
    title: 'AI Document Analyzer',
    category: 'AI',
    desc: 'Automated document classification and data extraction tool that reduced manual data entry by 90% for a logistics firm.',
    tags: ['Python', 'LangChain', 'GPT-4'],
    icon: <FileText size={32} strokeWidth={1.5} />,
    color: 'cyan',
  },
  {
    id: 9,
    title: 'HR Management System',
    category: 'Systems',
    desc: 'Comprehensive HR platform covering recruitment, onboarding, leave management, and performance tracking.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    icon: <Users size={32} strokeWidth={1.5} />,
    color: 'green',
  },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
  }, [activeFilter]);

  return (
    <div className="portfolio">
      {/* ── Page Hero ─────────────────────────────────────────────────────── */}
      <section className="page-hero section-animate">
        <div className="page-hero-bg">
          <img src="banner.png" alt="E-Den Systems Banner" className="page-hero-img" />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-glow" />
        <div className="container pop-up">
          <span className="page-hero-badge">🚀 Our Work</span>
          <h1 className="page-hero-title">
            Project <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="page-hero-subtitle">
            A selection of custom systems, web applications, and AI solutions we've delivered for our clients.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────────────────── */}
      <section className="section portfolio-main">
        <div className="container">
          {/* Filters */}
          <div className="section-animate">
            <div className="portfolio-filters pop-up">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="portfolio-grid">
            {filtered.map(({ id, title, category, desc, tags, icon, color }) => (
              <div key={id} className="section-animate">
                <div className={`project-card project-card--${color} pop-up`}>
                  <div className="project-card-header">
                    <div className="project-icon">{icon}</div>
                    <span className={`project-cat project-cat--${color}`}>{category}</span>
                  </div>
                  <h3 className="project-title">{title}</h3>
                  <p className="project-desc">{desc}</p>
                  <div className="project-tags">
                    {tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="portfolio-empty">
              <span>No projects in this category yet.</span>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="cta-banner section-animate">
        <div className="cta-glow" />
        <div className="container cta-inner pop-up">
          <h2>Want to See Your Project <span className="gradient-text">Here?</span></h2>
          <p>Let's build something you'll be proud of. Reach out and let's talk.</p>
          <div className="cta-actions">
            <a href="mailto:hello@edensystems.dev" className="btn-primary">Start a Project</a>
            <a href="/services" className="btn-ghost">Our Services</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
