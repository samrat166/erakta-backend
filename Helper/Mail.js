const nodemailer = require("nodemailer");

const sendMail = (email, bloodGroup, status) => {
  console.log(email, bloodGroup);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "samratojha16@gmail.com",
      pass: "gmuuwfbobhtizmxc",
    },
  });

  var mailOptions = {
    from: "samratojha16@gmail.com",
    to: email,
    subject: "ERakta Nepal || Response to Blood Request",
    html: `
    <html>
      <head>
        <style>
          h1 {
            font-size: 30px;
            text-align: center;
            font-weight: bold;
          }

          h2 {
            font-size: 20px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <h1>Blood Request Response</h1>
        <h2>Your Blood request Of ${bloodGroup} ${
      status === "accepted" ? "has been Accepted." : "has been Rejected."
    }</h2>
        <h2>Please Contact Us For More Information.</h2>
      </body>
    </html>
  `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendMail };
