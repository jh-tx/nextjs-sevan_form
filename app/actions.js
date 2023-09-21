'use server'

import { revalidatePath } from "next/cache.js"
import {mailOptions, transporter} from "./nodemailer.js"
import { redirect } from 'next/navigation'

const CONTACT_MESSAGE_FIELDS = {
    first: "First Name:",
    last: 'Last Name:',
    company: 'Company Name:',
    phone: 'Phone Number:',
    email: 'Email:',
    scanning: 'Laser Scanning:',
    drone: 'Drone Survey:',
    building: 'Facility Condition Assessments:',
    cad: "2D-Asbuilt:",
    revit: "3D-Asbuilt:",
    tour: "Virtual Tour:",
    sites: "Number of Sites:",
    project: "Project Description:",
    text: '',
    html: ''
}

const generateEmailContent = (data) => {
    const arr = Array.from(data.entries())
    const slicedArr = arr.slice(1)
    const stringData = slicedArr.reduce((string, [key, val]) => {
         return string += `${CONTACT_MESSAGE_FIELDS[key]}: ${val} \n \n`
 },"")
    const htmlData = slicedArr.reduce((string, [key, val]) => {
        if (val === 'on'){
            return string += `<p align="center" style="font-weight: bold; color: rgb(33, 64, 154);">${CONTACT_MESSAGE_FIELDS[key]} <p align="center" style="color: rgb(88, 186, 91);">This option was selected.</p></p>`
        }
        return string += `<p align="center" style="font-weight: bold; color: rgb(33, 64, 154);">${CONTACT_MESSAGE_FIELDS[key]} <p align="center" style="color: rgb(88, 186, 91);">${val}</p></p>`
 },"")
    return {
        text: stringData,
        html: `<!DOCTYPE html><html><body style="width:30%;"><h1 style="text-align: center;">Survey Service Inquiry</h1><div style="border-style:dashed;border:2px solid; background-color: rgb(209, 211, 212, 20%);">${htmlData}</div></body></html>`,
    }
}

export async function create(formData) {
    generateEmailContent(formData)
    await transporter.sendMail({
    ...mailOptions,
    ...generateEmailContent(formData),
    subject: "Survey Service Inquiry",
})
redirect('/confirmation');
}

