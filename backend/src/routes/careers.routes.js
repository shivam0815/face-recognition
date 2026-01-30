// server/routes/careers.routes.js
// CommonJS route: POST /api/careers/apply -> sends email via SMTP (nodemailer)

const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
router.post("/apply", async (req, res) => {
  try {
    const body = req.body || {};

    const sectionTitle = String(body.sectionTitle || "");
    const sectionKey = String(body.sectionKey || "");
    const fullName = String(body.fullName || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const city = String(body.city || "").trim();
    const experience = String(body.experience || "").trim();
    const roleInterested = String(body.roleInterested || "").trim();
    const message = String(body.message || "").trim();

    // ✅ required fields
    if (!fullName || !email || !phone || !roleInterested) {
      return res.status(400).json({
        message: "Missing required fields: fullName, email, phone, roleInterested",
      });
    }
    if (!isEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }
    if (phone.length < 10) {
      return res.status(400).json({ message: "Invalid phone number" });
    }

    // ✅ SMTP config from env (you said SMTP already set)
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(500).json({
        message: "SMTP is not configured. Please set SMTP_HOST, SMTP_USER, SMTP_PASS (and SMTP_PORT).",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true", // true only for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.HR_TO_EMAIL || process.env.SMTP_USER;
    const from = process.env.MAIL_FROM || process.env.SMTP_USER;

    const subject = `Career Application: ${roleInterested}${sectionTitle ? ` | ${sectionTitle}` : ""}`;

    const text = [
      "NEW CAREER APPLICATION",
      "----------------------------------------",
      sectionTitle ? `SECTION: ${sectionTitle}` : "",
      sectionKey ? `SECTION_KEY: ${sectionKey}` : "",
      roleInterested ? `ROLE_INTERESTED: ${roleInterested}` : "",
      "----------------------------------------",
      `FULL NAME: ${fullName}`,
      `EMAIL: ${email}`,
      `PHONE: ${phone}`,
      city ? `CITY: ${city}` : "CITY: -",
      experience ? `EXPERIENCE: ${experience}` : "EXPERIENCE: -",
      "----------------------------------------",
      "MESSAGE:",
      message || "-",
      "----------------------------------------",
      `SUBMITTED_AT: ${new Date().toISOString()}`,
      `IP: ${req.ip}`,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from,
      to,
      replyTo: email, // so HR can directly reply to candidate
      subject,
      text,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("CAREERS APPLY ERROR:", err);
    return res.status(500).json({ message: "Email sending failed" });
  }
});

module.exports = router;
