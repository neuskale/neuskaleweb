'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/title-search', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Resources' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="container">
        <Link href="/" className="logo">
          <Image src="/assets/logo-header.png" alt="Neuskale" height={40} width={160} priority />
        </Link>
        <nav className={`nav${menuOpen ? ' open' : ''}`} id="nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary nav-mobile-cta">
            Order Now →
          </Link>
        </nav>
        <Link href="/contact" className="btn btn-primary btn-sm nav-cta">
          Order Now
        </Link>
        <button
          className="mobile-toggle"
          id="mobileToggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
