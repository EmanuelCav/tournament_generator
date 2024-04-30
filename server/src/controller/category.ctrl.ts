import { Request, Response } from "express";

export const categories = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "categories" })
        
    } catch (error) {
        throw error
    }

}

export const createCategory = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "createCategory" })
        
    } catch (error) {
        throw error
    }

}

export const removeCategory = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "removeCategory" })
        
    } catch (error) {
        throw error
    }

}