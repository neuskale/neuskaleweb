import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MobileStickyCta from '@/components/MobileStickyCta';
import blogData from '@/lib/blogData.json';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogData.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = blogData.find(a => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Neuskale Blog`,
    description: article.desc,
  };
}

export default function BlogPostPage({ params }: Props) {
  const article = blogData.find(a => a.slug === params.slug);
  if (!article) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid-bg"></div>
        <div className="container">
          <span className="section-label">{article.cat}</span>
          <h1>{article.title}</h1>
          <p className="section-desc" style={{ maxWidth: 700 }}>{article.desc}</p>
          <div style={{ marginTop: 16, fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', gap: 16, justifyContent: 'center' }}>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.read}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ background: 'var(--dark-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '40px 48px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: 12 }}>Full Article Coming Soon</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 28 }}>
              We&apos;re migrating our blog content. In the meantime, contact our team for expert guidance on{' '}
              <strong>{article.title.toLowerCase()}</strong>.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Contact Us &rarr;</Link>
              <Link href="/blog" className="btn btn-secondary">Back to Blog</Link>
            </div>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </>
  );
}
