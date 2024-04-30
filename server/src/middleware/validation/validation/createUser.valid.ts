import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

import User from '../../../models/user'

import { createUserSchema } from '../schema/user.schema'

const createUserValid = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        createUserSchema.parse(req.body)

        const email = await User.findOne({ email: req.body.email })

        if(email) {
            return res.status(400).json({ message: "Email already exists. Try another." })
        }

        const nickname = await User.findOne({ nickname: req.body.nickname })

        if(nickname) {
            return res.status(400).json({ message: "Nickname already exists. Try another." })
        }

        if(req.body.password !== req.body.confirm) {
            return res.status(400).json({ message: "Passwords do not match." })
        }

        next()

    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.issues.map((issue) => ({
                message: issue.message,
                path: issue.path
            })))
        }
        return res.status(500).json({ message: "Error to connect server" })
    }

}

export default createUserValid