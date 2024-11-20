const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3008; // or any available port

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening on port`);

});

app.use(express.json()); // Parse incoming JSON data

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body; // Extract data from request

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP host
    port: 587, // Replace with your SMTP port
    secure: true, // Adjust based on your SMTP server settings
    auth: {
      user: 'sanskargupta57@gmail.com', // Replace with your email address
      pass: '' // Replace with your email password
    }
  });

  const   
 mailOptions = {
    from: 'Your Name <sanskargupta57@gmail.com>', // Replace with your name and email
    to: 'sanskargupta57@gmail.com', // Replace with your email address
    subject: 'Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send({   
 message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send({   
 message: 'Email sent successfully!' });
    }
  });
});

app.listen(port, () => 
  console.log(`Server listening on port ${port}`));