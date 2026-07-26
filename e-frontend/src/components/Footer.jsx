import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = {
  Pages: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Reviews', path: '/reviews' },
  ],
  Services: [
    { label: 'Custom Web Systems', path: '/services' },
    { label: 'AI Integration', path: '/services' },
    { label: 'Management Systems', path: '/services' },
    { label: 'Mobile Apps', path: '/services' },
    { label: 'IT Consultation', path: '/services' },
  ],
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src="/logo.png" alt="E-Den Systems" className="footer-logo-img" />
          </Link>
          <p className="footer-tagline">Software That Grows With You</p>
          <p className="footer-desc">
            We build custom digital solutions that scale with your business —
            from web systems to AI integration.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="GitHub" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="footer-col">
            <h4 className="footer-col-title">{group}</h4>
            <ul>
              {links.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-contact">
            <li>📧 hello@edensystems.dev</li>
            <li>📞 +63 900 000 0000</li>
            <li>📍 Philippines</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-line" />
        <p>© {new Date().getFullYear()} E-Den Systems. All rights reserved. — Software That Grows With You 🌿</p>
      </div>
    </footer>
  );
}

export default Footer;
