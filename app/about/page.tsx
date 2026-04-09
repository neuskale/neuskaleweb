import type { Metadata } from 'next';
import Link from 'next/link';
import MobileStickyCta from '@/components/MobileStickyCta';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Neuskale | Trusted Title Search Company Since 2022',
  description: 'Neuskale Title Services provides fast, affordable nationwide title searches. ALTA member, Qualia partner, $1M E&O coverage. Serving title insurers, law firms, and lenders since 2022.',
  alternates: { canonical: 'https://www.neuskale.com/about' },
};

const glanceFacts = [
  { icon: '📍', label: 'Headquarters', value: 'South Windsor, CT', detail: '701 John Fitch Blvd, Suite 101' },
  { icon: '📅', label: 'Founded', value: '2022', detail: '15+ years combined team experience' },
  { icon: '💰', label: 'Starting Price', value: '$10', detail: 'Per document — lowest in the industry' },
  { icon: '⚡', label: 'Turnaround', value: '24–48 hrs', detail: 'Expedited 4-hour rush available' },
  { icon: '🌍', label: 'Coverage', value: '20+ States', detail: 'Expanding to all 50 states' },
  { icon: '✅', label: 'Quality Record', value: 'Zero Claims', detail: 'Triple QC on every search' },
  { icon: '🏆', label: 'Credentials', value: 'ALTA Member', detail: 'Qualia partner • $1M E&O insured' },
  { icon: '📞', label: 'Support', value: '24/7 Human', detail: 'Phone, email, and chat — no bots' },
];

const industries = [
  { icon: '🏠', title: 'Title Insurance Companies', desc: 'High-volume title search support with custom formats, bulk pricing, and seamless integration with your existing workflows and platforms.' },
  { icon: '⚖️', title: 'Law Firms', desc: 'Accurate, comprehensive reports for real estate closings, litigation support, estate planning, and due diligence investigations.' },
  { icon: '🏦', title: 'Banks & Lenders', desc: 'Reliable title research for mortgage origination, refinancing, HELOCs, and loan portfolio management at scale.' },
  { icon: '📈', title: 'Real Estate Investors', desc: 'Fast property research for acquisitions, foreclosures, and portfolio due diligence with investor-friendly pricing.' },
];

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Neuskale Title Services',
    url: 'https://www.neuskale.com/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Neuskale Title Services',
      foundingDate: '2022',
      areaServed: 'United States',
      memberOf: { '@type': 'Organization', name: 'American Land Title Association (ALTA)' },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ScrollReveal />

      {/* Hero */}
      <section className="page-hero" id="at-a-glance" style={{ paddingBottom: 0 }}>
        <div className="hero-grid-bg"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label">Our Story</span>
          <h1>About <span className="gradient-text">Neuskale</span></h1>
          <p className="section-desc">A nationwide title search company founded in 2022 in South Windsor, Connecticut — making title search services fast, accurate, and affordable for every real estate professional across 20+ U.S. states.</p>
        </div>
      </section>

      {/* Fast Facts */}
      <section className="section" style={{ paddingTop: 36 }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 24 }}>
            <span className="section-label">Facts &amp; Figures</span>
            <h2>Fast Facts Buyers Can Verify</h2>
            <p className="section-desc">This section is designed to surface the hard facts people compare first: pricing, turnaround, coverage, credentials, and support.</p>
          </div>
          <div className="glance-grid">
            {glanceFacts.map((f) => (
              <div key={f.label} className="glance-card">
                <div className="glance-icon">{f.icon}</div>
                <div className="glance-label">{f.label}</div>
                <div className="glance-value">{f.value}</div>
                <div className="glance-detail">{f.detail}</div>
              </div>
            ))}
          </div>
          <div className="glance-summary">
            <p><strong>Neuskale Title Services</strong> provides property title searches, lien searches, and document retrieval services starting at $10 per document with 24-to-48-hour turnaround. The company is an ALTA member and Qualia integration partner with $1 million in E&amp;O insurance coverage, a zero claims record, and a triple quality control process. Services include Current Owner Search, Full Title Search, Two Owner Search, Lien Search, Update Search, Title Examination, Condo Search, Document Retrieval, Property Tax Search, Municipal Lien Search, Judgment &amp; Name Search, HOA/Estoppel Letters, Commitment Typing, O&amp;E Reports, and Deed Preparation.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <span className="section-label">Who We Are</span>
            <h2>Built by Industry Experts, Designed for You</h2>
            <p>Neuskale was built on a simple belief: title search services should be fast, accurate, and affordable for everyone.</p>
            <p>Our team of experienced title abstractors combines deep county-level expertise with a tech-enabled workflow featuring multiple quality checkpoints to deliver comprehensive title reports at prices that are 50–80% lower than traditional providers.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <Link href="/contact" className="btn btn-primary">Get Started &rarr;</Link>
              <Link href="/pricing" className="btn btn-outline-gradient">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2>What Drives Us</h2>
          </div>
          <div className="values-grid">
            <div className="value-card"><div className="value-icon">🎯</div><h3>Accuracy First</h3><p>Every report is meticulously researched by experienced abstractors with rigorous multi-step quality controls. We earn trust through results, not contracts.</p></div>
            <div className="value-card"><div className="value-icon">💰</div><h3>Radical Affordability</h3><p>Professional-grade title research accessible to businesses of all sizes — 50–80% less than traditional providers. Prices vary by state and parcel.</p></div>
            <div className="value-card"><div className="value-icon">⚡</div><h3>Speed Without Compromise</h3><p>Standard searches completed in 24–48 hours with expedited rush options available. We never sacrifice accuracy for speed.</p></div>
          </div>
        </div>
      </section>

      {/* ETO Model */}
      <section className="section" id="eto">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How We Work</span>
            <h2>The ETO Model</h2>
            <p className="section-desc">What makes Neuskale different is our Experience, Try, Order approach. We remove all risk for new clients by letting our work speak for itself.</p>
          </div>
          <div className="about-eto-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'center' }}>
            <div>
              {[
                { letter: 'E', title: 'Experience', desc: 'Send us 1–3 trial orders with no contract or commitment. See our quality, turnaround, and communication firsthand.' },
                { letter: 'T', title: 'Try', desc: 'Evaluate our reports for accuracy, formatting, and detail. Compare against your current provider on every metric that matters.' },
                { letter: 'O', title: 'Order', desc: 'When you\'re satisfied, scale to regular volume with bulk pricing. Most trial clients become long-term partners within their first week.' },
              ].map((step) => (
                <div key={step.letter} style={{ marginBottom: 32 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: '50%', background: 'var(--gradient)', fontWeight: 800, fontSize: '1.2rem', color: 'white', flexShrink: 0 }}>{step.letter}</span>
                    <h3 style={{ margin: 0 }}>{step.title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', paddingLeft: 64 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--dark-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 40 }}>
              <h3 style={{ marginBottom: 20 }}>Why ETO Works</h3>
              {[
                { title: 'Zero Risk for You', desc: 'No contracts, no minimums, no credit card required for trial orders.' },
                { title: 'Quality Speaks First', desc: 'We earn your business through results, not sales pressure or long-term lock-ins.' },
                { title: 'Fast Trust Building', desc: 'Most clients evaluate, approve, and scale within 5 business days.' },
                { title: 'Seamless Scaling', desc: 'Go from trial to hundreds of orders per month with dedicated support and bulk pricing.' },
              ].map((item, i, arr) => (
                <div key={item.title} style={{ marginBottom: i < arr.length - 1 ? 16 : 0, paddingBottom: i < arr.length - 1 ? 16 : 0, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <p style={{ color: 'var(--white)', fontWeight: 600, marginBottom: 4 }}>{item.title}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Who We Serve</span>
            <h2>Industries We Support</h2>
            <p className="section-desc">From single-office law firms to national title insurance underwriters, Neuskale serves real estate professionals at every scale.</p>
          </div>
          <div className="services-grid">
            {industries.map((ind) => (
              <div key={ind.title} className="service-card">
                <div className="service-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container">
          <h2>Start Your Risk-Free Trial</h2>
          <p>Send us 1–3 trial orders and evaluate our quality, accuracy, and turnaround. No contracts, no minimums, no risk.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-lg">Send Trial Order &rarr;</Link>
            <Link href="#eto" className="btn btn-secondary">Learn About ETO</Link>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </>
  );
}
