import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

import { updateScoreSchema } from '../schema/event.schema'

const updateScoreValid = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        
        updateScoreSchema.parse(req.body)
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

export default updateScoreValid