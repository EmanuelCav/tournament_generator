import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

import { jwt_user } from "../../config/config";

import { IVerification } from "interface/Verification";

const permission = (req: Request, res: Response, next: NextFunction) => {

    let token = req.headers.authorization?.split(" ")[1]
    
    if(token === 'undefined') {
        token = undefined
        req.permission = token
        next()
        return
    }
    
    const verification = jwt.verify(token!, `${jwt_user}`) as IVerification

    if (!verification) {
        return res.status(401).json({
            message: "Token is not valid"
        })
    }

    req.permission = verification.id

    next()

}

export default permission