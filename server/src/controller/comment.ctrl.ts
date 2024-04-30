import { Request, Response } from "express";

export const createComment = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "createComment" })
        
    } catch (error) {
        throw error
    }

}

export const removeComment = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "removeComment" })
        
    } catch (error) {
        throw error
    }

}