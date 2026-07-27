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
            <a href="https://www.facebook.com/edensystems/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://www.instagram.com/edensys.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
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
            <li>
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </span>
              edensyst.devteam@gmail.com
            </li>
            <li>
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              Philippines
            </li>
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
