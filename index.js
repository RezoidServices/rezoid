// const express = require("express");
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const Mailgen = require('mailgen');

// const app = express();
// const cors = require('cors');

// app.use(cors());
// app.use(bodyParser.json());

// // POST
// app.post("/send/mail", async (req, res) => {
//   try {
//     const { EMAIL, PASSWORD } = process.env; 

//     console.log("msg", req.body);

//     let config = {
//       service: "gmail",
//       auth: {
//         user: EMAIL,
//         pass: PASSWORD
//       }
//     };

//     let transporter = nodemailer.createTransport(config);

//     let mailGenerator = new Mailgen({
//       theme: "default",
//       product: {
//         name: 'mailgen',
//         link: 'https://mailgen.js/'
//       }
//     });


//     let response = {
//       body: {
//         name: "User",
//         intro: "Welcome! You are successfully registered"
//       }
//     };

//     let mail = mailGenerator.generate(response);

//     let message = {
//       from: EMAIL,
//       to: "rezoidservice@gmail.com",
//       subject: 'Welcome! You are successfully registered',
//       html: mail
//     };

//     transporter.sendMail(message).then(() => {
//       return res.status(200).json({ message: "Mail sent!" });
//     });
//   } catch (error) {
//     console.error("Error sending mail:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });
 
// app.listen(5000, () => {
//   console.log("The server is listening on port 5000");
// });
