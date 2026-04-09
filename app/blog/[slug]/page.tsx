import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
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

function extractBlogContent(html: string): string {
  const start = html.indexOf('<div class="blog-post-content">');
  if (start === -1) return '';
  const slice = html.slice(start + '<div class="blog-post-content">'.length);
  const authorIdx = slice.indexOf('<div class="blog-author');
  return authorIdx !== -1 ? slice.slice(0, authorIdx) : slice;
}

interface RelatedArticle {
  slug: string;
  cat: string;
  title: string;
  date: string;
}

function extractRelatedArticles(html: string): RelatedArticle[] {
  const relatedIdx = html.indexOf('class="related-posts"');
  if (relatedIdx === -1) return [];
  const section = html.slice(relatedIdx);
  const cards: RelatedArticle[] = [];
  const cardRegex = /href="([^"]+\.html)"[^>]*class="related-card"[\s\S]*?<span class="related-cat">([^<]+)<\/span>\s*<h4>([^<]+)<\/h4>\s*<span class="related-date">([^<]+)<\/span>/g;
  let m;
  while ((m = cardRegex.exec(section)) !== null) {
    cards.push({
      slug: m[1].replace('.html', ''),
      cat: m[2].trim(),
      title: m[3].trim(),
      date: m[4].trim(),
    });
  }
  return cards;
}

export default function BlogPostPage({ params }: Props) {
  const article = blogData.find(a => a.slug === params.slug);
  if (!article) notFound();

  const htmlFilePath = path.join(process.cwd(), 'public', 'blog', `${params.slug}.html`);
  let blogContent = '';
  let relatedArticles: RelatedArticle[] = [];
  if (fs.existsSync(htmlFilePath)) {
    const raw = fs.readFileSync(htmlFilePath, 'utf-8');
    blogContent = extractBlogContent(raw);
    relatedArticles = extractRelatedArticles(raw);
  }

  return (
    <>
      <style>{`
        .blog-post-content h2 { margin: 48px 0 20px; font-size: 1.5rem; }
        .blog-post-content p { font-size: 1.05rem; line-height: 1.85; color: var(--text-muted); margin-bottom: 20px; }
        .blog-post-content ul { margin: 20px 0 28px; padding: 0; list-style: none; }
        .blog-post-content ul li { padding: 12px 0; border-bottom: 1px solid var(--border); font-size: 0.98rem; color: var(--text-muted); line-height: 1.7; }
        .blog-post-content ul li:last-child { border-bottom: none; }
        .blog-post-content ul li strong { color: var(--text-dark); }
        .blog-post-content ol { margin: 20px 0 28px; padding-left: 24px; }
        .blog-post-content ol li { padding: 8px 0; font-size: 0.98rem; color: var(--text-muted); line-height: 1.7; }
        .blog-post-content a { color: var(--violet); text-decoration: underline; }
        .blog-post-content blockquote { border-left: 3px solid var(--violet); padding: 16px 24px; margin: 32px 0; background: rgba(148,0,255,0.04); border-radius: 0 var(--radius-md) var(--radius-md) 0; }
        .blog-post-content h3 { margin: 32px 0 16px; font-size: 1.2rem; }
        .blog-post-content h4 { margin: 24px 0 12px; font-size: 1.05rem; }
        .related-article-card:hover { border-color: rgba(148,0,255,0.25); transform: translateY(-3px); box-shadow: var(--shadow-md); }
      `}</style>

      <section className="page-hero">
        <div className="hero-grid-bg"></div>
        <div className="container">
          <span className="section-label">{article!.cat}</span>
          <h1>{article!.title}</h1>
          <p className="section-desc" style={{ maxWidth: 700 }}>{article!.desc}</p>
          <div style={{ marginTop: 16, fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', gap: 16, justifyContent: 'center' }}>
            <span>{article!.date}</span>
            <span>·</span>
            <span>{article!.read}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          {blogContent ? (
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: blogContent }}
            />
          ) : (
            <div style={{ background: 'var(--dark-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '40px 48px', textAlign: 'center' }}>
              <h2 style={{ marginBottom: 12 }}>Full Article Coming Soon</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: 28 }}>
                We&apos;re migrating our blog content. In the meantime, contact our team for expert guidance on{' '}
                <strong>{article!.title.toLowerCase()}</strong>.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Contact Us &rarr;</Link>
                <Link href="/blog" className="btn btn-secondary">Back to Blog</Link>
              </div>
            </div>
          )}
          {relatedArticles.length > 0 && (
            <div style={{ marginTop: 64 }}>
              <h3 style={{ marginBottom: 24, fontSize: '1.3rem' }}>Related Articles</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 16 }}>
                {relatedArticles.map(rel => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    style={{ display: 'flex', flexDirection: 'column', background: 'var(--dark-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '20px 22px', textDecoration: 'none', transition: 'var(--transition)' }}
                    className="related-article-card"
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--pink)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{rel.cat}</span>
                    <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-dark)', lineHeight: 1.45, margin: '0 0 12px', flexGrow: 1 }}>{rel.title}</p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rel.date}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
            <Link href="/blog" style={{ fontSize: '0.92rem', fontWeight: 600 }}>&larr; Back to Blog</Link>
            <Link href="/contact" className="btn btn-primary btn-sm">Order a Title Search &rarr;</Link>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </>
  );
}
