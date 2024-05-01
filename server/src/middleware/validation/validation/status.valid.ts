import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

import Status from '../../../models/status'

import { createStatusSchema } from '../schema/event.schema'

const statusValid = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        createStatusSchema.parse(req.body)

        const status = await Status.findOne({ status: req.body.status })

        if(status) {
            return res.status(400).json({ message: "Status already exists. Try another." })
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

export default statusValid