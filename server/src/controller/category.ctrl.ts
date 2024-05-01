import { Request, Response } from "express";

import Category from '../models/category'

export const categories = async (req: Request, res: Response): Promise<Response> => {

    try {

        const categories = await Category.find()

        return res.status(200).json(categories)

    } catch (error) {
        throw error
    }

}

export const createCategory = async (req: Request, res: Response): Promise<Response> => {

    const { category } = req.body

    try {

        const newCategory = new Category({
            category
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