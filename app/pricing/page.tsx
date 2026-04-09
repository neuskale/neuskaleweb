import type { Metadata } from 'next';
import Link from 'next/link';
import MobileStickyCta from '@/components/MobileStickyCta';
import ScrollReveal from '@/components/ScrollReveal';
import PricingToggleTable from '@/components/PricingToggleTable';
import { FaqItem } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Title Search Pricing from $10 | Most Affordable Nationwide | Neuskale',
  description: 'Transparent title search pricing starting at $10. Compare our rates to competitors. Volume discounts available. No hidden fees.',
  alternates: { canonical: 'https://www.neuskale.com/pricing' },
};

const top3 = [
  {
    icon: '👤', name: 'Current Owner Search', turnaround: '24-hour turnaround',
    price: '$10', unit: '/search', popular: true,
    features: ['Current owner verification', 'Active mortgages & liens', 'Deed information', 'Email delivery', 'Professional report included'],
  },
  {
    icon: '📋', name: 'Full Title / 30-Year', turnaround: '24–72 hour turnaround',
    price: '$25+', unit: '/search', popular: false,
    features: ['30+ year title history', 'Full chain of title', 'All liens, judgments & easements', 'Tax status verification', 'Priority processing'],
  },
  {
    icon: '🏠', name: 'Lien Search', turnaround: '24-hour turnaround',
    price: '$8+', unit: '/search', popular: false,
    features: ['Federal & state tax liens', 'Judgment liens', "Mechanic's liens", 'UCC filings', 'Municipal liens'],
  },
];

const bulkTiers = [
  {
    name: 'Starter', discount: '5%', volume: '50+ searches/month', featured: false,
    features: ['Current Owner: $9.50', 'Full Title: $23.75+', 'All services discounted', 'Priority processing', 'Email & chat support'],
    cta: 'Contact Sales', ctaClass: 'btn-primary',
  },
  {
    name: 'Professional', discount: '10%', volume: '250+ searches/month', featured: true,
    features: ['Current Owner: $9.00', 'Full Title: $22.50+', 'All services discounted', 'Dedicated account manager', '24/7 phone support', 'Expedited processing'],
    cta: 'Contact Sales', ctaClass: 'btn-primary',
  },
  {
    name: 'Enterprise', discount: 'Custom', volume: '1000+ searches/month', featured: false,
    features: ['Custom pricing', 'API integration', 'Custom report formats', 'Guaranteed SLAs', 'Dedicated support team', 'Quarterly business reviews'],
    cta: 'Contact Sales', ctaClass: 'btn-primary',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'PriceSpecification',
  name: 'Title Search Services Pricing',
  offers: [
    { '@type': 'Offer', name: 'Current Owner Search', price: '10.00', priceCurrency: 'USD', description: 'Verify current property ownership, liens, and encumbrances.' },
    { '@type': 'Offer', name: 'Two Owner Search', price: '15.00', priceCurrency: 'USD', description: 'Two-owner chain verification with deed history.' },
    { '@type': 'Offer', name: 'Update Search', price: '6.00', priceCurrency: 'USD', description: 'Refresh an existing title search with latest records.' },
    { '@type': 'Offer', name: 'Document Retrieval', price: '5.00', priceCurrency: 'USD', description: 'Per-document retrieval from county records.' },
    { '@type': 'Offer', name: 'Lien Search', price: '8.00', priceCurrency: 'USD', description: 'Comprehensive lien and judgment search.' },
    { '@type': 'Offer', name: 'Full Title Search', price: '25.00', priceCurrency: 'USD', description: '30+ year chain of title research.' },
    { '@type': 'Offer', name: 'Foreclosure Search', price: '35.00', priceCurrency: 'USD', description: 'Full foreclosure title examination.' },
    { '@type': 'Offer', name: 'Condo Search', price: '35.00', priceCurrency: 'USD', description: 'HOA and condominium title search.' },
  ],
};

const cardBase: React.CSSProperties = {
  background: 'linear-gradient(180deg, rgba(255,255,255,0.94), rgba(248,243,236,0.9))',
  border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
  padding: '32px 28px', position: 'relative', overflow: 'hidden',
  boxShadow: 'var(--shadow-sm)', transition: 'var(--transition)',
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ScrollReveal />

      {/* ── Hero ── */}
      <section className="page-hero" style={{ paddingBottom: 52 }}>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <span className="section-label">Transparent Pricing · No Surprises</span>
          <h1 style={{ marginBottom: 0 }}>Title Searches Starting At</h1>

          {/* Big price anchor */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '28px 0 16px' }}>
            <span style={{ fontSize: 'clamp(4.5rem, 10vw, 7rem)', fontWeight: 900, background: 'var(--gradient-h)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, letterSpacing: '-3px' }}>$10</span>
            <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: 6, letterSpacing: 1, textTransform: 'uppercase' }}>per document</span>
          </div>

          {/* Industry comparison */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 12, fontSize: '0.95rem', color: 'var(--text-muted)', flexWrap: 'wrap', justifyContent: 'center' }}>
            Industry average:&nbsp;<span style={{ textDecoration: 'line-through', color: '#F87171', fontWeight: 600 }}>$75–$150</span>
            <span style={{ background: 'rgba(5,150,105,0.1)', color: '#059669', padding: '5px 14px', borderRadius: 50, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.3px' }}>Save up to 85%</span>
          </div>

          <p className="section-desc" style={{ margin: '20px auto 0' }}>All 9 services include delivery, report, and support. No setup fees, no fine print.</p>

          {/* Trust strip */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, flexWrap: 'wrap', marginTop: 36, padding: '18px 28px', background: 'linear-gradient(180deg, rgba(255,255,255,0.82), rgba(248,243,236,0.9))', border: '1px solid var(--border)', borderRadius: 16, boxShadow: 'var(--shadow-sm)' }}>
            {['No setup fees', 'No minimum orders', 'No contracts', '$1M E&O insured', 'ALTA member'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                <span style={{ width: 22, height: 22, background: 'rgba(52,211,153,0.12)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', fontSize: '0.7rem', fontWeight: 700 }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ETO Model CTA ── */}
      <section className="cta-section" style={{ padding: '44px 0' }}>
        <div className="cta-glow"></div>
        <div className="container">
          <h2>Try Before You Commit — Our ETO Model</h2>
          <p>Send 1–3 trial orders. Evaluate our quality, accuracy, and turnaround. Scale when you&apos;re ready. No contracts, no minimums, no risk.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-lg">Send Your Trial Order &rarr;</Link>
            <a href="tel:+1 860-327-5055" className="btn btn-secondary">Call +1 860-327-5055</a>
          </div>
        </div>
      </section>

      {/* ── Full Price Table with Toggle ── */}
      <section className="section" style={{ padding: '60px 0 80px' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 40 }}>
            <span className="section-label">Complete Price List</span>
            <h2>All 9 Services, Transparent Pricing</h2>
            <p className="section-desc">Every service includes delivery, report, and support — no hidden add-ons.</p>
          </div>
          <PricingToggleTable />
        </div>
      </section>

      {/* ── Top 3 Most Popular Cards ── */}
      <section className="section section-alt" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 48 }}>
            <span className="section-label">Most Ordered</span>
            <h2>Our 3 Most Popular Services</h2>
            <p className="section-desc">These cover 90% of what title companies, law firms, and lenders need.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1100, margin: '0 auto' }}>
            {top3.map(card => (
              <div key={card.name} style={{ ...cardBase, ...(card.popular ? { borderColor: 'rgba(255,0,140,0.35)', boxShadow: 'var(--glow-purple)' } : {}) }}>
                {card.popular && (
                  <div className="spc-badge">Most Popular</div>
                )}
                <div style={{ fontSize: '1.6rem', marginBottom: 12 }}>{card.icon}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: 4 }}>{card.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 16 }}>{card.turnaround}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 16 }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, background: 'var(--gradient-h)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>{card.price}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{card.unit}</span>
                </div>
                <ul style={{ margin: '0 0 20px', padding: 0, listStyle: 'none' }}>
                  {card.features.map(f => (
                    <li key={f} style={{ padding: '6px 0', fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: '#34D399', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  style={{
                    display: 'block', width: '100%', textAlign: 'center', padding: '12px', borderRadius: 50, fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none', transition: 'var(--transition)',
                    ...(card.popular
                      ? { background: 'var(--gradient-btn)', color: '#FFFFFF', border: 'none' }
                      : { border: '1px solid var(--border)', color: 'var(--text-dark)', background: 'rgba(255,255,255,0.78)' })
                  }}
                >
                  Order Now &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="pricing-notes-block">
            <p>* All prices shown are starting prices. Actual pricing may vary based on state, county, and parcel complexity.</p>
            <p>* Fees listed are based on online search availability. If any files require ground abstractor support, an additional abstractor fee will apply. Any fee changes will be communicated, and your approval will be obtained before we proceed.</p>
            <p>* For judgments and liens, we provide online copies or docket sheets. If copies are not available online, an additional abstractor fee will apply. All such fees will be communicated in advance.</p>
          </div>
          <p style={{ textAlign: 'center', marginTop: 16 }}>
            <Link href="/title-search" style={{ background: 'var(--gradient-h)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 600 }}>
              View all 9 services with full details &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Switch to Neuskale</span>
            <h2>See How We Compare</h2>
            <p className="section-desc">Side-by-side comparison with the top national title search providers.</p>
          </div>

          <div className="table-wrapper" style={{ maxWidth: 900, margin: '0 auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th style={{ minWidth: 120 }}>Neuskale</th>
                  <th>Competitor 1</th>
                  <th>Competitor 2</th>
                  <th>Competitor 3</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Starting Price',  '$10',        '$75+',    '$55.95+', '$45+'],
                  ['Current Owner',   '$10',        '$95',     '$55.95',  '$45'],
                  ['Full Title',      '$25+',       '$200+',   '$129+',   '$95+'],
                  ['Turnaround',      '<24 hours',  '2–3 days','1–2 days','24–48 hours'],
                  ['Coverage',        '20+ States', '50 States','48 States','Limited'],
                  ['24/7 Support',    '✓',          '✗',       '✗',       '✗'],
                  ['E&O Insurance',   '$1M',        'Varies',  'Varies',  'Unknown'],
                  ['ETO Trial',       '✓',          '✗',       '✗',       '✗'],
                ].map(([feature, neuskale, ...rest]) => (
                  <tr key={feature}>
                    <td><strong>{feature}</strong></td>
                    <td className="highlight-col">
                      <strong>
                        {neuskale === '✓' ? <span className="check">✓</span> : neuskale}
                      </strong>
                    </td>
                    {rest.map((val, i) => (
                      <td key={i}>{val === '✗' ? <span className="cross">✗</span> : val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="pricing-note" style={{ textAlign: 'center', marginTop: 20 }}>* Neuskale prices shown are starting prices. Additional abstractor fees may apply for ground searches or document retrieval not available online.</p>
        </div>
      </section>

      {/* ── Savings Calculator + Guarantee Cards ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Your Savings</span>
            <h2>See How Much You Save Monthly</h2>
            <p className="section-desc">Real savings examples based on typical client volumes.</p>
          </div>

          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>
            {/* Savings example */}
            <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: 14, color: 'var(--text-dark)' }}>Scenario: 100 Searches/Month</h4>
              {[
                { label: '80x Current Owner @ $10', value: '$800', style: {} },
                { label: '10x Full Title @ $25', value: '$250', style: {} },
                { label: '10x Lien Search @ $8', value: '$80', style: {} },
                { label: 'Neuskale Total', value: '$1,130/mo', style: { fontWeight: 700, color: 'var(--text-dark)' } },
                { label: 'Same volume at competitors', value: '$8,500+/mo', style: { color: '#F87171', textDecoration: 'line-through' } },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>{row.label}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.88rem', ...row.style }}>{row.value}</span>
                </div>
              ))}
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: '2px solid rgba(52,211,153,0.3)', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#34D399', lineHeight: 1.2 }}>$7,370 saved/mo</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>That&apos;s $88,440 saved per year</div>
              </div>
            </div>

            {/* Guarantee cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
              {[
                { icon: '🔒', title: 'No Lock-in Contracts', desc: 'Month-to-month flexibility. Scale up or down anytime without penalties.' },
                { icon: '✅', title: 'Quality Guaranteed', desc: '$1M E&O insurance, ALTA member, and multi-point quality checks on every report.' },
                { icon: '⚡', title: 'Try Before You Buy', desc: 'ETO model: send 1–3 trial orders. Evaluate quality first, then commit to volume.' },
              ].map(g => (
                <div key={g.title} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', background: 'rgba(0,0,0,0.02)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', transition: 'var(--transition)' }}>
                  <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{g.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', marginBottom: 2 }}>{g.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bulk Pricing Tiers ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Volume Discounts</span>
            <h2>Save More as You Scale</h2>
            <p className="section-desc">Discounts apply automatically to your total monthly search count across all service types.</p>
          </div>

          <div className="pricing-grid">
            {bulkTiers.map(tier => (
              <div key={tier.name} className={`pricing-card${tier.featured ? ' featured' : ''}`}>
                <h3 className="pricing-name">{tier.name}</h3>
                <div className="pricing-amount" style={tier.name === 'Enterprise' ? { fontSize: '1.6rem' } : {}}>
                  {tier.discount}{tier.name !== 'Enterprise' && <span className="period"> off</span>}
                </div>
                <p className="pricing-desc">{tier.volume}</p>
                <ul className="pricing-features">
                  {tier.features.map(f => <li key={f} dangerouslySetInnerHTML={{ __html: f.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
                </ul>
                <Link href="/contact" className={`btn ${tier.ctaClass}`} style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing FAQ ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Common Questions</span>
            <h2>Pricing FAQ</h2>
          </div>

          <div className="faq-list" style={{ maxWidth: 900, margin: '0 auto' }}>
            <FaqItem q="Are there any hidden fees?" a={<p>No. What you see is what you pay. Our pricing includes the search, the report, delivery, and support. No setup fees, no processing fees, no rush fees. If you order a $10 search, your total is $10.</p>} />
            <FaqItem q="How do bulk discounts work?" a={<p>Volume discounts are based on your total monthly search count across all service types. 50+ searches/month gets 5% off, 250+ gets 10% off, and 1000+ qualifies for custom enterprise pricing. No minimum contract — pricing adjusts automatically each month.</p>} />
            <FaqItem q="Can I mix and match different search types?" a={<p>Yes. Your volume discount applies to your total count across all services. 100 Current Owner + 100 Full Title = 200 searches qualifying for bulk pricing on both.</p>} />
            <FaqItem q="Is there a free trial?" a={<p>Yes! Our ETO (Experience, Try, Order) model lets new clients send 1–3 trial orders with no contract or commitment. We deliver reports within 24–48 hours so you can evaluate our quality firsthand. Most trial clients become long-term partners within their first week.</p>} />
            <FaqItem q="What payment methods do you accept?" a={<p>We accept all major credit cards (Visa, Mastercard, Amex, Discover), ACH bank transfers, and checks for enterprise accounts. Most customers use automatic monthly billing through our secure portal.</p>} />
            <FaqItem q="Do you charge for expedited delivery?" a={<p>Most searches complete in under 24 hours at no extra charge. We offer optional 4-hour rush service for $25–$50 depending on search type — available only when specifically requested.</p>} />
          </div>
        </div>
      </section>

      {/* ── Ancillary Services ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Ancillary Services</span>
            <h2>Additional Services Available</h2>
            <p className="section-desc">Beyond our core title search products, we offer a full suite of ancillary services to support your workflow.</p>
          </div>

          <div className="ancillary-pricing-list">
            {['Property Tax Search', 'Municipal Lien Search', 'Judgment & Name Search', 'HOA / Estoppel Letter', 'Commitment Typing', 'Ownership & Encumbrance Report', 'Deed Preparation'].map(name => (
              <div key={name} className="ancillary-pricing-item">
                <span className="ancillary-pricing-name">{name}</span>
                <span className="ancillary-pricing-price">Contact for pricing</span>
              </div>
            ))}
          </div>

          <p className="pricing-note" style={{ textAlign: 'center', marginTop: 24 }}>
            Ancillary service pricing varies by scope, state, and county.{' '}
            <Link href="/contact" style={{ color: 'var(--pink)' }}>Contact us</Link> for a custom quote.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container">
          <h2>Ready to Cut Your Title Search Costs?</h2>
          <p>Start with our risk-free ETO trial. No contracts, no minimums. Just unbeatable prices and quality you can verify.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-lg">Get Started Today &rarr;</Link>
            <a href="tel:+1 860-327-5055" className="btn btn-secondary">Call for Bulk Pricing</a>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </>
  );
}
