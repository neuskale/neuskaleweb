'use client';

import { useState } from 'react';

type Step = 0 | 1 | 2;

const searchTypes = [
  'Current Owner Search', 'Two Owner Search', 'Full Title Search / 30-Year',
  'Update Search', 'Title Examination', 'Lien Search', 'Foreclosure Search',
  'Condo Search', 'Document Retrieval', 'Other / Custom',
];

const usStates = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
];

// Sanitize: strip HTML tags and limit length to prevent injection
function sanitize(value: string, maxLen = 500): string {
  return value.replace(/<[^>]*>/g, '').trim().slice(0, maxLen);
}

export default function ContactForm() {
  const [step, setStep] = useState<Step>(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    order_intent: 'Trial Order',
    full_name: '',
    company_name: '',
    email_address: '',
    phone_number: '',
    search_type: '',
    state: '',
    property_address: '',
    additional_notes: '',
  });

  const set = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const validateStep = (): boolean => {
    if (step === 0) {
      if (!form.full_name.trim() || form.full_name.trim().length < 2) {
        setError('Full name must be at least 2 characters.'); return false;
      }
      if (!form.email_address.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email_address)) {
        setError('A valid email address is required.'); return false;
      }
      if (!form.phone_number.trim()) {
        setError('Phone number is required.'); return false;
      }
      if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(form.phone_number.trim())) {
        setError('Phone number format is invalid (e.g. (555) 123-4567).'); return false;
      }
    }
    if (step === 1) {
      if (!form.search_type) { setError('Please select a search type.'); return false; }
      if (!form.state) { setError('Please select a state.'); return false; }
      if (!form.property_address.trim() || form.property_address.trim().length < 5) {
        setError('Please enter a complete property address.'); return false;
      }
    }
    setError('');
    return true;
  };

  const next = () => { if (validateStep()) setStep((s) => (s + 1) as Step); };
  const prev = () => { setStep((s) => (s - 1) as Step); setError(''); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Submission failed');
      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Submission failed';
      setError(`${message}. Please email us directly at rathan@ventois.com or try again.`);
    } finally {
      setSubmitting(false);
    }
  };

  const progress = ((step + 1) / 3) * 100;

  if (submitted) {
    return (
      <div className="order-wizard">
        <div className="order-wizard-header" style={{ textAlign: 'center', padding: '48px 24px' }}>
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
          <h2 style={{ marginBottom: 12 }}>Order Submitted!</h2>
          <p>Thank you! Your order has been submitted. Our team will contact you shortly to confirm scope, turnaround, and any county-specific fees before work begins.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="order-wizard" id="orderForm">
      <div className="order-wizard-header">
        <span className="section-label">Fastest Way To Order</span>
        <h2 style={{ marginBottom: 8 }}>Place Your Order or Start a Trial</h2>
        <p style={{ marginBottom: 0 }}>New client? Start with 1–3 trial orders through our ETO model. Existing client? Use the guided form below.</p>
      </div>

      <div className="wizard-progress" aria-label="Order progress">
        <div className="wizard-progress-bar">
          <span className="wizard-progress-fill" style={{ width: `${progress}%` }}></span>
        </div>
        <div className="wizard-steps">
          {[
            { label: 'Contact', desc: 'Who you are and whether this is a trial or regular order.' },
            { label: 'Order Details', desc: 'Tell us what to search and where the property is located.' },
            { label: 'Review', desc: 'Confirm the request before sending it to our team.' },
          ].map((s, i) => (
            <div key={s.label} className={`wizard-step${i === step ? ' is-active' : ''}${i < step ? ' is-complete' : ''}`}>
              <span className="wizard-step-number">{i + 1}</span>
              <div className="wizard-step-copy">
                <strong>{s.label}</strong>
                <span>{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {error && (
        <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 8, padding: '10px 16px', marginBottom: 16, color: '#ef4444', fontSize: '0.9rem' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Step 0: Contact */}
        {step === 0 && (
          <div className="wizard-panel">
            <div className="form-group">
              <label className="form-label">Order Type *</label>
              <div className="wizard-choice-group">
                <label className="wizard-choice">
                  <input type="radio" name="order_intent" value="Trial Order" checked={form.order_intent === 'Trial Order'} onChange={e => set('order_intent', e.target.value)} />
                  <span className="wizard-choice-content"><strong>Trial Order</strong><small>Best for first-time clients sending 1–3 searches to evaluate our quality, formatting, and turnaround.</small></span>
                </label>
                <label className="wizard-choice">
                  <input type="radio" name="order_intent" value="Regular Order" checked={form.order_intent === 'Regular Order'} onChange={e => set('order_intent', e.target.value)} />
                  <span className="wizard-choice-content"><strong>Regular Order</strong><small>Ideal for existing clients or teams ready to send a standard production request right away.</small></span>
                </label>
              </div>
            </div>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Full Name *</label>
                <input type="text" id="fullName" className="form-input" placeholder="John Smith" value={form.full_name} onChange={e => set('full_name', sanitize(e.target.value, 100))} autoComplete="name" />
              </div>
              <div className="form-group">
                <label htmlFor="companyName" className="form-label">Company Name</label>
                <input type="text" id="companyName" className="form-input" placeholder="ABC Title Co." value={form.company_name} onChange={e => set('company_name', sanitize(e.target.value, 100))} autoComplete="organization" />
              </div>
            </div>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="form-group">
                <label htmlFor="emailAddress" className="form-label">Email Address *</label>
                <input type="email" id="emailAddress" className="form-input" placeholder="john@company.com" value={form.email_address} onChange={e => set('email_address', sanitize(e.target.value, 200))} autoComplete="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
                <input type="tel" id="phoneNumber" className="form-input" placeholder="(555) 123-4567" value={form.phone_number} onChange={e => set('phone_number', sanitize(e.target.value.replace(/[^0-9()\-+\s]/g, ''), 20))} autoComplete="tel" />
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Order Details */}
        {step === 1 && (
          <div className="wizard-panel">
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="form-group">
                <label htmlFor="searchType" className="form-label">Search Type *</label>
                <select id="searchType" className="form-select" value={form.search_type} onChange={e => set('search_type', e.target.value)}>
                  <option value="">Select search type...</option>
                  {searchTypes.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="state" className="form-label">State *</label>
                <select id="state" className="form-select" value={form.state} onChange={e => set('state', e.target.value)}>
                  <option value="">Select state...</option>
                  {usStates.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="propertyAddress" className="form-label">Property Address *</label>
              <input type="text" id="propertyAddress" className="form-input" placeholder="123 Main Street, City, State, ZIP" value={form.property_address} onChange={e => set('property_address', sanitize(e.target.value, 300))} autoComplete="street-address" />
            </div>
            <div className="form-group">
              <label htmlFor="additionalNotes" className="form-label">Additional Notes</label>
              <textarea id="additionalNotes" className="form-textarea" placeholder="Any special instructions, rush requests, parcel notes, or additional details..." value={form.additional_notes} onChange={e => set('additional_notes', sanitize(e.target.value, 1000))} />
            </div>
            <div className="wizard-note-card">
              <h3>What happens after you submit</h3>
              <ul className="wizard-checklist">
                <li>We review the request quickly and confirm the best search type if anything needs clarification.</li>
                <li>Any offline document retrieval or abstractor fees are communicated for approval before work begins.</li>
                <li>Most orders are delivered within 24–48 hours, with rush service available for urgent closings.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Step 2: Review */}
        {step === 2 && (
          <div className="wizard-panel">
            <div className="wizard-review-grid">
              <div className="wizard-summary-card">
                <h3>Contact Details</h3>
                <div className="wizard-summary-list">
                  <div className="wizard-summary-item"><span>Name</span><strong>{form.full_name || '-'}</strong></div>
                  <div className="wizard-summary-item"><span>Company</span><strong>{form.company_name || 'Not provided'}</strong></div>
                  <div className="wizard-summary-item"><span>Email</span><strong>{form.email_address || '-'}</strong></div>
                  <div className="wizard-summary-item"><span>Phone</span><strong>{form.phone_number || 'Not provided'}</strong></div>
                </div>
              </div>
              <div className="wizard-summary-card">
                <h3>Order Request</h3>
                <div className="wizard-summary-list">
                  <div className="wizard-summary-item"><span>Order Type</span><strong>{form.order_intent}</strong></div>
                  <div className="wizard-summary-item"><span>Search Type</span><strong>{form.search_type || '-'}</strong></div>
                  <div className="wizard-summary-item"><span>State</span><strong>{form.state || '-'}</strong></div>
                  <div className="wizard-summary-item"><span>Property</span><strong>{form.property_address || '-'}</strong></div>
                  <div className="wizard-summary-item"><span>Notes</span><strong>{form.additional_notes || 'No additional notes'}</strong></div>
                </div>
              </div>
            </div>
            <div className="wizard-confirm">
              By submitting, you are asking Neuskale to review this request and confirm final scope, turnaround, and any county-specific fees before work begins. For trial orders, our team will help you choose the best 1–3 properties to evaluate turnaround and quality.
            </div>
          </div>
        )}

        <div className="wizard-actions">
          {step > 0 && <button type="button" className="btn btn-secondary" onClick={prev}>Back</button>}
          <span className="wizard-step-caption">Step {step + 1} of 3</span>
          {step < 2 && <button type="button" className="btn btn-primary" onClick={next}>Continue &rarr;</button>}
          {step === 2 && (
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Sending…' : 'Submit Order / Start Trial →'}
            </button>
          )}
        </div>
        <p className="pricing-note" style={{ marginTop: 12 }}>* Prices shown are starting prices and may vary by state, county, and parcel complexity. Additional abstractor fees may apply if ground searches or offline document retrieval are required. All fees will be communicated and approved before proceeding.</p>
      </form>
    </div>
  );
}
