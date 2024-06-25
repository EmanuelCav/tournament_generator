import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

import { updatePasswordSchema } from '../schema/user.schema'

const updatePasswordValid = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        updatePasswordSchema.parse(req.body)

        if(req.body.password !== req.body.confirm) {
            return res.status(400).json({ message: "Passwords do not match" })
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

export default updatePasswordValid