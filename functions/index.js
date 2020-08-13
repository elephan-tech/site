const functions = require('firebase-functions');
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

let transporter = nodemailer.createTransport({
  host: "us2.smtp.mailhostbox.com",
  port: 587,
  secure: false,
  auth: {
    user: "team@elephan.tech",
    pass: "ZDOEHOFjK9",
  },
});

exports.sendMail = functions.https.onRequest((req, res) => cors(req, res, () => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
  res.set('Access-Control-Allow-Headers', '*')

  if (req.method === 'OPTIONS') res.end()

  cors(req, res, () => {
    if (req.method !== 'POST') return;

    const email = req.query.email;
    const name = req.query.name;
    const text = req.query.message;

    console.log({ email, name, text })

    const html = `           
      <div>             
        From:` + name + `<br /><br />              
        Email: ` + email + `<br /><br />             
        Message:` + text + `<br /><br />           
      </div>           
  `
    const mailOptions = {
      from: "elephan.tech <team@elephan.tech>",
      to: "team@elephan.tech",
      subject: "NEW Contact 📫",
      text,
      html,
    };

    return transporter.sendMail(mailOptions).then(() => {
      console.log('New email sent to:', gmailEmail)
      res.status(200).send({
        isEmailSend: true,
        message: 'Message sent!',
        response: 200
      })
      return
    })
  })
}));

