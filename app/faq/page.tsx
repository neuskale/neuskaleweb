import type { Metadata } from 'next';
import Link from 'next/link';
import MobileStickyCta from '@/components/MobileStickyCta';
import { FaqItem } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQ | Title Search Questions Answered | Neuskale',
  description: 'Get answers to common questions about Neuskale title search services, pricing, turnaround, state coverage, and our ETO trial model.',
  alternates: { canonical: 'https://www.neuskale.com/faq' },
};

export default function FaqPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is a title search?', acceptedAnswer: { '@type': 'Answer', text: 'A title search is a comprehensive examination of public records to verify property ownership and identify any claims, liens, or encumbrances on a real estate property.' } },
      { '@type': 'Question', name: 'How much does a title search cost?', acceptedAnswer: { '@type': 'Answer', text: 'Neuskale offers the most competitive title search pricing — 50-80% lower than traditional providers. Current Owner Search starts at $10, Two Owner Search at $15, Full Title Search at $25+.' } },
      { '@type': 'Question', name: 'How long does a title search take?', acceptedAnswer: { '@type': 'Answer', text: 'Standard turnaround is 24-48 hours. Current owner searches are often completed same-day. Expedited 4-hour rush available.' } },
      { '@type': 'Question', name: 'What states do you cover?', acceptedAnswer: { '@type': 'Answer', text: 'Neuskale currently provides title search coverage across 20+ states with continuous expansion toward full nationwide coverage.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="hero-grid-bg"></div>
        <div className="container">
          <span className="section-label">Knowledge Base</span>
          <h1>Frequently Asked <span className="gradient-text">Questions</span></h1>
          <p className="section-desc">Everything you need to know about Neuskale title search services, pricing, turnaround times, and more.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 880 }}>
          {/* Quick Contact Banner */}
          <div style={{ background: 'var(--dark-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '20px 24px', marginBottom: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h3 style={{ margin: '0 0 4px' }}>Can&apos;t find your answer?</h3>
              <p style={{ margin: 0 }}>Our 24/7 support team is always ready to help.</p>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="tel:+1 860-327-5055" className="btn btn-outline-gradient btn-sm">+1 860-327-5055</a>
              <Link href="/contact" className="btn btn-primary btn-sm">Contact Us</Link>
            </div>
          </div>

          {/* General Questions */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>General Questions</h2>
            <div className="faq-list">
              <FaqItem q="What is a title search?" a={<><p>A title search is a comprehensive examination of public records to verify property ownership and identify any claims, liens, or encumbrances on a real estate property. Our professional abstractors examine county records, court documents, and public databases to compile a detailed report covering tax information, assessment data, vesting details, deed history, mortgage records, liens, and judgments.</p><p>This critical service protects buyers, lenders, and title insurance companies from purchasing properties with hidden ownership disputes or financial obligations.</p></>} />
              <FaqItem q="What is the difference between a title search and title insurance?" a={<><p>A title search is the investigation process that examines public records to identify any issues with property ownership, while title insurance is a policy that protects you financially if a title problem is discovered after purchase.</p><p>As a trusted partner to title insurance companies nationwide, Neuskale provides the foundational research that underwriters rely on to issue policies.</p></>} />
              <FaqItem q="Why do I need a title search?" a={<><p>A title search is essential for protecting your investment and ensuring you have clear, marketable title to a property. Without a title search, you could unknowingly purchase property encumbered by liens from previous owners or face unexpected judgments.</p><p>Our affordable title searches — starting at just $10 — help real estate professionals, lenders, and individual homebuyers make informed decisions.</p></>} />
            </div>
          </div>

          {/* Pricing & Orders */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>Pricing &amp; Orders</h2>
            <div className="faq-list">
              <FaqItem q="How much does a title search cost?" a={<><p>Neuskale offers the most competitive title search pricing in the industry — 50-80% lower than traditional providers. Starting prices: Current Owner Search ($10), Two Owner Search ($15), Full Title Search ($25+), Lien Search ($8+), and Foreclosure Search ($35). Actual pricing may vary based on state, county, and parcel complexity.</p><p>For title companies and high-volume clients, we offer even deeper discounts. Visit our <Link href="/pricing" style={{ color: 'var(--pink)' }}>pricing page</Link> for detailed information.</p></>} />
              <FaqItem q="Do you offer bulk pricing for title companies?" a={<p>Yes, we offer significant volume discounts for title insurance companies, law firms, lenders, and other high-volume clients. Contact our sales team to discuss custom pricing agreements, integration options with platforms like Qualia, and dedicated account management.</p>} />
              <FaqItem q="How do I order a title search?" a={<><p>You can place an order through our <Link href="/contact" style={{ color: 'var(--pink)' }}>online order form</Link>, email property details directly to <a href="mailto:orders@neuskale.com" style={{ color: 'var(--pink)' }}>orders@neuskale.com</a>, or call us 24/7 at <a href="tel:+18609628444" style={{ color: 'var(--pink)' }}>(860) 962-8444</a>.</p><p>Simply provide the property address, county, state, and search type needed. Our team begins researching immediately upon receipt.</p></>} />
              <FaqItem q="Can I try your service before committing?" a={<><p>Absolutely! We recommend starting with our <strong>ETO (Experience, Try, Order) model</strong>. Send us 1-3 trial orders with no contract or commitment. We&apos;ll deliver high-quality reports within 24-48 hours so you can evaluate our accuracy and turnaround.</p><p>Simply <a href="mailto:orders@neuskale.com" style={{ color: 'var(--pink)' }}>email us</a> or <Link href="/contact" style={{ color: 'var(--pink)' }}>contact us</Link> to get started with your trial orders.</p></>} />
            </div>
          </div>

          {/* Turnaround & Quality */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>Turnaround &amp; Quality</h2>
            <div className="faq-list">
              <FaqItem q="How long does a title search take?" a={<><p>Standard turnaround is 24-48 hours for most search types. Current owner searches are often completed same-day. Expedited 4-hour rush turnaround is available for urgent requests at a premium.</p><p>Our triple quality control process ensures every report is accurate and complete before delivery — we never sacrifice quality for speed.</p></>} />
              <FaqItem q="What's included in a title search report?" a={<p>Our comprehensive title search reports include tax information, assessment data, current vesting details, deed history with full chain of title, mortgage records, liens and judgments, UCC filings, and easements. Full searches cover 30-60 years of property history depending on state requirements. Reports are professionally formatted in PDF and delivered digitally for immediate access.</p>} />
              <FaqItem q="How do you ensure accuracy?" a={<p>Every title search goes through our triple quality control process: (1) Experienced abstractors conduct thorough research, (2) A second team member reviews every finding for accuracy and completeness, and (3) A senior examiner validates the entire report before delivery. This process has resulted in a zero claims record since our founding.</p>} />
            </div>
          </div>

          {/* Coverage & Credentials */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>Coverage &amp; Credentials</h2>
            <div className="faq-list">
              <FaqItem q="What states do you cover?" a={<p>Neuskale currently provides title search coverage across 20+ states including Alabama, Connecticut, Delaware, Florida, Georgia, Illinois, Indiana, Kentucky, Maryland, Massachusetts, Michigan, Mississippi, New Jersey, New York, North Carolina, Ohio, Pennsylvania, South Carolina, Tennessee, Texas, and Virginia — with continuous expansion toward full nationwide coverage.</p>} />
              <FaqItem q="Are you an ALTA member?" a={<p>Yes, Neuskale Title Services is a proud member of the American Land Title Association (ALTA). We also maintain $1 Million Errors &amp; Omissions insurance coverage and are a trusted Qualia integration partner. These credentials demonstrate our commitment to the highest industry standards of accuracy, compliance, and professionalism.</p>} />
              <FaqItem q="Is customer support really available 24/7?" a={<p>Yes, our customer support team is available 24 hours a day, 7 days a week. Real estate transactions don&apos;t follow a 9-to-5 schedule, and neither do we. Real humans are always ready to assist by phone at <a href="tel:+18609628444" style={{ color: 'var(--pink)' }}>(860) 962-8444</a> or email at <a href="mailto:info@neuskale.com" style={{ color: 'var(--pink)' }}>info@neuskale.com</a>.</p>} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>Our team is available 24/7 to answer any questions about our services, pricing, or the title search process.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-lg">Contact Us &rarr;</Link>
            <a href="tel:+1 860-327-5055" className="btn btn-secondary">Call +1 860-327-5055</a>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </>
  );
}
