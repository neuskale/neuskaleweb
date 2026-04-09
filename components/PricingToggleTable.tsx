'use client';

import { useState } from 'react';
import Link from 'next/link';

const tableRows = [
  { icon: '📄', name: 'Document Retrieval',   standard: '$10',        bulk: '$9.50',     turnaround: 'Same day',     tag: 'Best Value',   tagType: 'value' },
  { icon: '🔄', name: 'Update Search',         standard: '$6',         bulk: '$5.70',     turnaround: 'Same day',     tag: '',             tagType: '' },
  { icon: '🏠', name: 'Lien Search',           standard: '$8+',        bulk: '$7.60+',    turnaround: '24 hours',     tag: '',             tagType: '' },
  { icon: '👤', name: 'Current Owner Search',  standard: '$10',        bulk: '$9.50',     turnaround: '24 hours',     tag: 'Most Popular', tagType: 'popular' },
  { icon: '👥', name: 'Two Owner Search',      standard: '$15',        bulk: '$14.25',    turnaround: '24–48 hours',  tag: '',             tagType: '' },
  { icon: '📋', name: 'Full Title / 30-Year',  standard: '$25+',       bulk: '$23.75+',   turnaround: '24–72 hours',  tag: '',             tagType: '' },
  { icon: '🏛', name: 'Condo Search',          standard: '$35',        bulk: '$33.25',    turnaround: '24–48 hours',  tag: '',             tagType: '' },
  { icon: '⚠', name: 'Foreclosure Search',    standard: '$35',        bulk: '$33.25',    turnaround: '24–48 hours',  tag: '',             tagType: '' },
  { icon: '🔎', name: 'Title Examination',     standard: 'Contact Us', bulk: 'Contact Us', turnaround: '48–72 hours', tag: '',             tagType: '' },
];

export default function PricingToggleTable() {
  const [bulk, setBulk] = useState(false);

  return (
    <>
      {/* ── Standard / Bulk toggle ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 48, flexWrap: 'wrap' }}>

        {/* "Standard Pricing" label */}
        <button
          type="button"
          onClick={() => setBulk(false)}
          style={{
            background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit',
            fontSize: '0.95rem', fontWeight: 600,
            color: bulk ? 'var(--text-muted)' : 'var(--text-dark)',
            transition: 'color 0.3s',
          }}
        >
          Standard Pricing
        </button>

        {/* Toggle pill */}
        <button
          type="button"
          role="switch"
          aria-checked={bulk}
          aria-label={bulk ? 'Switch to standard pricing' : 'Switch to bulk pricing'}
          onClick={() => setBulk(b => !b)}
          style={{
            width: 56, height: 30, borderRadius: 50, cursor: 'pointer', position: 'relative',
            flexShrink: 0, border: 'none', padding: 0, outline: 'none',
            background: bulk
              ? 'linear-gradient(135deg, #FF008C, #BB00F2)'
              : 'rgba(255,255,255,0.92)',
            boxShadow: bulk
              ? '0 2px 8px rgba(187,0,242,0.35)'
              : 'inset 0 1px 3px rgba(39,21,67,0.12), 0 0 0 1px rgba(0,0,0,0.08)',
            transition: 'background 0.3s, box-shadow 0.3s',
          }}
        >
          <span style={{
            position: 'absolute', top: 4, left: 4, width: 22, height: 22,
            background: '#FFF', borderRadius: '50%', display: 'block',
            boxShadow: '0 2px 6px rgba(39,21,67,0.25)',
            transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
            transform: bulk ? 'translateX(26px)' : 'translateX(0px)',
          }} />
        </button>

        {/* "Bulk Pricing" label */}
        <button
          type="button"
          onClick={() => setBulk(true)}
          style={{
            background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit',
            fontSize: '0.95rem', fontWeight: 600,
            color: bulk ? 'var(--text-dark)' : 'var(--text-muted)',
            transition: 'color 0.3s',
            display: 'flex', alignItems: 'center', gap: 8,
          }}
        >
          Bulk Pricing
          <span style={{
            background: 'rgba(5,150,105,0.1)', color: '#059669',
            fontSize: '0.75rem', fontWeight: 700,
            padding: '3px 10px', borderRadius: 50,
            border: '1px solid rgba(52,211,153,0.25)',
            whiteSpace: 'nowrap',
          }}>
            Save 5–10%
          </span>
        </button>
      </div>

      {/* ── Price table ── */}
      <div style={{ maxWidth: 900, margin: '0 auto', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Service', bulk ? 'Bulk Price' : 'Standard Price', 'Turnaround', ''].map((h, i) => (
                <th key={i} style={{
                  background: 'linear-gradient(180deg, rgba(35,18,63,0.96), rgba(20,10,38,0.98))',
                  color: '#FFF', padding: '16px 20px', fontSize: '0.82rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: 1, textAlign: 'left',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, idx) => (
              <tr
                key={row.name}
                style={{ background: idx % 2 === 0 ? 'rgba(255,255,255,0.6)' : 'rgba(248,244,240,0.5)' }}
              >
                {/* Service name */}
                <td style={{ padding: '15px 20px', borderBottom: '1px solid var(--border)', verticalAlign: 'middle' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.95rem' }}>
                    <span>{row.icon}</span>
                    {row.name}
                  </span>
                </td>

                {/* Price — switches based on toggle */}
                <td style={{ padding: '15px 20px', borderBottom: '1px solid var(--border)', verticalAlign: 'middle' }}>
                  <span style={{
                    fontWeight: 800, fontSize: '1.05rem',
                    background: 'linear-gradient(90deg,#FF9000,#FF008C,#9400FF,#0099FF)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    {bulk ? row.bulk : row.standard}
                  </span>
                </td>

                {/* Turnaround */}
                <td style={{ padding: '15px 20px', borderBottom: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--text-muted)', verticalAlign: 'middle' }}>
                  {row.turnaround}
                </td>

                {/* Tag badge */}
                <td style={{ padding: '15px 20px', borderBottom: '1px solid var(--border)', verticalAlign: 'middle' }}>
                  {row.tag && (
                    <span style={{
                      display: 'inline-block', padding: '3px 10px', borderRadius: 50, fontSize: '0.72rem', fontWeight: 700, whiteSpace: 'nowrap',
                      ...(row.tagType === 'popular'
                        ? { background: 'rgba(255,0,140,0.1)', color: '#FF008C', border: '1px solid rgba(255,0,140,0.25)' }
                        : { background: 'rgba(52,211,153,0.12)', color: '#059669', border: '1px solid rgba(52,211,153,0.25)' })
                    }}>
                      {row.tag}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ textAlign: 'center', marginTop: 24, fontSize: '0.88rem', color: 'var(--text-muted)' }}>
        Bulk pricing applies at 50+ searches/month. Custom enterprise rates available for 1,000+ searches/month.
      </p>

      {/* ── Quick order CTA ── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
        <Link href="/contact" className="btn btn-primary">Order Now &rarr;</Link>
        <Link href="/pricing#ancillary" className="btn btn-outline-gradient">View Ancillary Services</Link>
      </div>
    </>
  );
}
