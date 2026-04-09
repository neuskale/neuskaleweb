import type { Metadata } from 'next';
import Link from 'next/link';
import MobileStickyCta from '@/components/MobileStickyCta';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Title Search Services | Nationwide Title Searches from $10 | Neuskale',
  description: 'Full suite of title search services starting at $10. Current owner, full title, lien, foreclosure, condo, and document retrieval. 20+ states, 24-48hr turnaround.',
  alternates: { canonical: 'https://www.neuskale.com/title-search' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Title Search Services',
  description: 'Professional title search services for residential properties',
  url: 'https://www.neuskale.com/title-search',
  mainEntity: {
    '@type': 'Service',
    name: 'Title Search Services',
    provider: { '@type': 'LocalBusiness', name: 'Neuskale Title Services', url: 'https://www.neuskale.com' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Title Search Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Current Owner Search', description: 'Verify current property ownership, examine deed information, identify open mortgages and active liens.' }, price: '10.00', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Two Owner Search', description: 'Covers the current and one previous owner. Includes deed transfers, mortgages, liens, and judgments for both ownership periods.' }, price: '15.00', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Update Search', description: 'Refresh an existing title search with the latest recorded documents since the original search date.' }, price: '6.00', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Title Search', description: 'Comprehensive chain of title research spanning 30+ years, complete ownership history, identification of all liens, judgments, easements, and deed restrictions.' }, price: '25.00', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lien Search', description: 'Identify all outstanding liens, judgments, tax liens, municipal liens, and UCC filings.' }, price: '8.00', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Foreclosure Search', description: 'Specialized pre-foreclosure and foreclosure property title research with comprehensive lien, judgment, and lis pendens verification.' }, price: '35.00', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Condo Search', description: 'Specialized title search for condominium units including association documents, HOA liens, special assessments, and common element information.' }, price: '35.00', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Document Retrieval', description: 'Fast retrieval of recorded documents from county recorders offices and courts nationwide.' }, price: '5.00 per document', priceCurrency: 'USD' },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Title Examination', description: 'Expert review and analysis of title search results by experienced title examiners.' }, price: 'Contact for pricing', priceCurrency: 'USD' },
      ],
    },
  },
};

const mainServices = [
  {
    id: 'current-owner',
    icon: '🔍',
    name: 'Current Owner Search',
    price: '$10',
    desc: 'Verify current property ownership with deed information, open mortgages, and active liens. This quick, affordable search is perfect for initial due diligence and ownership verification.',
    included: ['Current property owner verification', 'Deed information and recording details', 'Open mortgages and liens', 'Basic property information'],
    turnaround: 'Often completed same-day, typically within 4–6 hours',
    bestFor: ['Quick ownership verification', 'Initial due diligence', 'Pre-negotiation research'],
  },
  {
    id: 'two-owner',
    icon: '👥',
    name: 'Two Owner Search',
    price: '$15',
    desc: 'Covers the current and one previous owner. Includes deed transfers, mortgages, liens, and judgments for both ownership periods. Ideal when you need more history than a current owner search but less than a full 30-year search.',
    included: ['Current and previous owner verification', 'Two ownership period deed history', 'Open and satisfied mortgages', 'Liens and judgments for both owners', 'Tax status verification'],
    turnaround: '6–12 hours standard delivery',
    bestFor: ['Refinance transactions', 'Moderate due diligence', 'Two-owner history verification', 'Title insurance support'],
  },
  {
    id: 'update-search',
    icon: '🔄',
    name: 'Update Search',
    price: '$6',
    desc: 'Refresh an existing title search with the latest recorded documents since the original search date. Ensures your title information is current before closing. Essential for transactions with extended timelines.',
    included: ['New recordings since prior search', 'Updated lien and judgment check', 'New mortgage filings', 'Tax payment updates', 'Gap coverage verification'],
    turnaround: 'Same-day, typically within 2–4 hours',
    bestFor: ['Pre-closing updates', 'Extended escrow periods', 'Loan modification reviews', 'Policy issuance preparation'],
  },
  {
    id: 'title-examination',
    icon: '🔎',
    name: 'Title Examination',
    price: 'Contact for pricing',
    desc: 'Expert review and analysis of title search results by experienced title examiners. We identify potential issues, provide curative recommendations, and deliver examination-ready reports that meet underwriting standards.',
    included: ['Professional examiner review', 'Issue identification and analysis', 'Curative action recommendations', 'Underwriting-standard reports', 'Exception documentation', 'Requirements and objections list'],
    turnaround: '24–72 hours standard delivery',
    bestFor: ['Title insurance underwriting', 'Complex title issues', 'Multi-party transactions', 'Legal review support'],
  },
  {
    id: 'full-search',
    icon: '📜',
    name: 'Full Title Search',
    price: '$25+',
    desc: 'Complete 30+ year chain of title research providing comprehensive ownership history, all liens, judgments, easements, and deed restrictions. Our most popular service for serious transactions.',
    included: ['30+ year chain of title', 'Complete ownership history', 'All outstanding liens and mortgages', 'Judgments and encumbrances', 'Easements and deed restrictions', 'Tax status verification'],
    turnaround: '12–24 hours standard delivery',
    bestFor: ['Real estate transactions', 'Loan origination', 'Title insurance underwriting', 'Legal review'],
  },
  {
    id: 'lien-search',
    icon: '💳',
    name: 'Lien Search',
    price: '$8+',
    desc: 'Identify all outstanding liens, judgments, tax liens, municipal liens, and UCC filings against a property. Critical for lenders, attorneys, and investors assessing property encumbrances.',
    included: ['Federal tax liens', 'State and local tax liens', 'Judgment liens', 'UCC filings', 'Municipal code violations', 'HOA lien search'],
    turnaround: '4–8 hours typical delivery',
    bestFor: ['Lender requirements', 'Pre-purchase inspections', 'Investment due diligence', 'Risk assessment'],
  },
  {
    id: 'foreclosure-search',
    icon: '🏠',
    name: 'Foreclosure Search',
    price: '$35',
    desc: 'Specialized pre-foreclosure and foreclosure property title research. We conduct comprehensive lien, judgment, and lis pendens verification to identify all property encumbrances and auction details.',
    included: ['Lis pendens verification', 'Notice of default (NOD) tracking', 'Deed of trust examination', 'All liens and judgments', 'Pre-foreclosure property details', 'Mortgage history'],
    turnaround: '8–16 hours standard delivery',
    bestFor: ['Foreclosure investing', 'Distressed property research', 'Auction preparation', 'REO acquisitions'],
  },
  {
    id: 'condo-search',
    icon: '🏛️',
    name: 'Condo Search',
    price: '$35',
    desc: 'Specialized title search for condominium units including association documents, HOA liens, special assessments, and common element information. Tailored for the unique requirements of condo transactions.',
    included: ['Unit deed and ownership history', 'HOA/COA lien search', 'Special assessment verification', 'Association document review', 'Common element identification', 'Condo declaration and bylaws check'],
    turnaround: '12–24 hours standard delivery',
    bestFor: ['Condo purchases', 'Condo refinancing', 'HOA compliance checks', 'Investment condo due diligence'],
  },
  {
    id: 'document-retrieval',
    icon: '🗃️',
    name: 'Document Retrieval',
    price: '$10/doc',
    desc: "Fast retrieval of recorded documents from county recorders' offices and courts nationwide. Get copies of deeds, mortgages, liens, judgments, plat maps, and other recorded instruments delivered digitally.",
    included: ['Deed copies', 'Mortgage documents', 'Lien certificates', 'Court filings and judgments', 'Plat maps and surveys', 'Any recorded instrument'],
    turnaround: 'Same-day for most counties, 24 hours for complex requests',
    bestFor: ['Legal case preparation', 'Transaction support', 'Records verification', 'Historical research'],
  },
];

const ancillaryServices = [
  { icon: '💰', name: 'Property Tax Search', desc: 'Verify property tax payment status, delinquencies, special assessments, and tax sale information. Get tax certificates and detailed tax history for any property nationwide.' },
  { icon: '🏙️', name: 'Municipal Lien Search', desc: 'Identify outstanding municipal liens including code violations, utility liens, open permits, and certificates of occupancy. Essential for Florida and other lien-theory states.' },
  { icon: '👤', name: 'Judgment & Name Search', desc: 'Standalone name-based searches for judgments, federal and state tax liens, bankruptcies, and Patriot Act (OFAC) screening. Covers all parties involved in a transaction.' },
  { icon: '🏘️', name: 'HOA / Estoppel Letter', desc: 'Obtain HOA and COA estoppel certificates, resale packages, and association status letters. We coordinate directly with management companies and associations on your behalf.' },
  { icon: '📄', name: 'Commitment Typing', desc: 'Professional typing of title commitments, title insurance policies, and endorsements. Accurate, formatted documents ready for underwriter review and issuance.' },
  { icon: '📋', name: 'Ownership & Encumbrance Report', desc: 'Quick-turnaround O&E reports providing a snapshot of current ownership, open mortgages, and active encumbrances. Ideal for preliminary property assessments.' },
  { icon: '📝', name: 'Deed Preparation', desc: 'Preparation of warranty deeds, quitclaim deeds, special warranty deeds, and other conveyance documents. Drafted to meet county recording requirements.' },
];

const industries = [
  { icon: '🏆', name: 'Title Insurance Companies', desc: 'Partner with Neuskale for comprehensive title research supporting your underwriting and closing operations. Volume pricing available.' },
  { icon: '📱', name: 'Law Firms', desc: 'Real estate attorneys rely on our accurate, detailed reports for transaction due diligence, title issues, and litigation support.' },
  { icon: '💰', name: 'Banks & Lenders', desc: 'Mortgage companies and banks trust Neuskale for fast title verification and lien identification to support loan origination.' },
  { icon: '🏠', name: 'Real Estate Agents', desc: 'Help your clients understand property history and any title issues before making an offer or closing.' },
  { icon: '📈', name: 'Investors', desc: 'Whether residential or investment properties, investors depend on our research for informed investment decisions and property evaluation.' },
  { icon: '🚀', name: 'Property Management', desc: 'Verify ownership, identify liens, and conduct due diligence on properties under management or acquisition.' },
];

export default function TitleSearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ScrollReveal />

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="hero-grid-bg"></div>
        <div className="container">
          <span className="section-label">Nationwide Coverage · 20+ States</span>
          <h1>Title Search Services</h1>
          <p className="section-desc" style={{ marginBottom: 32 }}>9 core title search services, ancillary support, and document retrieval — all starting at just $10 with 24–48 hour turnaround.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Order Now &rarr;</Link>
            <a href="#services" className="btn btn-outline-gradient">Explore Services</a>
          </div>
        </div>
      </section>

      {/* ── Service Details ── */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2>Complete Title Search Solutions</h2>
            <p className="section-desc">Click any service below to see what&apos;s included, typical turnaround, and pricing.</p>
          </div>

          {mainServices.map(s => (
            <div key={s.id} className="service-detail" id={s.id}>
              <div className="service-detail-header">
                <div className="service-detail-icon">{s.icon}</div>
                <div>
                  <h3>{s.name}</h3>
                  <span className="service-detail-price">{s.price}</span>
                </div>
              </div>
              <div className="service-detail-content">
                <p>{s.desc}</p>
                <div className="service-detail-grid">
                  <div className="detail-box">
                    <h4>What&apos;s Included</h4>
                    <ul className="detail-list">
                      {s.included.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="detail-box">
                    <h4>Turnaround Time</h4>
                    <p className="turnaround">{s.turnaround}</p>
                    <h4>Best For</h4>
                    <ul className="detail-list">
                      {s.bestFor.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="pricing-notes-block" style={{ marginTop: 12 }}>
            <p>* All prices shown are starting prices. Actual pricing may vary based on state, county, and parcel complexity.</p>
            <p>* Fees listed are based on online search availability. If any files require ground abstractor support, an additional abstractor fee will apply. Any fee changes will be communicated, and your approval will be obtained before we proceed.</p>
            <p>* For judgments and liens, we provide online copies or docket sheets. If copies are not available online, an additional abstractor fee will apply. All such fees will be communicated in advance, and your approval will be obtained before we proceed.</p>
          </div>
        </div>
      </section>

      {/* ── Ancillary Services ── */}
      <section className="section section-alt" id="ancillary">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Ancillary Services</span>
            <h2>Beyond the Search</h2>
            <p className="section-desc">We also offer a range of ancillary services to support your title and settlement workflow end to end.</p>
          </div>

          <div className="ancillary-grid">
            {ancillaryServices.map(s => (
              <div key={s.name} className="ancillary-card">
                <div className="ancillary-icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <span className="ancillary-price">Contact for pricing</span>
              </div>
            ))}
          </div>

          <p className="pricing-note" style={{ textAlign: 'center', marginTop: 24 }}>
            Ancillary service pricing varies by scope, state, and county.{' '}
            <Link href="/contact" style={{ color: 'var(--pink)' }}>Contact us</Link> for a custom quote.
          </p>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Industries We Serve</span>
            <h2>Trusted by Industry Leaders</h2>
            <p className="section-desc">Neuskale serves title companies, law firms, lenders, real estate professionals, and investors across the nation.</p>
          </div>

          <div className="industries-grid">
            {industries.map(ind => (
              <div key={ind.name} className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container">
          <h2>Ready to Start Your Title Search?</h2>
          <p>Order your title search today and get results in under 24 hours. Starting at just $10.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-lg">Order Your Search &rarr;</Link>
            <a href="tel:+18609628444" className="btn btn-secondary">Call (860) 962-8444</a>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </>
  );
}
