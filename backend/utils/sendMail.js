require("dotenv").config();
const nodeMailer = require("nodemailer");
const { convert } = require("html-to-text");

exports.sendMail = (payload) => {
  return new Promise((resolve, reject) => {
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.gmailUser,
        pass: process.env.gmailPass,
      },

      tls: {
        rejectUnauthorized: false, // Add this line
      },
    });
    const text = convert(payload.html, { wordwrap: 130 });
    const emailFrom =
      payload.from !== undefined ? payload.from : process.env.gmailUser;
    const emailTo =
      payload.to !== undefined ? payload.to : process.env.gmailUser;
    const mailOptions = {
      from: emailFrom,
      to: emailTo,
      subject: payload.subject,
      text: payload.html,
      html: payload.html,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      }
      resolve(info?.response);
    });
  });
};

exports.successEmail = (email, amount) => {
  return {
    to: email,
    subject: "Thank You for Your Donation! Transaction Successful",
    html: `
    Dear ${email},

    We are thrilled to inform you that your donation of ${amount} to Mmust Ihub has been successfully processed.

    If you have any questions about your donation, please don't hesitate to contact us at ihub@mmust.ac.ke .

    Thank you once again for your kindness and generosity.

    Warm regards,
    Mmust Ihub
    `,
  };
};

exports.failureEmail = (email, amount) => {
  return {
    to: email,
    subject: "Payment Issue: Your Donation Was Not Successful",
    html: `
    Dear ${email},

    We regret to inform you that your recent attempt to donate ${amount} to Mmust Ihub was not successful.

    Unfortunately, we were unable to process your transaction. We apologize for any inconvenience this may have caused.

    Please try again by visiting our donation page <a href="ihub.mmust.ac.ke/donation">donation</a>, or feel free to contact us at ihub.mmust.ac.ke if you need assistance.

    Your support is vital to our mission, and we appreciate your willingness to give. We hope to successfully process your donation soon.

    Thank you for your understanding.

    Best regards,
    Mmust Ihub
    `,
  };
};

exports.contactMail = (data) => {
  return {
    from: data.email,
    subject: "Mmust Ihub Users Contact",
    html: `
    Name: ${data.name+"\n\n"}
    Email: ${data.email+"\n"}
    PhoneNumber: ${data.phone_number+"\n\n"}
    Message: ${data.message}
    `,
  };
};
