// Import the required libraries
const sgMail = require('@sendgrid/mail');

// Configure SendGrid API key
sgMail.setApiKey("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");

// Create a function to send the email
const sendEmailforSender = async (to, subject = "reply", body) => {
  const msg = {
    to,
    from: 'rishabh.kumbh@gmail.com', // Set your email as the sender
    subject,
    html: body
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmailforSender;
