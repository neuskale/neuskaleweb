import { NextRequest, NextResponse } from 'next/server';

function buildEmailHtml(data: {
  order_intent: string;
  full_name: string;
  company_name: string;
  email_address: string;
  phone_number: string;
  search_type: string;
  state: string;
  property_address: string;
  additional_notes: string;
}): string {
  const {
    order_intent, full_name, company_name, email_address,
    phone_number, search_type, state, property_address, additional_notes,
  } = data;

  const isTrial = order_intent === 'Trial Order';
  const badgeBg = isTrial ? '#FF008C' : '#9400FF';
  const badgeLabel = isTrial ? '⚡ Trial Order' : '📋 Regular Order';
  const now = new Date().toLocaleString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Order – Neuskale</title>
</head>
<body style="margin:0;padding:0;background:#F0EFEC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F0EFEC;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Gradient header bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#FF9000,#FF008C,#BB00F2,#0099FF);height:4px;border-radius:8px 8px 0 0;"></td>
          </tr>

          <!-- Logo / Brand -->
          <tr>
            <td style="background:#ffffff;padding:28px 36px 20px;border-left:1px solid #E0E0E8;border-right:1px solid #E0E0E8;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:22px;font-weight:800;color:#1A1A2E;letter-spacing:-0.5px;">Neus<span style="background:linear-gradient(90deg,#FF008C,#9400FF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">kale</span></span>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background:${badgeBg};color:#ffffff;font-size:12px;font-weight:700;padding:5px 14px;border-radius:20px;letter-spacing:0.3px;">${badgeLabel}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero section -->
          <tr>
            <td style="background:#ffffff;padding:0 36px 28px;border-left:1px solid #E0E0E8;border-right:1px solid #E0E0E8;">
              <h1 style="margin:0 0 6px;font-size:24px;font-weight:700;color:#1A1A2E;line-height:1.2;">New Order Received</h1>
              <p style="margin:0;font-size:14px;color:#6B7280;">${now}</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background:#ffffff;padding:0 36px;border-left:1px solid #E0E0E8;border-right:1px solid #E0E0E8;">
              <div style="height:1px;background:#E8E7E3;"></div>
            </td>
          </tr>

          <!-- Contact Details section -->
          <tr>
            <td style="background:#ffffff;padding:24px 36px 0;border-left:1px solid #E0E0E8;border-right:1px solid #E0E0E8;">
              <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#9400FF;text-transform:uppercase;letter-spacing:1px;">Contact Details</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="padding-bottom:16px;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:0.5px;">Full Name</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1A1A2E;">${full_name}</p>
                  </td>
                  <td width="50%" style="padding-bottom:16px;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:0.5px;">Company</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1A1A2E;">${company_name || '<span style="color:#9CA3AF;font-weight:400;">Not provided</span>'}</p>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding-bottom:16px;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:0.5px;">Email</p>
                    <p style="margin:0;font-size:15px;font-weight:600;"><a href="mailto:${email_address}" style="color:#FF008C;text-decoration:none;">${email_address}</a></p>
                  </td>
                  <td width="50%" style="padding-bottom:16px;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:0.5px;">Phone</p>
                    <p style="margin:0;font-size:15px;font-weight:600;"><a href="tel:${phone_number}" style="color:#1A1A2E;text-decoration:none;">${phone_number}</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background:#ffffff;padding:0 36px;border-left:1px solid #E0E0E8;border-right:1px solid #E0E0E8;">
              <div style="height:1px;background:#E8E7E3;"></div>
            </td>
          </tr>

          <!-- Order Details section -->
          <tr>
            <td style="background:#ffffff;padding:24px 36px 0;border-left:1px solid #E0E0E8;border-right:1px solid #E0E0E8;">
              <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#9400FF;text-transform:uppercase;letter-spacing:1px;">Order Details</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="padding-bottom:16px;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:0.5px;">Search Type</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1A1A2E;">${search_type}</p>
                  </td>
                  <td width="50%" style="padding-bottom:16px;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:0.5px;">State</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1A1A2E;">${state}</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-bottom:16px;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:11px;color:#6B7280;text-transform:uppercase;letter-spacing:0.5px;">Property Address</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1A1A2E;">${property_address}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Notes section (only if provided) -->
          ${additional_notes ? `
          <tr>
            <td style="background:#ffffff;padding:0 36px;border-left:1px solid #E0E0E8;border-right:1px solid #E0E0E8;">
              <div style="height:1px;background:#E8E7E3;"></div>
            </td>
          </tr>
          <tr>
            <td style="background:#ffffff;padding:20px 36px;border-left:1px solid #E0E0E8;border-right:1px solid #E0E0E8;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#9400FF;text-transform:uppercase;letter-spacing:1px;">Additional Notes</p>
              <p style="margin:0;font-size:14px;color:#2D2D3A;line-height:1.6;background:#F8F7F4;padding:14px 16px;border-radius:8px;border-left:3px solid #BB00F2;">${additional_notes}</p>
            </td>
          </tr>` : ''}

          <!-- CTA button -->
          <tr>
            <td style="background:#ffffff;padding:8px 36px 28px;border-left:1px solid #E0E0E8;border-right:1px solid #E0E0E8;" align="center">
              <a href="mailto:${email_address}?subject=Re: Your ${order_intent} – Neuskale" style="display:inline-block;background:linear-gradient(135deg,#FF008C,#9400FF);color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:13px 32px;border-radius:8px;letter-spacing:0.2px;">Reply to ${full_name} →</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F8F7F4;padding:20px 36px;border:1px solid #E0E0E8;border-top:none;border-radius:0 0 8px 8px;">
              <p style="margin:0;font-size:12px;color:#9CA3AF;text-align:center;line-height:1.6;">
                This email was sent automatically when a visitor submitted the order form on <strong style="color:#6B7280;">neuskale.com</strong><br/>
                Do not reply to this email — use the button above to contact the client directly.
              </p>
            </td>
          </tr>

          <!-- Bottom gradient bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#FF9000,#FF008C,#BB00F2,#0099FF);height:3px;border-radius:0 0 8px 8px;"></td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      order_intent,
      full_name,
      company_name,
      email_address,
      phone_number,
      search_type,
      state,
      property_address,
      additional_notes,
    } = body;

    // Basic server-side validation
    if (!full_name?.trim() || !email_address?.trim() || !phone_number?.trim() || !search_type || !state || !property_address?.trim()) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_address)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const subject = `New ${order_intent} – ${full_name}${company_name ? ` (${company_name})` : ''}`;
    const html = buildEmailHtml({ order_intent, full_name, company_name, email_address, phone_number, search_type, state, property_address, additional_notes });

    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: { name: 'Neuskale', email: process.env.BREVO_SENDER_EMAIL! },
        to: [{ email: 'info@neuskale.com', name: 'Neuskale' }],
        replyTo: { email: email_address, name: full_name },
        subject,
        htmlContent: html,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err?.message || 'Brevo API error');
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Contact form email error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
