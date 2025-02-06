const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'khadtareharshal2002@gmail.com',
        pass: 'qifm fkcx ogdt yfbe',
    },
});

const mailOptions = {
    from: 'khadtareharshal2002@gmail.com',
    to: 'harshalgkhadatare@coep.sveri.ac.in',
    subject: 'Test Mail from Harshal',
    text: 'This is a test email sent using Nodemailer!',
    html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h2 style="color: #333;">Hello,</h2>
            <p style="font-size: 16px;">This is a test email sent using <strong>Nodemailer</strong>!</p>
            <p style="font-size: 14px; color: #555;">Thank you for using our service.</p>
            <hr>
            <p style="font-size: 12px; color: #777;">Best Regards,<br>Harshal</p>
        </div>
    `,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
