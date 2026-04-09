import Link from 'next/link';

interface Props {
  orderHref?: string;
  orderLabel?: string;
}

export default function MobileStickyCta({ orderHref = '/contact', orderLabel = 'Order Now' }: Props) {
  return (
    <div className="mobile-sticky-cta" aria-label="Quick actions">
      <a href="tel:+1 860-327-5055" className="mobile-sticky-action mobile-sticky-call">Call 24/7</a>
      <Link href={orderHref} className="mobile-sticky-action mobile-sticky-order">{orderLabel}</Link>
    </div>
  );
}
