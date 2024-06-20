import { Request, Response } from "express";

import Category from '../models/category'
import Subscription from '../models/subscription'
import User from '../models/user'

export const categories = async (req: Request, res: Response): Promise<Response> => {

    try {

        const user = await User.findById(req.user).populate("subscription")

        if(!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const categories = await Category.find().populate("subscription")

        return res.status(200).json(categories.filter(c => c.subscription.hierarchy <= user.subscription.hierarchy))

    } catch (error) {
        throw error
    }

}

export const createCategory = async (req: Request, res: Response): Promise<Response> => {

    const { category, subscription } = req.body

    try {

        const subscriptionCategory = await Subscription.findOne({ subscription })

        if(!subscriptionCategory) {
            return res.status(400).json({ message: "Subscription does not exists" })
        }

        const newCategory = new Category({
            category,
            subscription: subscriptionCategory._id
        })

        await newCategory.save()

        return res.status(200).json({ message: "Category created successfully" })

    } catch (error) {
        throw error
    }

}

export const removeCategory = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const category = await Category.findById(id)

        if (!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        await Category.findByIdAndDelete(id)

        return res.status(200).json({ message: "Category removed successfully" })

    } catch (error) {
        throw error
    }

}