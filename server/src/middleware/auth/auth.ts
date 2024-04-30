import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

import { jwt_user } from "../../config/config";

import { IVerification } from "../../interface/Verification";

const auth = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({ message: "Token does not exists" })
    }

    const verification = jwt.verify(token, `${jwt_user}`) as IVerification

    if (!verification) {
        return res.status(401).json({ message: "Token is not valid" })
    }

    req.user = verification.id

    next()

}

export default auth