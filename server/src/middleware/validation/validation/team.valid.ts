import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

import { createTeamSchema } from '../schema/event.schema'

const teamValid = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        createTeamSchema.parse(req.body)
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

export default teamValid