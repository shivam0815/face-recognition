const { sendAdminLeadMail } = require("../utils/mailer");

function isEmail(x) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(x || ""));
}

exports.submitPartnership = async (req, res) => {
  try {
    const {
      orgType,
      orgName,
      contactName,
      email,
      phone,
      useCase,
      city,
      message,
    } = req.body || {};

    if (!orgName?.trim()) return res.status(400).json({ message: "orgName required" });
    if (!contactName?.trim()) return res.status(400).json({ message: "contactName required" });
    if (!email?.trim() || !isEmail(email)) return res.status(400).json({ message: "valid email required" });
    if (!phone?.trim()) return res.status(400).json({ message: "phone required" });
    if (!city?.trim()) return res.status(400).json({ message: "city required" });

    const payload = {
      orgType: String(orgType || ""),
      orgName: orgName.trim(),
      contactName: contactName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      useCase: String(useCase || ""),
      city: city.trim(),
      message: String(message || "").trim(),
    };

    await sendAdminLeadMail(payload);

    return res.json({ success: true, message: "Submitted & emailed to admin" });
  } catch (err) {
  console.error("submitPartnership error:", err);

  return res.status(500).json({
    success: false,
    message: err?.message || "Server error",
    stack: process.env.NODE_ENV === "production" ? undefined : err?.stack,
  });
}

}
