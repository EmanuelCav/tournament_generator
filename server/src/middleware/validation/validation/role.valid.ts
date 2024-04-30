import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

import Role from '../../../models/role'

import { createRoleSchema } from '../schema/user.schema'

const roleValid = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        createRoleSchema.parse(req.body)

        const role = await Role.findOne({ role: req.body.role })

        if(role) {
            return res.status(400).json({ message: "Role already exists. Try another." })
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

export default roleValid