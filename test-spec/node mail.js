var nodemailer = require("../node_modules/nodemailer");

var transport = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
        user: "lets.automate2017@gmail.com",
        pass: "Opaqnetworks!@#"
    }
});

console.log("SMTP Configured");

var mailOptions = {
    from: 'lets.automate2017@gmail.com', // sender address
    to: 'mrajesh.naidu2003@gmail.com', // list of receivers
    subject: 'Report for Test Result', // Subject line
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {
            'filename': 'index.html',
            'filePath': './test-results/target/site/allure-maven-plugin/',
        }

    ]
};
transport.sendMail(mailOptions, function (error, response) {
    if (error) {
        console.log(error);
    } else {
        console.log("Message sent: " + response.message);
    }

});
