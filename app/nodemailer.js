import nodemailer from "nodemailer"

const email = 'sevantest7@gmail.com'
const pass = 'uipfqcjjcpbaikuw'

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