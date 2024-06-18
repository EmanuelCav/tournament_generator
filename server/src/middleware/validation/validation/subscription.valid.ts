import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

import Subscription from '../../../models/subscription'

import { createSubscriptionSchema } from '../schema/user.schema'

const subscriptionValid = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        createSubscriptionSchema.parse(req.body)

        const subscription = await Subscription.findOne({ subscription: req.body.subscription })

        if(subscription) {
            return res.status(400).json({ message: "Subscription already exists. Try another." })
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

export default subscriptionValid