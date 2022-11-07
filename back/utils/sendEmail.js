const nodemailer = require("nodemailer")

const sendEmail = async options => {
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
            user: "cacaosfarmacy@outlook.com",
            pass: "eveffuaaqpptpvjf"
        }
    });

    const msg = {
        from: "Cacaos Company <cacaosfarmacy@outlook.com>",
        to: options.email,
        subject: options.subject,
        text: options.msg
    }

    await transport.sendMail(msg);
}

module.exports = sendEmail;