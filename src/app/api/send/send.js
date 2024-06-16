import express from "express";
import { createTransport } from "nodemailer";

const router = express.Router();

// POST route to send an email
router.post("/", async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    // Create a Nodemailer transporter using SMTP
    let transporter = createTransport({
      service: "Gmail", // Example: Gmail
      auth: {
        user: "nishantchaudhari49@gmail.com", // Your email
        pass: "Nish@2002", // Your password
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Your Name" <your_email@gmail.com>', // Sender address
      to: email, // List of recipients
      subject: subject, // Subject line
      text: message, // Plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Respond with success message
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    // Respond with error message
    res.status(500).json({ success: false, message: "Error occurred while sending email" });
  }
});

export default router;
