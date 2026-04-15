'use client';

import { useEffect, useState } from 'react';

const words = ['Nationwide', 'Affordable', 'AI-Powered'];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`rotating-word${visible ? ' rotating-word--in' : ' rotating-word--out'}`}>
      {words[index]}
    </span>
  );
}
