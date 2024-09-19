const nodemailer = require("nodemailer");
const sendmail = async (req, res) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lesley.feeney37@ethereal.email',
            pass: 'Zm8juNc3En2vGcU6ex'
        }
    });

    const info = await transporter.sendMail({
        from: '"Anas baloch 👻" <anas@gmail.email>', // sender address
        to: "anas.aptech1003@gmail.com, mr.baloch1003@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    res.json(info);
}

module.exports = sendmail;