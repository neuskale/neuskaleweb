'use client';

import { useState } from 'react';
import Link from 'next/link';
import blogData from '@/lib/blogData.json';

const categories = ['All', 'Education', 'Foreclosure', 'Industry', 'Legal', 'Lien', 'Real Estate', 'State Guide', 'Technology', 'Tips', 'Title Search'];

export default function BlogClient() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = blogData.filter(article => {
    const matchesCat = activeCategory === 'All' || article.cat === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch = !q || article.title.toLowerCase().includes(q) || article.desc.toLowerCase().includes(q) || article.cat.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <div className="blog-search">
        <span className="blog-search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={e => setSearch(e.target.value.slice(0, 200))}
          aria-label="Search blog articles"
          autoComplete="off"
        />
      </div>

      <div className="cat-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`cat-filter${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog-count">
        Showing {filtered.length} of {blogData.length} articles
      </div>

      <div className="blog-hub-grid">
        {filtered.map(article => (
          <a
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="blog-hub-card"
            data-cat={article.cat}
          >
            <div className="bhc-top">
              <span className="blog-tag">{article.cat}</span>
              <span className="bhc-date">{article.date}</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.desc}</p>
            <span className="bhc-read">{article.read} &rarr;</span>
          </a>
        ))}
        {filtered.length === 0 && (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
            No articles found. Try a different search or category.
          </div>
        )}
      </div>
    </>
  );
}
