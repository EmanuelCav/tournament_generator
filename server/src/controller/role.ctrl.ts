import { Request, Response } from "express";

export const roles = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "roles" })
        
    } catch (error) {
        throw error
    }

}

export const createRole = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "createRole" })
        
    } catch (error) {
        throw error
    }

}

export const removeRole = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "removeRole" })
        
    } catch (error) {
        throw error
    }

}