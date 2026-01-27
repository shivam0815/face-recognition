const nodemailer = require("nodemailer");

function transporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) throw new Error("SMTP env missing");

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

async function sendAdminLeadMail(payload) {
  const t = transporter();
  const to = process.env.ADMIN_NOTIFY_EMAIL;
  const fromName = process.env.APP_NAME || "App";

  const subject = `New Partnership Lead — ${payload.orgName} (${payload.orgType})`;

  const html = `
    <h2>New Partnership Submission</h2>
    <p><b>Org Type:</b> ${payload.orgType}</p>
    <p><b>Org Name:</b> ${payload.orgName}</p>
    <p><b>Contact Name:</b> ${payload.contactName}</p>
    <p><b>Email:</b> ${payload.email}</p>
    <p><b>Phone:</b> ${payload.phone}</p>
    <p><b>Use Case:</b> ${payload.useCase}</p>
    <p><b>City:</b> ${payload.city}</p>
    <p><b>Message:</b><br/>${String(payload.message || "").replace(/\n/g, "<br/>")}</p>
    <hr/>
    <p style="color:#64748b;font-size:12px">
      Submitted at: ${new Date().toISOString()}
    </p>
  `;

  return t.sendMail({
    from: `${fromName} <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    replyTo: payload.email, // so admin can reply directly
  });
}

module.exports = { sendAdminLeadMail };
