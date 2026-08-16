import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first, last, email, phone, type, budget, message } = body;

    if (!first || !email || !message) {
      return NextResponse.json(
        { error: 'First name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const clientFullName = `${first} ${last || ''}`.trim();
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465');
    const smtpUser = process.env.SMTP_USER || 'srservices0826@gmail.com';
    const smtpPass = process.env.SMTP_PASS || '';
    const smtpFrom = process.env.SMTP_FROM || `"SR SERVICES" <${smtpUser}>`;
    const founderEmails = process.env.FOUNDER_EMAIL || 'srservices0826@gmail.com';

    // If SMTP Password is configured, send emails via Nodemailer
    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // 1. Client Confirmation HTML Template
      const clientHtmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting SR Services</title>
        <style>
          body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050816; color: #ffffff; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #0b0f29; border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
          .header { background: linear-gradient(135deg, #0284c7 0%, #7e22ce 100%); padding: 30px 25px; text-align: center; border-bottom: 2px solid rgba(255,255,255,0.1); }
          .brand-badge { display: inline-block; background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); padding: 6px 16px; border-radius: 50px; font-size: 11px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; color: #e0f2fe; margin-bottom: 12px; }
          .h1 { font-size: 26px; font-weight: 800; margin: 0; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.2); }
          .content { padding: 30px 25px; }
          .greeting { font-size: 18px; font-weight: 700; color: #38bdf8; margin-bottom: 15px; }
          .paragraph { font-size: 14px; line-height: 1.6; color: #cbd5e1; margin-bottom: 20px; }
          .summary-box { background: rgba(15, 23, 42, 0.9); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 14px; padding: 20px; margin-bottom: 25px; }
          .summary-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #c084fc; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
          .summary-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 13px; }
          .summary-label { color: #94a3b8; font-weight: 600; }
          .summary-val { color: #f8fafc; font-weight: 700; text-align: right; }
          .msg-box { background: #020617; border-left: 4px solid #38bdf8; padding: 12px 15px; border-radius: 0 8px 8px 0; font-size: 13px; color: #e2e8f0; font-style: italic; margin-top: 10px; }
          .cta-box { text-align: center; padding: 25px 20px; background: rgba(168, 85, 247, 0.08); border-radius: 16px; border: 1px solid rgba(168, 85, 247, 0.2); margin-bottom: 25px; }
          .btn-wa { display: inline-block; background: linear-gradient(90deg, #10b981 0%, #059669 100%); color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 12px 28px; border-radius: 50px; box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3); margin-top: 10px; }
          .contacts-bar { display: flex; flex-wrap: wrap; justify-content: space-around; background: #020617; padding: 15px; border-radius: 12px; font-size: 12px; color: #94a3b8; border: 1px solid rgba(255,255,255,0.05); }
          .contact-item { margin: 5px 10px; }
          .contact-item a { color: #38bdf8; text-decoration: none; font-weight: 600; }
          .footer { text-align: center; padding: 20px 25px; font-size: 11px; color: #64748b; border-top: 1px solid rgba(255,255,255,0.05); }
          .founders-sig { font-size: 13px; font-weight: 700; color: #f1f5f9; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand-badge">⚡ SR DIGITAL ENGINE</div>
            <div class="h1">SR SERVICES</div>
          </div>
          <div class="content">
            <div class="greeting">Hi ${clientFullName},</div>
            <div class="paragraph">
              Thank you for reaching out to <strong>SR Services</strong>! Your inquiry has been successfully received by our system. Our co-founders <strong>Ritik Motwani (CCO)</strong> and <strong>Sachin Rawat (CTO)</strong> will review your project details and connect with you within 24 hours.
            </div>
            
            <div class="summary-box">
              <div class="summary-title">📋 Your Submission Details</div>
              <div class="summary-row">
                <span class="summary-label">Name:</span>
                <span class="summary-val">${clientFullName}</span>
              </div>
              <div class="summary-row">
                <span class="summary-label">Email:</span>
                <span class="summary-val">${email}</span>
              </div>
              <div class="summary-row">
                <span class="summary-label">Phone:</span>
                <span class="summary-val">${phone || 'Not provided'}</span>
              </div>
              <div class="summary-row">
                <span class="summary-label">Requested Service:</span>
                <span class="summary-val">${type}</span>
              </div>
              <div class="summary-row">
                <span class="summary-label">Estimated Budget:</span>
                <span class="summary-val">${budget || 'Not specified'}</span>
              </div>
              <div class="msg-box">"${message}"</div>
            </div>

            <div class="cta-box">
              <div style="font-size: 15px; font-weight: 700; color: #ffffff; margin-bottom: 6px;">Need Immediate Assistance?</div>
              <div style="font-size: 13px; color: #cbd5e1; margin-bottom: 12px;">Chat directly with our co-founders on WhatsApp for quick 24/7 response.</div>
              <a href="https://wa.me/918319694592?text=${encodeURIComponent(`Hi Ritik & Sachin, I submitted an inquiry for ${type}!`)}" class="btn-wa">💬 Chat on WhatsApp (+91 83196 94592)</a>
            </div>

            <div class="contacts-bar">
              <div class="contact-item">📞 <strong>Call:</strong> <a href="tel:+918319694592">+91 83196 94592</a></div>
              <div class="contact-item">✉️ <strong>Email:</strong> <a href="mailto:srservices0826@gmail.com">srservices0826@gmail.com</a></div>
            </div>
          </div>

          <div class="footer">
            <div>Best Regards,</div>
            <div class="founders-sig">Ritik Motwani (CCO) & Sachin Rawat (CTO)</div>
            <div style="margin-top: 6px;">SR SERVICES • Indore, Madhya Pradesh, India</div>
          </div>
        </div>
      </body>
      </html>
      `;

      // 2. Founder Notification HTML Template
      const founderHtmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; background: #050816; color: #ffffff; padding: 20px; }
          .card { max-width: 600px; margin: 0 auto; background: #0b0f29; border: 2px solid #38bdf8; border-radius: 16px; padding: 25px; }
          .title { font-size: 20px; font-weight: bold; color: #38bdf8; margin-bottom: 15px; }
          .row { margin-bottom: 10px; font-size: 14px; }
          .label { font-weight: bold; color: #c084fc; }
          .val { color: #ffffff; }
          .btn-reply { display: inline-block; background: #10b981; color: #ffffff; font-weight: bold; padding: 10px 20px; border-radius: 50px; text-decoration: none; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="title">🚀 New Client Inquiry Received!</div>
          <div class="row"><span class="label">Name:</span> <span class="val">${clientFullName}</span></div>
          <div class="row"><span class="label">Email:</span> <span class="val">${email}</span></div>
          <div class="row"><span class="label">Phone:</span> <span class="val">${phone || 'Not provided'}</span></div>
          <div class="row"><span class="label">Service:</span> <span class="val">${type}</span></div>
          <div class="row"><span class="label">Budget:</span> <span class="val">${budget || 'Not specified'}</span></div>
          <div class="row" style="margin-top:15px;"><span class="label">Message:</span></div>
          <div style="background:#020617; padding:12px; border-radius:8px; font-style:italic; color:#e2e8f0;">${message}</div>
          <a href="https://wa.me/91${phone ? phone.replace(/[^0-9]/g, '') : '8319694592'}?text=${encodeURIComponent(`Hi ${first}, thank you for reaching out to SR Services!`)}" class="btn-reply">💬 Reply via WhatsApp</a>
        </div>
      </body>
      </html>
      `;

      // Send email to client
      await transporter.sendMail({
        from: smtpFrom,
        to: email,
        subject: `✨ Thank You for Reaching Out to SR Services!`,
        html: clientHtmlTemplate,
      });

      // Send email notification to founders
      await transporter.sendMail({
        from: smtpFrom,
        to: founderEmails,
        subject: `🚀 New Inquiry: ${type} from ${clientFullName}`,
        html: founderHtmlTemplate,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted and confirmation email dispatched successfully!',
    });
  } catch (err: any) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: err.message || 'Server error while sending email.' },
      { status: 500 }
    );
  }
}
