import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

import { jwt_verification } from "../../config/config";

import { IVerification } from "../../interface/Verification";

const verificacionAuth = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({ message: "Token does not exists" })
    }

    const verification = jwt.verify(token, `${jwt_verification}`) as IVerification

    if (!verification) {
        return res.status(401).json({ message: "Token is not valid" })
    }

    req.verification = verification.id

    next()

}

export default verificacionAuth