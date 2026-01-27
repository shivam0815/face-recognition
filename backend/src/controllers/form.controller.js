const { sendEmail } = require("../utils/mailer");

exports.submitForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const html = `
      <h2>New Form Submission</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `;

    await sendEmail({
      subject: "📩 New Form Submitted",
      html,
    });

    res.json({ success: true, message: "Form submitted & email sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Email failed" });
  }
};
