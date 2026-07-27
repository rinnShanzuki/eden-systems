import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, Bot, BarChart3, Sprout, Target, Zap, Handshake, Search } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import './Home.css';

const stats = [
  { value: '35+', label: 'Projects Delivered' },
  { value: '22+', label: 'Happy Clients' },
  { value: '3+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
];

const services = [
  {
    icon: <Settings size={36} strokeWidth={1.5} />,
    title: 'Custom Web Systems',
    desc: 'Tailor-built web applications designed around your exact business workflows and requirements.',
    color: 'green',
  },
  {
    icon: <Bot size={36} strokeWidth={1.5} />,
    title: 'AI Integration',
    desc: 'Embed intelligent automation, chatbots, and predictive analytics directly into your operations.',
    color: 'cyan',
  },
  {
    icon: <BarChart3 size={36} strokeWidth={1.5} />,
    title: 'Management Systems',
    desc: 'Inventory, attendance, booking, POS, and HR systems built for real operational efficiency.',
    color: 'green',
  },
  {
    icon: <Search size={36} strokeWidth={1.5} />,
    title: 'SEO Optimization',
    desc: 'Boost your visibility and rank higher on search engines to drive organic traffic and sustainable growth.',
    color: 'cyan',
  },
];

const whyUs = [
  { icon: <Sprout size={24} strokeWidth={2} />, title: 'We Grow With You', desc: 'Our systems scale as your business does — no need to start over.' },
  { icon: <Target size={24} strokeWidth={2} />, title: 'Built for Your Needs', desc: 'No cookie-cutter templates. Every solution is crafted for your workflow.' },
  { icon: <Zap size={24} strokeWidth={2} />, title: 'Fast Delivery', desc: 'Agile development process means working software in your hands faster.' },
  { icon: <Handshake size={24} strokeWidth={2} />, title: 'Ongoing Support', desc: 'We\'re your long-term tech partner, not just a one-time vendor.' },
];

function Home() {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = ['1.png', '2.png', '3.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="home">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hero section-animate">
        <div className="hero-bg">
          <div className="hero-carousel">
            {backgrounds.map((img, index) => (
              <img
                key={img}
                src={img}
                alt="Background"
                className={`hero-carousel-img ${index === currentBg ? 'active' : ''}`}
              />
            ))}
          </div>
          <div className="hero-circuit" />
          <div className="hero-glow hero-glow--green" />
          <div className="hero-glow hero-glow--cyan" />
        </div>
        <div className="hero-layout container">
          {/* ── Left: Text Content ── */}
          <div className="hero-content pop-up">
            <div className="hero-badge-row">
              <span className="hero-badge">🌿 IT Development Team</span>
            </div>
            <h1 className="hero-title">
              Software That <br />
              <span className="gradient-text">Grows With You</span>
            </h1>
            <p className="hero-subtitle">
              E-Den Systems builds custom digital solutions — from web systems and AI integration
              to management tools that scale alongside your business.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn-primary">Explore Services</Link>
              <Link to="/portfolio" className="btn-outline">View Our Work</Link>
            </div>
            <div className="hero-chips">
              <span className="chip"><Settings size={16} className="chip-icon" /> Custom Systems</span>
              <span className="chip"><Bot size={16} className="chip-icon" /> AI Integration</span>
              <span className="chip"><BarChart3 size={16} className="chip-icon" /> Management Systems</span>
              <span className="chip"><Search size={16} className="chip-icon" /> SEO</span>
            </div>
          </div>

          {/* ── Right: Logo Visual ── */}
          <div className="hero-visual pop-up">
            <div className="hero-visual-glow" />
            <div className="hero-logo-ring" />
            <div className="hero-logo-3d">
              <div className="hero-logo-face">
                <img src="logo.png" alt="E-Den Systems" className="hero-logo-img" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span />
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────────── */}
      <section className="stats-bar section-animate">
        <div className="stats-inner container pop-up">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-value gradient-text">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Preview ─────────────────────────────────────────────────── */}
      <section className="section services-preview section-animate">
        <div className="container">
          <div className="pop-up">
            <SectionHeader
              badge="What We Do"
              title="Solutions Built to Scale"
              subtitle="We specialize in custom technology that fits your business like a glove — not the other way around."
            />
          </div>
          <div className="services-grid">
            {services.map(({ icon, title, desc, color }) => (
              <div key={title} className={`service-card service-card--${color} pop-up`}>
                <div className="service-card-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/services" className="service-card-link">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <div className="services-cta pop-up">
            <Link to="/services" className="btn-outline">See All Services</Link>
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────────────────────── */}
      <section className="section why-section section-animate">
        <div className="container">
          <div className="why-layout">
            <div className="why-left pop-up">
              <SectionHeader
                badge="Why E-Den Systems"
                title={
                  <>Why Clients Choose<br /><span className="gradient-text">E-Den Systems</span></>
                }
                subtitle="We're more than developers — we're your dedicated technology growth partner."
                align="left"
              />
              <div className="why-grid">
                {whyUs.map(({ icon, title, desc }) => (
                  <div key={title} className="why-card">
                    <span className="why-icon">{icon}</span>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-right pop-up">
              <div className="why-visual">
                <div className="tree-circuit">
                  <div className="tree-trunk" />
                  <div className="tree-branch tree-branch--1" />
                  <div className="tree-branch tree-branch--2" />
                  <div className="tree-branch tree-branch--3" />
                  <div className="tree-leaf tree-leaf--1">🌿</div>
                  <div className="tree-leaf tree-leaf--2">🌿</div>
                  <div className="tree-leaf tree-leaf--3">🌿</div>
                  <div className="circuit-node cn-1" />
                  <div className="circuit-node cn-2" />
                  <div className="circuit-node cn-3" />
                </div>
                <div className="why-visual-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="cta-banner section-animate">
        <div className="cta-glow" />
        <div className="container cta-inner pop-up">
          <h2>Ready to Build Something <span className="gradient-text">Great?</span></h2>
          <p>Let's talk about your project. No pressure — just a conversation about your goals.</p>
          <div className="cta-actions">
            <Link to="/services" className="btn-primary">Start Your Project</Link>
            <Link to="/reviews" className="btn-ghost">See Client Reviews</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
