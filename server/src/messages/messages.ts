import nodemailer from 'nodemailer';

import { my_host, my_mail, my_pass, origin_client, origin_dev } from '../config/config'

const transport = nodemailer.createTransport({
    host: my_host,
    port: 587,
    secure: false,
    auth: {
        user: my_mail,
        pass: my_pass
    },
    tls: {
        rejectUnauthorized: false
    }
})

export const infoEmail = async (email: string) => {

    try {

        await transport.sendMail({
            from: `'EMAILS' ${my_mail}`,
            to: email,
            subject: "CupCraft - Confirm authentication",
            html: `
                <h1 style="color: #33cc33; font-size: 34px; font-weight: 600;">Welcome to CupCraft</h1>
                <p style="font-size: 24px;">The boost your event needs</p>
                <img src="https://res.cloudinary.com/ddfm1znoo/image/upload/v1717421190/_715ec024-a870-44b1-9553-5499482553f9_ahgxhu.jpg" alt="surfrage_icon" style="width: 215px; height: 215px">
                <a href="${process.env.NODE_ENV === "production" ? origin_client : origin_dev}" style="text-decoration: none; cursor: pointer;">
                    <button style="margin-top: 20px; width: 245px; border-radius: 8px; background-color: #33cc33; outline: none; padding: 7px; border: none; font-size: 24px; color: #fff;">
                        Confirm account
                    </button>
                </a>
            `
        })

    } catch (error) {
        throw (error)
    }

}

export const infoEmailPassword = async (email: string, code: string) => {

    try {

        await transport.sendMail({
            from: `'EMAILS' ${my_mail}`,
            to: email,
            subject: "CupCraft - Reset password: El código para cambiar la contraseña es " + code,
            html: "El código para cambiar la contraseña es " + code,
        })

    } catch (error) {
        throw (error)
    }

}