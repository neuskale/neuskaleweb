'use client';

import { useEffect, useRef, useState } from 'react';

const GoogleIcon = () => (
  <svg className="review-google-icon" width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const reviews = [
  {
    name: 'John Brown',
    meta: 'Local Guide · 6 reviews · 61 photos',
    avatarBg: '#7C3AED',
    avatarLetter: 'J',
    texts: [
      'As a Real Estate Attorney with over 20 years of experience, I have used Neuskale Title Services close to a dozen times in the past several months to conduct title exams for closings, probate and foreclosure matters. I have been consistently impressed with the quality of the product they deliver, the timeframe within which they deliver it and the cost.',
      'The reports I have received have been far more extensive while also being much, much cheaper than the reports I typically receive through title examiners I used in the past. I am so happy that I found Neuskale Title Services after being repeatedly disappointed with the timing, cost and thoroughness of title examinations from other companies in the past.',
    ],
    date: '1 year ago',
    short: false,
  },
  {
    name: 'Jesus Butron',
    meta: '4 reviews',
    avatarBg: '#7C3AED',
    avatarLetter: 'j',
    texts: ['i like working with them, good service and fast time! locate them!'],
    date: '2 years ago',
    short: true,
  },
  {
    name: 'TMani88',
    meta: 'Local Guide · 20 reviews',
    avatarBg: '#4285F4',
    avatarLetter: 'T',
    texts: [
      'I recently used Neuskale Title Services for my home closing in Connecticut, and I couldn\'t be happier with the experience. They provided me with a Full Search title report for just $70, while my attorney was charging $350 for the exact same search. Thanks to Neuskale, I saved $280 without compromising on quality or speed.',
      'The report was accurate, detailed, and delivered quickly, and their team was incredibly responsive throughout the process. It\'s rare to find a service that delivers this level of quality at such an affordable price.',
      'Highly recommend Neuskale to anyone looking for reliable and cost-effective title search services!',
    ],
    date: '4 months ago',
    short: false,
  },
  {
    name: 'Karthikeyan Ramdass',
    meta: '9 reviews · 2 photos',
    avatarBg: '#E67C2E',
    avatarLetter: 'K',
    texts: [
      'I recently purchased two condo properties in Atlanta and reached out to Neuskale Title Services for fire searches. The experience was excellent from start to finish — fast turnaround, accurate reports, and smooth communication.',
      'Their pricing was far more affordable than what traditional title companies charge, which was a huge plus. The value they deliver for the cost is unbeatable.',
      'If anyone needs title searches in Georgia, they are definitely the best. Neuskale has earned my trust, and I\'ll continue using them for all my future title search needs. Highly recommend.',
    ],
    date: '4 months ago',
    short: false,
  },
  {
    name: 'Divya Srinivasan',
    meta: '4 reviews',
    avatarBg: '#0F9D58',
    avatarLetter: 'D',
    texts: [
      'Neuskale Title Services exceeded my expectations!',
      'I recently requested a Full Search title report for my Massachusetts home closing, and Neuskale delivered outstanding service. The report was accurate, detailed, and completed at impressive speed — all at a truly affordable cost.',
      'Their professionalism, communication, and quick turnaround made the entire process smooth and stress-free. I highly recommend Neuskale to anyone looking for reliable and efficient title search services.',
      'Five stars well deserved! 🌟',
    ],
    date: '4 months ago',
    short: false,
  },
  {
    name: 'Meera Srinivasan',
    meta: '4 reviews',
    avatarBg: '#E65100',
    avatarLetter: 'M',
    texts: ['Was a pleasure working with them. Very quick, efficient and professional.'],
    date: '2 months ago',
    short: true,
  },
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-avatar" style={{ background: review.avatarBg }}>{review.avatarLetter}</div>
        <div>
          <p className="review-name">{review.name}</p>
          <p className="review-meta">{review.meta}</p>
        </div>
        <GoogleIcon />
      </div>
      <div className="review-stars">★★★★★</div>
      <div className={`review-body${review.short ? ' short' : expanded ? ' expanded' : ''}`}>
        {review.texts.map((t, i) => <p key={i} className="review-text">{t}</p>)}
      </div>
      {!review.short && (
        <button className="review-toggle" onClick={() => setExpanded(e => !e)}>
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
      <p className="review-date">{review.date}</p>
    </div>
  );
}

export default function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dots, setDots] = useState<number[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function getCardsPerView() {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function goTo(index: number) {
    const cpv = getCardsPerView();
    const maxIndex = Math.max(0, reviews.length - cpv);
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
    if (trackRef.current) {
      const card = trackRef.current.querySelector('.review-card') as HTMLElement;
      if (card) {
        const gap = 24;
        const cardWidth = card.offsetWidth + gap;
        trackRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
      }
    }
    const totalDots = Math.max(1, reviews.length - cpv + 1);
    setDots(Array.from({ length: totalDots }, (_, i) => i));
  }

  function next() {
    const maxIndex = Math.max(0, reviews.length - getCardsPerView());
    goTo(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  }

  function prev() {
    const maxIndex = Math.max(0, reviews.length - getCardsPerView());
    goTo(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    timerRef.current = setInterval(next, 5000);
  }

  function stopAutoPlay() {
    if (timerRef.current) clearInterval(timerRef.current);
  }

  useEffect(() => {
    const totalDots = Math.max(1, reviews.length - getCardsPerView() + 1);
    setDots(Array.from({ length: totalDots }, (_, i) => i));
    startAutoPlay();
    const handleResize = () => {
      const cpv = getCardsPerView();
      const totalDots = Math.max(1, reviews.length - cpv + 1);
      setDots(Array.from({ length: totalDots }, (_, i) => i));
      goTo(currentIndex);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      stopAutoPlay();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Touch support
  const touchStartX = useRef(0);

  return (
    <div className="reviews-carousel" aria-label="Client reviews carousel">
      <button className="reviews-arrow reviews-arrow-left" aria-label="Previous review" onClick={() => { prev(); startAutoPlay(); }}>‹</button>
      <div className="reviews-track-wrapper">
        <div
          className="reviews-track"
          ref={trackRef}
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
          onTouchStart={e => { touchStartX.current = e.touches[0].clientX; stopAutoPlay(); }}
          onTouchEnd={e => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
            startAutoPlay();
          }}
        >
          {reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>
      <button className="reviews-arrow reviews-arrow-right" aria-label="Next review" onClick={() => { next(); startAutoPlay(); }}>›</button>
      <div className="reviews-dots" style={{ position: 'absolute', bottom: '-40px', left: 0, right: 0 }}>
        {dots.map(i => (
          <span key={i} className={`reviews-dot${i === currentIndex ? ' active' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </div>
  );
}
