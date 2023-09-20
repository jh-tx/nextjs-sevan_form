import nodemailer from "nodemailer"

const email = process.env.EMAIL
const pass = process.env.EMAIL_PW
console.log(email)
export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: email,
        pass,
    }
})

export const mailOptions = {
    from:email,
    to:email,

}