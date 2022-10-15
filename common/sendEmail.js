const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "foodforallplatform@gmail.com",
    pass: "loqwplnxvfonmfyi",
  },
});
var transporter2 = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "foodforallplatform@gmail.com",
    pass: "loqwplnxvfonmfyi",
  },
});

var transporter3 = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "foodforallplatform@gmail.com",
    pass: "loqwplnxvfonmfyi",
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: "express-handlebars",
    viewPath: "./common/views/",
  })
);
transporter2.use(
  "compile",
  hbs({
    viewEngine: "express-handlebars",
    viewPath: "./common/views/accepted",
  })
);
transporter3.use(
  "compile",
  hbs({
    viewEngine: "express-handlebars",
    viewPath: "./common/views/rejected",
  })
);
function sendEmail(email, text) {
  var mailOptions = {
    from: "foodforallplatform@gmail.com",
    to: email,
    subject: "Food for all ",
    text: `${text}`,
    template: "index",
    context: {
      name: text,
    },
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
function sendAcceptedEmail(email, text) {
  var mailOptions = {
    from: "foodforallplatform@gmail.com",
    to: email,
    subject: "Your request has been accepted",
    text: `${text}`,
    template: "index",
    context: {
      name: text,
    },
  };
  transporter2.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

function sendRejectedEmail(email, text) {
  var mailOptions = {
    from: "foodforallplatform@gmail.com",
    to: email,
    subject: "Your request has been rejected",
    text: `${text}`,
    template: "index",
    context: {
      name: text,
    },
  };
  transporter3.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = {
  sendEmail,
  sendAcceptedEmail,
  sendRejectedEmail,
};
