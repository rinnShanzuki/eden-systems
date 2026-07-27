import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Inquire.css';

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS credentials — replace these with your own from https://emailjs.com
// Service ID  → EmailJS Dashboard > Email Services
// Template ID → EmailJS Dashboard > Email Templates
// Public Key  → EmailJS Dashboard > Account > Public Key
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

function Inquire() {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', inquiry: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required.';
    if (!form.email.trim())   e.email   = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.inquiry.trim()) e.inquiry = 'Inquiry message is required.';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setForm({ name: '', email: '', inquiry: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="inquire-page">
      {/* ── Background ────────────────────────────────────────────────────── */}
      <div className="inquire-bg">
        <div className="inquire-blob inquire-blob--1" />
        <div className="inquire-blob inquire-blob--2" />
      </div>

      {/* ── Card ──────────────────────────────────────────────────────────── */}
      <div className="inquire-container">
        <div className="inquire-card">
          {/* Left panel */}
          <div className="inquire-left">
            <Link to="/" className="inquire-back">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to Home
            </Link>

            <div className="inquire-brand">
              <img src="/edenlogo.png" alt="E-Den Systems" className="inquire-logo" />
            </div>

            <h1 className="inquire-headline">
              Let's Start a<br />
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="inquire-subtext">
              Tell us about your project and we'll get back to you within 24 hours
              with a personalized solution.
            </p>

            <ul className="inquire-perks">
              {[
                'Free initial consultation',
                'No commitment required',
                'Response within 24 hours',
                'Tailored solutions for your needs',
              ].map((perk) => (
                <li key={perk}>
                  <span className="inquire-perk-dot" />
                  {perk}
                </li>
              ))}
            </ul>

            <div className="inquire-contact-info">
              <div className="inquire-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                edensyst.devteam@gmail.com
              </div>
              <div className="inquire-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Philippines
              </div>
            </div>
          </div>

          {/* Right panel — Form */}
          <div className="inquire-right">
            {status === 'success' ? (
              <div className="inquire-success">
                <div className="inquire-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                       strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h2>Message Sent!</h2>
                <p>Thank you for reaching out. We'll be in touch within 24 hours.</p>
                <button className="btn-primary" onClick={() => setStatus('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div className="inquire-form-header">
                  <h2>Send an Inquiry</h2>
                  <p>Fill in the details below and we'll respond shortly.</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="inquire-form" noValidate>
                  {/* Name */}
                  <div className={`form-group ${errors.name ? 'form-group--error' : ''}`}>
                    <label htmlFor="name">Full Name</label>
                    <div className="input-wrapper">
                      <span className="input-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                        </svg>
                      </span>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Juan Dela Cruz"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                      />
                    </div>
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className={`form-group ${errors.email ? 'form-group--error' : ''}`}>
                    <label htmlFor="email">Email Address</label>
                    <div className="input-wrapper">
                      <span className="input-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </span>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@gmail.com"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                    </div>
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  {/* Inquiry */}
                  <div className={`form-group ${errors.inquiry ? 'form-group--error' : ''}`}>
                    <label htmlFor="inquiry">Your Inquiry</label>
                    <div className="input-wrapper input-wrapper--textarea">
                      <span className="input-icon input-icon--top">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </span>
                      <textarea
                        id="inquiry"
                        name="inquiry"
                        rows={5}
                        placeholder="Describe your project, goals, or any questions you have..."
                        value={form.inquiry}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.inquiry && <span className="form-error">{errors.inquiry}</span>}
                  </div>

                  {status === 'error' && (
                    <div className="form-send-error">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`inquire-submit ${status === 'sending' ? 'inquire-submit--loading' : ''}`}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="inquire-spinner" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                          <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inquire;
