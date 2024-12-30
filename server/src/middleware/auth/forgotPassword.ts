import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

import { jwt_forgot_password } from "../../config/config";

import { IVerificationForgotPassword } from "../../interface/Verification";

const forgotPassword = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({ message: "Token does not exists" })
    }

    const verification = jwt.verify(token, `${jwt_forgot_password}`) as IVerificationForgotPassword

    if (!verification) {
        return res.status(401).json({ message: "Token is not valid" })
    }

    req.changePassword = verification.id
    req.code = verification.code

    next()

}

export default forgotPassword