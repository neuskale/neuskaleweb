import type { Metadata } from 'next';
import Link from 'next/link';
import MobileStickyCta from '@/components/MobileStickyCta';
import BlogClient from '@/components/BlogClient';

export const metadata: Metadata = {
  title: 'Title Search Blog & Resources | Expert Insights | Neuskale',
  description: 'Expert insights on title searches, lien searches, real estate due diligence, state-specific guides, and industry trends. 100+ articles.',
  alternates: { canonical: 'https://www.neuskale.com/blog' },
};

export default function BlogPage() {
  return (
    <>
      <style>{`
        .blog-hub-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }
        .blog-hub-card {
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: var(--transition);
        }
        .blog-hub-card:hover {
          border-color: rgba(148,0,255,0.15);
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }
        .bhc-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .bhc-date { font-size: 0.8rem; color: var(--text-muted); }
        .blog-hub-card h3 {
          font-size: 1.05rem;
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .blog-hub-card p {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
          flex-grow: 1;
        }
        .bhc-read {
          font-size: 0.85rem;
          font-weight: 600;
          background: var(--gradient-h);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 12px;
        }
        .cat-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 32px;
        }
        .cat-filter {
          padding: 8px 18px;
          border-radius: 50px;
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.74);
          color: var(--text);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition);
          font-family: inherit;
          box-shadow: var(--shadow-sm);
        }
        .cat-filter:hover { border-color: rgba(148,0,255,0.2); color: var(--text-dark); }
        .cat-filter.active {
          background: var(--gradient-btn);
          border-color: transparent;
          color: #FFFFFF;
          font-weight: 600;
        }
        .blog-search {
          max-width: 500px;
          margin: 0 auto 32px;
          position: relative;
        }
        .blog-search input {
          width: 100%;
          padding: 14px 20px 14px 48px;
          background: rgba(255,255,255,0.84);
          border: 1px solid var(--border);
          border-radius: 50px;
          color: var(--text-dark);
          font-size: 1rem;
          font-family: inherit;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }
        .blog-search input:focus {
          outline: none;
          border-color: var(--violet);
          box-shadow: 0 0 0 4px rgba(148,0,255,0.08), var(--shadow-md);
        }
        .blog-search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.1rem;
        }
        .blog-count {
          text-align: center;
          margin-bottom: 32px;
          font-size: 0.92rem;
          color: var(--text-muted);
        }
        @media (max-width: 768px) {
          .blog-hub-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .blog-hub-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* Hero */}
      <section className="page-hero">
        <div className="hero-grid-bg"></div>
        <div className="container">
          <span className="section-label">100+ Expert Articles</span>
          <h1>Title Search Blog &amp; Resources</h1>
          <p className="section-desc">Expert insights on title searches, lien searches, real estate due diligence, state-specific guides, and industry trends.</p>
        </div>
      </section>

      <section className="section" style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <BlogClient />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="container">
          <h2>Ready to Order a Title Search?</h2>
          <p>Put your knowledge to work. Order a fast, affordable title search starting at $10 with 24-48 hour turnaround.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-lg">Order Now &rarr;</Link>
            <Link href="/pricing" className="btn btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </>
  );
}
