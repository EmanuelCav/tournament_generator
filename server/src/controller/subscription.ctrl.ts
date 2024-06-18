import { Request, Response } from "express";

import Subscription from '../models/subscription'

export const subscriptions = async (req: Request, res: Response): Promise<Response> => {

    try {

        const subscriptions = await Subscription.find()

        return res.status(200).json(subscriptions)

    } catch (error) {
        throw error
    }

}

export const createSubscription = async (req: Request, res: Response): Promise<Response> => {

    const { subscription, price, hierarchy } = req.body

    try {

        const newSubscription = new Subscription({
            subscription,
            price,
            hierarchy
        })

        await newSubscription.save()

        return res.status(200).json({ message: "Subscription created successfully" })

    } catch (error) {
        throw error
    }

}

export const removeSubscription = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const subscription = await Subscription.findById(id)

        if (!subscription) {
            return res.status(400).json({ message: "Subscription does not exists" })
        }

        await Subscription.findByIdAndDelete(id)

        return res.status(200).json({ message: "Subscription removed successfully" })

    } catch (error) {
        throw error
    }

}

export const addDescriptionSubscription = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { description } = req.body

    try {

        if(!description) {
            return res.status(400).json({ message: "There are empty fields" })
        }

        const subscription = await Subscription.findById(id)

        if (!subscription) {
            return res.status(400).json({ message: "Subscription does not exists" })
        }

        await Subscription.findByIdAndUpdate(id, {
            $push: {
                descriptions: description
            }
        })

        return res.status(200).json({ message: "Description added successfully" })

    } catch (error) {
        throw error
    }

}