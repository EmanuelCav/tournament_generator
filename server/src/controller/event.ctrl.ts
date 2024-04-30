import { Request, Response } from "express";

export const events = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "events" })
        
    } catch (error) {
        throw error
    }

}

export const event = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "event" })
        
    } catch (error) {
        throw error
    }

}

export const createEvent = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "createEvent" })
        
    } catch (error) {
        throw error
    }

}

export const removeEvent = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "removeEvent" })
        
    } catch (error) {
        throw error
    }

}

export const updateEvent = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "updateEvent" })
        
    } catch (error) {
        throw error
    }

}