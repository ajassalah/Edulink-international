import nodemailer from 'nodemailer';

const REQUIRED_FIELDS = ['name', 'email', 'category', 'message'];

function badRequest(message, status = 400) {
  return Response.json({ error: message }, { status });
}

function sanitize(value) {
  return String(value || '').trim();
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildTransport() {
  const host = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com';
  const port = Number(process.env.ZOHO_SMTP_PORT || 465);
  const secure = String(process.env.ZOHO_SMTP_SECURE || 'true') === 'true';
  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASS;

  if (!user || !pass) {
    throw new Error('Zoho SMTP credentials are missing.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const payload = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      category: sanitize(body.category),
      message: sanitize(body.message),
    };

    for (const field of REQUIRED_FIELDS) {
      if (!payload[field]) {
        return badRequest(`Missing required field: ${field}`);
      }
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(payload.email)) {
      return badRequest('Please provide a valid email address.');
    }

    const transporter = buildTransport();
    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.ZOHO_SMTP_USER;
    const categoryLabel = payload.category.replace(/[-_]/g, ' ');
    const safeName = escapeHtml(payload.name);
    const safeEmail = escapeHtml(payload.email);
    const safePhone = escapeHtml(payload.phone || 'Not provided');
    const safeCategory = escapeHtml(categoryLabel);
    const safeMessage = escapeHtml(payload.message);
    const subject = `New website inquiry: ${categoryLabel}`;

    const text = [
      'New contact form submission from edulink website',
      '',
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || 'Not provided'}`,
      `Category: ${payload.category}`,
      '',
      'Message:',
      payload.message,
    ].join('\n');

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 16px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Category:</strong> ${safeCategory}</p>
        <p><strong>Message:</strong></p>
        <div style="padding: 16px; background: #f3f4f6; border-radius: 8px; white-space: pre-wrap;">${safeMessage}</div>
      </div>
    `;

    await transporter.sendMail({
      from: `EduLink Website <${process.env.ZOHO_SMTP_USER}>`,
      to: toEmail,
      replyTo: payload.email,
      subject,
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return badRequest('Unable to send your message right now. Please try again later.', 500);
  }
}
