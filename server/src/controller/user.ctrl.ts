import { Request, Response } from "express";

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "users" })
        
    } catch (error) {
        throw error
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "login" })
        
    } catch (error) {
        throw error
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "register" })
        
    } catch (error) {
        throw error
    }

}

export const removeUser = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "removeUser" })
        
    } catch (error) {
        throw error
    }

}