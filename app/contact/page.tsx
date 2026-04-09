import type { Metadata } from 'next';
import Link from 'next/link';
import MobileStickyCta from '@/components/MobileStickyCta';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Neuskale | Order a Title Search | 24/7 Support',
  description: 'Order your title search or contact Neuskale Title Services. Available 24/7 by phone, email, or online form. Nationwide coverage from $10.',
  alternates: { canonical: 'https://www.neuskale.com/contact' },
};

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Neuskale Title Services',
    url: 'https://www.neuskale.com/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Neuskale Title Services',
      telephone: '+1 860-327-5055',
      email: 'info@neuskale.com',
      address: { '@type': 'PostalAddress', streetAddress: '701 John Fitch Blvd, Suite 101', addressLocality: 'South Windsor', addressRegion: 'CT', postalCode: '06074', addressCountry: 'US' },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="hero-grid-bg"></div>
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1>Contact Us &amp; <span className="gradient-text">Order</span></h1>
          <p className="section-desc">Start your risk-free trial with 1–3 orders, or place a regular order. Available 24/7.</p>
        </div>
      </section>

      {/* Hidden form for Netlify build-bot field detection */}
      <form name="contact" data-netlify="true" hidden>
        <input name="order_intent" />
        <input name="full_name" />
        <input name="company_name" />
        <input name="email_address" />
        <input name="phone_number" />
        <input name="search_type" />
        <input name="state" />
        <input name="property_address" />
        <textarea name="additional_notes" />
      </form>

      {/* Contact Grid */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <ContactForm />
            <div>
              <div className="contact-info-card">
                <h3 style={{ marginBottom: 24 }}>Contact Information</h3>
                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div><p className="contact-info-label">Phone (24/7)</p><p className="contact-info-value"><a href="tel:+1 860-327-5055" style={{ color: 'var(--white)' }}>+1 860-327-5055</a></p></div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">📧</div>
                  <div><p className="contact-info-label">Email</p><p className="contact-info-value"><a href="mailto:info@neuskale.com" style={{ color: 'var(--white)' }}>info@neuskale.com</a></p></div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div><p className="contact-info-label">Headquarters</p><p className="contact-info-value">701 John Fitch Blvd, Suite 101<br />South Windsor, CT 06074</p></div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">🕐</div>
                  <div><p className="contact-info-label">Hours</p><p className="contact-info-value">24/7 — Always Available</p></div>
                </div>
              </div>
              <div className="contact-info-card" style={{ background: 'var(--dark-2)', border: '1px solid var(--border)', marginTop: 16 }}>
                <h3 style={{ marginBottom: 12 }}>⚡ Quick Order Options</h3>
                <p>Need a search done fast? You can also order via:</p>
                <p style={{ margin: 0 }}><strong style={{ color: 'var(--white)' }}>Email:</strong> Send property details to <a href="mailto:orders@neuskale.com" style={{ color: 'var(--pink)' }}>orders@neuskale.com</a></p>
                <p style={{ margin: 0 }}><strong style={{ color: 'var(--white)' }}>Phone:</strong> Call us at <a href="tel:+1 860-327-5055" style={{ color: 'var(--pink)' }}>+1 860-327-5055</a></p>
                <p style={{ margin: 0 }}><strong style={{ color: 'var(--white)' }}>Existing Clients:</strong> Continue through your private ordering portal or email your usual Neuskale contact for rush requests.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container">
          <h2>Questions About Our ETO Trial?</h2>
          <p>Our team is available 24/7 to explain our Experience, Try, Order model and help you send your first trial order.</p>
          <div className="cta-buttons">
            <a href="tel:+1 860-327-5055" className="btn btn-primary btn-lg">Call +1 860-327-5055</a>
            <a href="mailto:info@neuskale.com" className="btn btn-secondary">Email Us</a>
          </div>
        </div>
      </section>

      <MobileStickyCta orderHref="#" orderLabel="Jump to Form" />
    </>
  );
}
