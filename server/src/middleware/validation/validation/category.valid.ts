import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

import Category from '../../../models/category'

import { createCategorySchema } from '../schema/event.schema'

const categoryValid = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        createCategorySchema.parse(req.body)

        const category = await Category.findOne({ category: req.body.category })

        if(category) {
            return res.status(400).json({ message: "Category already exists. Try another." })
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

export default categoryValid