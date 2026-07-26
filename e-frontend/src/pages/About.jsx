import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ShieldCheck, Sprout, Handshake, Terminal, Server, Palette, Bot, Leaf, Globe, Lightbulb, Target, Search, Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import './About.css';

const values = [
  { icon: <Handshake size={36} strokeWidth={1.5} />, title: 'Client Partnership', desc: 'We believe every successful project begins with listening. We work closely with our clients to understand their needs and build solutions that align with their goals.' },
  { icon: <Lightbulb size={36} strokeWidth={1.5} />, title: 'Innovation', desc: 'We embrace new technologies and continuously seek better ways to solve complex business challenges.' },
  { icon: <Target size={36} strokeWidth={1.5} />, title: 'Excellence', desc: 'We are committed to delivering reliable, scalable, and high-quality software that exceeds expectations.' },
  { icon: <Search size={36} strokeWidth={1.5} />, title: 'Transparency', desc: 'We communicate honestly about timelines, pricing, project progress, and technical decisions, building trust throughout every project.' },
  { icon: <Rocket size={36} strokeWidth={1.5} />, title: 'Continuous Growth', desc: 'Technology evolves every day, and so do we. We continuously improve our skills, processes, and solutions to provide the best value to our clients.' },
  { icon: <ShieldCheck size={36} strokeWidth={1.5} />, title: 'Integrity', desc: 'We uphold professionalism, accountability, and ethical practices in every client relationship and project we undertake.' },
  { icon: <Heart size={36} strokeWidth={1.5} />, title: 'User-Centered Design', desc: 'We build software with the end user in mind, creating intuitive, accessible, and enjoyable experiences.' },
];

const cardColors = ['#00b85c', '#74c947', '#b2f25a', '#fddb45', '#f6af48', '#f38848', '#f06428'];

const cardStyles = [
  { bg: '#0b160b', tabText: '#95ff38' },
  { bg: '#122612', tabText: '#77cc2d' },
  { bg: '#1a3a19', tabText: '#5aa31f' },
  { bg: '#255223', tabText: '#183606' },
  { bg: '#326c2e', tabText: '#102404' },
  { bg: '#438a3c', tabText: '#081202' },
  { bg: '#58ab4e', tabText: '#000000' },
];

const milestones = [
  { year: '2021', event: 'E-Den Systems Founded', desc: 'Started as a small dev team with a big vision: software that grows with you.' },
  { year: '2022', event: 'First 10 Clients', desc: 'Delivered custom systems for small businesses across multiple industries.' },
  { year: '2023', event: 'AI Integration Services', desc: 'Expanded into AI-powered solutions, chatbots, and smart automation.' },
  { year: '2024', event: '30+ Projects Completed', desc: 'Reached a major milestone with a diverse portfolio of enterprise-grade systems.' },
  { year: '2025+', event: 'Growing Strong', desc: 'Continuing to scale, innovate, and help businesses grow digitally.' },
];

function About() {
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

  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5, 6]);

  const handleNext = () => setOrder(prev => [...prev.slice(1), prev[0]]);
  const handlePrev = () => setOrder(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);

  // Auto-play the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setOrder(prev => [...prev.slice(1), prev[0]]);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getCardProps = (cardIndex) => {
    const position = order.indexOf(cardIndex);
    const isCenter = position === 1;
    const isLeft = position === 0;
    const isRight = position === 2;
    
    // Default hidden
    let x = '0%';
    let scale = 0.5;
    let opacity = 0;
    let zIndex = 0;
    let rotateY = 0;
    let pointerEvents = 'none';
    
    let frontBg = '#1a1a1a';
    let frontColor = '#6DC726';
    
    if (isCenter) {
      x = '0%';
      scale = 1;
      opacity = 1;
      zIndex = 10;
      rotateY = 180;
      pointerEvents = 'auto';
      frontBg = '#0a0a0a'; // Dark to match back side
      frontColor = '#6DC726';
    } else if (isLeft) {
      x = '-105%';
      scale = 0.85;
      opacity = 1;
      zIndex = 5;
      rotateY = 0;
      pointerEvents = 'auto';
      frontBg = '#3b7a33'; // Dark green
      frontColor = '#0a1a08'; // Dark text
    } else if (isRight) {
      x = '105%';
      scale = 0.85;
      opacity = 1;
      zIndex = 5;
      rotateY = 0;
      pointerEvents = 'auto';
      frontBg = '#6dc726'; // Light green
      frontColor = '#0a1a08'; // Dark text
    } else if (position > 2) {
      x = '200%';
    } else {
      x = '-200%';
    }

    return { x, scale, opacity, zIndex, rotateY, pointerEvents, isCenter, isLeft, isRight, frontBg, frontColor };
  };

  return (
    <div className="about">
      {/* ── Page Hero ─────────────────────────────────────────────────────── */}
      <section className="page-hero section-animate">
        <div className="page-hero-bg">
          <img src="banner.png" alt="E-Den Systems Banner" className="page-hero-img" />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-glow" />
        <div className="container pop-up">
          <span className="page-hero-badge">🌿 Our Story</span>
          <h1 className="page-hero-title">
            We Are <span className="gradient-text">E-Den Systems</span>
          </h1>
          <p className="page-hero-subtitle">
            A dedicated IT development team on a mission to build software that truly grows with the businesses we serve.
          </p>
        </div>
      </section>

      {/* ── Mission ────────────────────────────────────────────────────────── */}
      <section className="section mission-section section-animate">
        <div className="container">
          <div className="mission-layout">
            <div className="mission-text pop-up">
              <SectionHeader
                badge="Our Mission"
                title={<>Building Software That <span className="gradient-text">Actually Works</span></>}
                subtitle=""
                align="left"
              />
              <p className="mission-body">
                To empower businesses through innovative, reliable, and user-centered software
                solutions that streamline operations, improve productivity, and support sustainable
                growth. We strive to transform ideas into practical digital solutions by combining
                technical expertise with a deep understanding of our clients' goals.
              </p>
              <p className="mission-body">
                Our name reflects our philosophy: <strong>E</strong> for electronic innovation,
                <strong> Den</strong> for a home where ideas take root and flourish —
                just like the growing plant in our logo, rooted in technology and reaching toward the sky.
              </p>
              <div className="mission-tagline">
                <span className="gradient-text">"Software That Grows With You"</span>
              </div>
            </div>
            <div className="mission-visual pop-up">
              <div className="mission-card">
                <div className="mission-card-icon"><Leaf size={48} strokeWidth={1.5} color="var(--green)" /></div>
                <div className="mission-stat-row">
                  <div className="m-stat"><span className="gradient-text">50+</span><label>Projects</label></div>
                  <div className="m-stat"><span className="gradient-text">30+</span><label>Clients</label></div>
                  <div className="m-stat"><span className="gradient-text">3+</span><label>Years</label></div>
                </div>
                <div className="mission-divider" />
                <p className="mission-card-text">
                  Every project we take on gets our full focus, creativity, and commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision ─────────────────────────────────────────────────────────── */}
      <section className="section vision-section section-animate">
        <div className="container">
          <div className="vision-layout">
            <div className="vision-visual pop-up">
              <div className="mission-card">
                <div className="mission-card-icon"><Globe size={48} strokeWidth={1.5} color="var(--cyan)" /></div>
                <div className="mission-divider" />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text)' }}>Global Impact</h3>
                <p className="mission-card-text" style={{ paddingBottom: '1rem' }}>
                  Building the digital foundation for tomorrow's industry leaders across the world.
                </p>
              </div>
            </div>
            <div className="mission-text pop-up">
              <SectionHeader
                badge="Our Vision"
                title={<>Transforming Ideas Into <span className="gradient-text">World-Class Solutions</span></>}
                subtitle=""
                align="left"
              />
              <p className="mission-body">
                To become one of the world's most trusted software development teams, recognized for transforming ideas into world-class digital solutions and helping businesses across the globe thrive through innovation, reliability, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────────────────── */}
      <section className="section values-section section-animate">
        <div className="container pop-up">
          <SectionHeader
            badge="Core Values"
            title="What Drives Us"
            subtitle="Our principles are baked into every line of code and every client interaction."
          />
          <div className="carousel-wrapper pop-up">
            <div className="carousel-container">
              {values.map(({ icon, title, desc }, i) => {
                const props = getCardProps(i);
                return (
                  <motion.div
                    key={title}
                    className="carousel-card"
                    animate={{ 
                      x: props.x, 
                      scale: props.scale, 
                      opacity: props.opacity, 
                      zIndex: props.zIndex 
                    }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    style={{ 
                      '--card-bg': cardStyles[i].bg, 
                      '--card-accent': cardStyles[i].tabText,
                      pointerEvents: props.pointerEvents
                    }}
                    onClick={() => {
                      if (props.isLeft) handlePrev();
                      if (props.isRight) handleNext();
                    }}
                  >
                    <motion.div 
                      className="carousel-card-inner"
                      animate={{ rotateY: props.rotateY }}
                      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <motion.div 
                        className="carousel-card-front"
                        animate={{ 
                          backgroundColor: props.frontBg,
                          color: props.frontColor
                        }}
                        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <div className="carousel-icon-front" style={{ color: 'inherit' }}>{icon}</div>
                        <div className="carousel-title-front" style={{ color: 'inherit' }}>{title}</div>
                      </motion.div>
                      <div className="carousel-card-back">
                        <div className="carousel-icon-back">{icon}</div>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
            <div className="carousel-controls">
              <button className="carousel-btn" onClick={handlePrev} aria-label="Previous card">←</button>
              <button className="carousel-btn" onClick={handleNext} aria-label="Next card">→</button>
            </div>
          </div>
        </div>
      </section>


      {/* ── Timeline ───────────────────────────────────────────────────────── */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-animate">
            <div className="pop-up">
              <SectionHeader
                badge="Our Journey"
                title="From Day One to Now"
                subtitle="A timeline of our growth as a team and the milestones that shaped us."
              />
            </div>
          </div>
          <div className="timeline">
            {milestones.map(({ year, event, desc }, i) => (
              <div key={year} className="section-animate">
                <div className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'} pop-up`}>
                  <div className="timeline-content">
                    <span className="timeline-year gradient-text">{year}</span>
                    <h4>{event}</h4>
                    <p>{desc}</p>
                  </div>
                  <div className="timeline-dot" />
                </div>
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;