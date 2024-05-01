import { Request, Response } from "express";

export const status = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "status" })
        
    } catch (error) {
        throw error
    }

}

export const createStatus = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "createStatus" })
        
    } catch (error) {
        throw error
    }

}

export const removeStatus = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "removeStatus" })
        
    } catch (error) {
        throw error
    }

}