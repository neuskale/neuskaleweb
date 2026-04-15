import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import MobileStickyCta from '@/components/MobileStickyCta';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import RotatingText from '@/components/RotatingText';

export const metadata: Metadata = {
  title: 'Title Search Services from $10 | Neuskale - Nationwide Coverage',
  description: 'Fast, affordable title searches across 20+ states starting at $10. Less than 24-hour turnaround with 24/7 expert support. Order your title search today.',
  alternates: { canonical: 'https://www.neuskale.com/' },
};

const activeStates = ['AL','CT','DE','FL','GA','IL','IN','KY','MD','MA','MI','MS','NJ','NY','NC','OH','PA','SC','TN','TX','VA'];
const allStates = ['AK','AZ','AR','CA','CO','HI','ID','IA','KS','LA','ME','MN','MO','MT','NE','NV','NH','NM','ND','OK','OR','RI','SD','UT','VT','WA','WV','WI','WY'];

export default function HomePage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'Neuskale Title Services',
    alternateName: 'Neuskale',
    url: 'https://www.neuskale.com',
    logo: 'https://www.neuskale.com/assets/logo.png',
    image: 'https://www.neuskale.com/assets/logo.png',
    description: 'Neuskale Title Services provides fast, affordable nationwide title search services starting at $10 per document. We serve title insurers, law firms, banks, and real estate professionals across 20+ U.S. states.',
    telephone: '+1 860-327-5055',
    email: 'info@neuskale.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '701 John Fitch Blvd, Suite 101',
      addressLocality: 'South Windsor',
      addressRegion: 'CT',
      postalCode: '06074',
      addressCountry: 'US',
    },
    priceRange: 'from $10',
    foundingDate: '2022',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', bestRating: '5', worstRating: '1', ratingCount: '127' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does a title search cost?', acceptedAnswer: { '@type': 'Answer', text: 'Neuskale Title Services offers title searches starting at just $10 per document. Current owner searches start at $10, lien searches at $8+, and full title searches at $25+.' } },
      { '@type': 'Question', name: 'How long does a title search take?', acceptedAnswer: { '@type': 'Answer', text: 'Neuskale delivers most title search reports in less than 24 hours. Expedited 4-hour turnaround is available for urgent requests.' } },
      { '@type': 'Question', name: 'What states does Neuskale cover?', acceptedAnswer: { '@type': 'Answer', text: 'Neuskale currently provides title search services across 20+ U.S. states and is rapidly expanding coverage.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ScrollReveal />

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot"></span>
              ALTA Member &bull; Nationwide Coverage
            </div>
            <h1><RotatingText /> Title Searches <br />Starting at <span className="highlight">$10</span></h1>
            <p>The fastest, most affordable title search service in the United States. Expert abstractors, 20+ states and growing, results in 24–48 hours, with 24/7 dedicated support.</p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg">Start Your Free Trial &rarr;</Link>
              <Link href="#eto" className="btn btn-secondary">See the ETO Model</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="number">$10</span>
                <span className="label">Starting Price</span>
              </div>
              <div className="hero-stat">
                <span className="number">24-48h</span>
                <span className="label">Turnaround</span>
              </div>
              <div className="hero-stat">
                <span className="number">20+</span>
                <span className="label">States Covered</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-icon">📄</div>
                <div>
                  <div className="hero-card-title">Title Search Report</div>
                  <p className="hero-card-sub">Order #NS-2026-04827</p>
                </div>
              </div>
              <div className="hero-card-row">
                <span className="hero-card-label">Property</span>
                <span className="hero-card-value">123 Oak Lane, FL</span>
              </div>
              <div className="hero-card-row">
                <span className="hero-card-label">Search Type</span>
                <span className="hero-card-value">Full Title Search</span>
              </div>
              <div className="hero-card-row">
                <span className="hero-card-label">Price</span>
                <span className="hero-card-value price">$25.00</span>
              </div>
              <div className="hero-card-row">
                <span className="hero-card-label">Turnaround</span>
                <span className="hero-card-value">18 hours</span>
              </div>
              <div className="hero-card-row">
                <span className="hero-card-label">Status</span>
                <span className="hero-card-value status">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-item"><div className="trust-icon">🏅</div>ALTA Member</div>
          <div className="trust-item"><div className="trust-icon">📍</div>20+ States</div>
          <div className="trust-item"><div className="trust-icon">⏰</div>24/7 Support</div>
          <div className="trust-item"><div className="trust-icon">⚡</div>&lt;24hr Turnaround</div>
          <div className="trust-item"><div className="trust-icon">💰</div>from $10</div>
          <div className="trust-item"><div className="trust-icon">⚙️</div>Qualia Integrated</div>
          <div className="trust-item"><div className="trust-icon">🛡️</div>$1M E&amp;O Insured</div>
          <div className="trust-item"><div className="trust-icon">💻</div>Tech-Enabled Workflow</div>
        </div>
      </div>

      {/* ETO MODEL */}
      <section className="section" id="eto">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our #1 Promise</span>
            <h2>The ETO Model: <span className="gradient-text">Experience, Try, Order</span></h2>
            <p className="section-desc">We don&apos;t ask you to commit before you&apos;ve seen our work. Try us risk-free — no contracts, no minimums, no obligations. Just results you can see for yourself.</p>
          </div>
          <div className="eto-timeline">
            <div className="eto-step">
              <div className="eto-number">E</div>
              <h3>Experience</h3>
              <p>Send us 1–3 trial orders. No contracts, no commitments, no minimum volume. Just real orders so you can evaluate our quality, accuracy, and turnaround time on your terms.</p>
            </div>
            <div className="eto-connector"></div>
            <div className="eto-step">
              <div className="eto-number">T</div>
              <h3>Try</h3>
              <p>Review our reports. Assess the accuracy, formatting, and communication. Compare our turnaround and pricing against your current provider. We&apos;re confident you&apos;ll see the difference.</p>
            </div>
            <div className="eto-connector"></div>
            <div className="eto-step">
              <div className="eto-number">O</div>
              <h3>Order</h3>
              <p>When you&apos;re satisfied — and you will be — scale to regular volume with bulk pricing. Most clients who try Neuskale become long-term partners within their first week.</p>
            </div>
          </div>
          <div className="eto-cta">
            <Link href="/contact" className="btn btn-primary btn-lg">Send Your First Trial Order &rarr;</Link>
            <p className="eto-cta-note">No contracts. No minimums. No risk. Just quality you can see for yourself.</p>
          </div>
          <div className="eto-proof">
            <div className="eto-proof-grid">
              <div className="eto-proof-stat"><span className="eto-proof-number">15+</span><span className="eto-proof-label">Years in Industry Experience</span></div>
              <div className="eto-proof-stat"><span className="eto-proof-number">20+</span><span className="eto-proof-label">States</span></div>
              <div className="eto-proof-stat"><span className="eto-proof-number">5000+</span><span className="eto-proof-label">Title Searches Completed</span></div>
              <div className="eto-proof-stat"><span className="eto-proof-number">25+</span><span className="eto-proof-label">Team Members</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2>Comprehensive Title Search Solutions</h2>
            <p className="section-desc">From current owner verification to full chain-of-title research, we provide every title search service your business needs at unbeatable prices.</p>
          </div>
          <div className="services-grid">
            {[
              { icon: '🔍', title: 'Current Owner Search', desc: 'Verify current property ownership with deed information, open mortgages, and active liens. Perfect for quick due diligence.', price: '$10' },
              { icon: '📜', title: 'Full Title Search', desc: 'Complete 30+ year chain of title research including ownership history, liens, judgments, easements, and deed restrictions.', price: '$25' },
              { icon: '💳', title: 'Lien Search', desc: 'Identify all outstanding liens, judgments, tax liens, and encumbrances. Critical for lenders, attorneys, and investors.', price: '$8' },
              { icon: '🏠', title: 'Foreclosure Search', desc: 'Pre-foreclosure and foreclosure property title research with comprehensive lien and judgment verification.', price: '$35' },
              { icon: '👥', title: 'Two Owner Search', desc: 'Current and one prior owner history with deed transfers, mortgages, liens, and judgments for both ownership periods.', price: '$15' },
              { icon: '🔄', title: 'Update Search', desc: 'Refresh an existing title search with the latest recordings. Essential for pre-closing gap coverage and extended escrows.', price: '$6' },
              { icon: '🔎', title: 'Title Examination', desc: 'Expert examiner review of title search results with issue identification, curative recommendations, and underwriting-ready reports.', price: 'Contact Us', noFrom: true },
              { icon: '🏛️', title: 'Condo Search', desc: 'Specialized searches for condominium units including HOA liens, special assessments, and association document review.', price: '$35' },
              { icon: '🗃️', title: 'Document Retrieval', desc: 'Fast retrieval of recorded deeds, mortgages, liens, plat maps, and other instruments from county offices nationwide.', price: '$10', perDoc: true },
            ].map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-price">
                  {s.noFrom ? <span className="amount">{s.price}</span> : <>From <span className="amount">{s.price}</span>{s.perDoc ? '/doc' : ''}</>}
                </div>
                <Link href="/title-search" className="service-link">Learn More &rarr;</Link>
              </div>
            ))}
          </div>
          <div className="pricing-notes-block">
            <p>* All prices shown are starting prices. Actual pricing may vary based on state, county, and parcel complexity.</p>
            <p>* Fees listed are based on online search availability. If any files require ground abstractor support, an additional abstractor fee will apply. Any fee changes will be communicated, and your approval will be obtained before we proceed.</p>
            <p>* For judgments and liens, we provide online copies or docket sheets. If copies are not available online, an additional abstractor fee will apply. All such fees will be communicated in advance, and your approval will be obtained before we proceed.</p>
          </div>
          <div className="ancillary-banner">
            <div className="ancillary-banner-content">
              <span className="section-label" style={{ marginBottom: 12 }}>Ancillary Services</span>
              <h3>Beyond the Search</h3>
              <p>We also offer Property Tax Search, Municipal Lien Search, Judgment &amp; Name Search, HOA / Estoppel Letters, Commitment Typing, O&amp;E Reports, and Deed Preparation.</p>
              <Link href="/title-search#ancillary" className="btn btn-outline-gradient btn-sm">View Ancillary Services &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NEUSKALE */}
      <section className="section section-alt" id="why">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Neuskale</span>
            <h2>The Industry&apos;s Best Value</h2>
            <p className="section-desc">We combine the lowest prices in the industry with speed, accuracy, and round-the-clock support that larger competitors can&apos;t match.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-number">$10</div>
              <span className="why-unit">Starting Price Per Search</span>
              <h3>Unbeatable Pricing</h3>
              <p>Industry-lowest pricing with no hidden fees. Competitors charge $55-$150+ for the same services. We pass savings directly to you.</p>
            </div>
            <div className="why-card">
              <div className="why-number">24-48h</div>
              <span className="why-unit">Hour Turnaround</span>
              <h3>Lightning Fast</h3>
              <p>Standard turnaround of 24–48 hours on all searches. Current owner searches often completed same day. Expedited options available.</p>
            </div>
            <div className="why-card">
              <div className="why-number">24/7</div>
              <span className="why-unit">Dedicated Support</span>
              <h3>Always Available</h3>
              <p>Real humans available around the clock. Phone, email, and chat support whenever you need us. No bots, no voicemail, no waiting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY ASSURANCE */}
      <section className="section" id="quality">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Quality Promise</span>
            <h2>Triple Quality Control</h2>
            <p className="section-desc">Every title search goes through three independent levels of quality review before reaching your inbox. No exceptions, no shortcuts.</p>
          </div>
          <div className="qa-process">
            <div className="qa-step">
              <div className="qa-step-icon">🔍</div>
              <h3>1. Abstractor Review</h3>
              <p>Our experienced abstractors conduct thorough research of county records, court documents, and public filings to build your report.</p>
            </div>
            <div className="qa-step">
              <div className="qa-step-icon">✅</div>
              <h3>2. Quality Check</h3>
              <p>A second team member reviews every finding for accuracy, completeness, and compliance with state-specific title standards.</p>
            </div>
            <div className="qa-step">
              <div className="qa-step-icon">🛡️</div>
              <h3>3. Final Certification</h3>
              <p>Senior examiner validates the entire report, confirms formatting standards, and certifies the search before delivery.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="qa-badge">
              <span className="qa-badge-dot"></span>
              Zero Claims Record — Every Search Triple-Verified
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="section section-alt" id="technology">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Technology</span>
            <h2>Built For Modern Title Workflows</h2>
            <p className="section-desc">Neuskale combines county-level expertise with structured digital delivery, Qualia-ready operations, and human quality control so your team can move faster without losing confidence.</p>
          </div>
          <div className="tech-grid">
            <div className="tech-cards">
              <div className="tech-card">
                <div className="tech-card-icon">⚙️</div>
                <h3>Qualia-Ready Workflow</h3>
                <p>We support modern title operations with integration-friendly ordering, delivery, and communication that fits the systems your team already uses.</p>
              </div>
              <div className="tech-card">
                <div className="tech-card-icon">📎</div>
                <h3>Standardized Delivery</h3>
                <p>Professionally formatted reports, document retrieval, commitment typing, and ancillary services keep the output consistent across every order.</p>
              </div>
              <div className="tech-card">
                <div className="tech-card-icon">🧩</div>
                <h3>Triple-Checked Quality</h3>
                <p>Every search flows through abstractor review, quality control, and senior certification before it reaches your inbox.</p>
              </div>
              <div className="tech-card">
                <div className="tech-card-icon">💬</div>
                <h3>Human Support, 24/7</h3>
                <p>Rush orders, multi-state requests, and edge cases are handled by real people who can respond quickly when a closing timeline changes.</p>
              </div>
            </div>
            <div className="tech-showcase">
              <span className="section-label">Facts &amp; Proof</span>
              <h3>Why This Workflow Converts Better</h3>
              <p>Buyers comparing providers need more than marketing language. They need concrete reasons to trust speed, pricing, and delivery quality before placing the first order.</p>
              <div className="tech-pillars">
                <div className="tech-pillar"><span className="tech-pillar-mark">1</span><div><strong>Low-friction ordering</strong><span>Contact form, email, phone, and trial-first ETO onboarding reduce hesitation for first-time buyers.</span></div></div>
                <div className="tech-pillar"><span className="tech-pillar-mark">2</span><div><strong>Clear value messaging</strong><span>Pricing, turnaround, quality controls, credentials, and support are visible early instead of hidden behind a sales conversation.</span></div></div>
                <div className="tech-pillar"><span className="tech-pillar-mark">3</span><div><strong>Quotable trust signals</strong><span>ALTA membership, Qualia partnership, $1M E&amp;O insurance, and zero claims are stated in formats that users and AI engines can easily cite.</span></div></div>
              </div>
              <div className="tech-metrics">
                <div className="tech-metric"><span className="tech-metric-value">$10</span><span className="tech-metric-label">Starting price</span></div>
                <div className="tech-metric"><span className="tech-metric-value">24-48h</span><span className="tech-metric-label">Standard turnaround</span></div>
                <div className="tech-metric"><span className="tech-metric-value">20+</span><span className="tech-metric-label">Active states</span></div>
                <div className="tech-metric"><span className="tech-metric-value">24/7</span><span className="tech-metric-label">Human support</span></div>
              </div>
              <div className="tech-actions">
                <Link href="/best-title-search-companies" className="btn btn-primary">See How We Compare &rarr;</Link>
                <Link href="/pricing" className="btn btn-outline-gradient">View Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section" id="video">
        <div className="container">
          <div className="section-header">
            <span className="section-label">See Us In Action</span>
            <h2>Watch How Neuskale Works</h2>
            <p className="section-desc">See how our streamlined title search process delivers accurate results faster than anyone in the industry.</p>
          </div>
          <div className="video-wrapper">
            <div className="video-embed">
              <iframe
                width="560"
                height="315"
                loading="lazy"
                src="https://www.youtube.com/embed/Jj4sILQ7fIw?si=7OZiiVaOqGf-VqQ6"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-alt" id="how">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2>Three Simple Steps</h2>
            <p className="section-desc">From order to delivery in under 24 hours. Our streamlined process makes title searching effortless.</p>
          </div>
          <div className="steps">
            <div className="step"><div className="step-number">1</div><h3>Place Your Order</h3><p>Submit your title search request through our online form, email, or phone. Provide the property address and search type needed.</p></div>
            <div className="step"><div className="step-number">2</div><h3>We Search</h3><p>Our experienced abstractors research county records, court documents, and public records to build your comprehensive title report.</p></div>
            <div className="step"><div className="step-number">3</div><h3>Receive Your Report</h3><p>Get your complete, professionally formatted title search report delivered to your inbox. Typically in under 24 hours.</p></div>
          </div>
        </div>
      </section>

      {/* STATE COVERAGE MAP */}
      <section className="section" id="coverage">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Nationwide Reach</span>
            <h2>Coverage Across 20+ States</h2>
            <p className="section-desc">Our network of experienced abstractors provides accurate, locally-compliant title research across the country — and growing.</p>
          </div>
          <div className="coverage-grid">
            {activeStates.map(s => <div key={s} className="state-chip active">{s}</div>)}
            {allStates.map(s => <div key={s} className="state-chip">{s}</div>)}
          </div>
          <div className="coverage-legend">
            <div className="coverage-legend-item"><div className="coverage-legend-dot covered"></div>Active Coverage</div>
            <div className="coverage-legend-item"><div className="coverage-legend-dot expanding"></div>Coming Soon</div>
          </div>
          <div className="coverage-stats">
            <div className="coverage-stat"><span className="coverage-stat-number">20+</span><span className="coverage-stat-label">States Covered</span></div>
            <div className="coverage-stat"><span className="coverage-stat-number">5000+</span><span className="coverage-stat-label">Counties Accessible</span></div>
            <div className="coverage-stat"><span className="coverage-stat-number">50</span><span className="coverage-stat-label">State Target</span></div>
          </div>
          <div className="expedited-banner">
            <div className="expedited-icon">⚡</div>
            <div className="expedited-content">
              <h3>Need It Faster? Try <span>Expedited Service</span></h3>
              <p>For urgent closings and time-sensitive transactions, most searches can be expedited and completed in as little as 4 hours. Rush turnaround available on all search types.</p>
            </div>
            <div className="expedited-cta">
              <div className="expedited-time">4hr</div>
              <div className="expedited-time-label">Rush Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section section-alt" id="reviews">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Google Reviews</span>
            <h2>What Our Clients Say</h2>
            <p className="section-desc">Real reviews from real clients on Google Business. Rated 5.0 stars across all reviews.</p>
          </div>
          <div style={{ position: 'relative', paddingBottom: '48px' }}>
            <ReviewsCarousel />
          </div>
          <div className="reviews-cta" style={{ marginTop: '24px' }}>
            <a href="https://share.google/QQOj5N2RWL1CaN5d2" target="_blank" rel="noopener noreferrer" className="btn btn-outline-gradient btn-sm">Leave Us a Review on Google</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container">
          <h2>Experience the Neuskale Difference</h2>
          <p>Try us risk-free with our ETO model. Send 1-3 trial orders, evaluate our quality, and scale when you&apos;re ready. No contracts, no minimums.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-lg">Send Your Trial Order &rarr;</Link>
            <a href="tel:+1 860-327-5055" className="btn btn-secondary">Call +1 860-327-5055</a>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </>
  );
}
