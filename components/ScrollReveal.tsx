'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll(
      '.service-card, .why-card, .step, .review-card, .pricing-card, .blog-card, .faq-item, .value-card, .trust-item, .qa-step, .state-chip.active, .coverage-stat, .expedited-banner, .glance-card, .tech-card, .eto-step'
    );

    elements.forEach((el, i) => {
      el.classList.add('reveal');
      const siblings = el.parentElement?.querySelectorAll(':scope > *');
      if (siblings) {
        const idx = Array.from(siblings).indexOf(el as Element);
        if (idx <= 5) el.classList.add(`reveal-delay-${idx + 1}`);
      }
      revealObserver.observe(el);
    });

    document.querySelectorAll('.section-header').forEach((el) => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  return null;
}
