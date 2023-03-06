const express = require("express");
const router = express.Router();
require("dotenv").config();

const sendgrid = require("@sendgrid/mail");

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/email", async (req, res) => {
  const msg = {

    to: ["prohammer1@gmail.com"],
    from: {
      name: "Email from tjprohammer.us",
      email: "tj@tjprohammer.us"
    }, // Use the email address or domain you verified above
    email: `${req.body.email}`,
    subject: `${req.body.subject}`,
    text: `${req.body.email} ${req.body.text}`,
  };
  try {
    await sendgrid.send(msg);
    res.json({ message: `Email has been sent` });
    console.log("Email Sent")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email failed to send" });
    if (error.res) {
      console.error(error.res.body);
    }
  }
});

module.exports = router;