'use client';

import { useState, useRef } from 'react';

interface FaqItemProps {
  q: string;
  a: React.ReactNode;
}

export function FaqItem({ q, a }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq-item${open ? ' active' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {q}
        <span className="faq-toggle">{open ? '−' : '+'}</span>
      </button>
      <div
        ref={answerRef}
        className="faq-answer"
        style={{
          maxHeight: open ? (answerRef.current?.scrollHeight ?? 1000) + 'px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.45s ease',
        }}
      >
        {a}
      </div>
    </div>
  );
}
