import { Request, Response } from "express";

import Event from '../models/event'

import { EVENTS } from "../helper/mocks";

export const events = async (req: Request, res: Response): Promise<Response> => {

    try {

        const events = await Event.find()

        return res.status(200).json(EVENTS)
        
    } catch (error) {
        throw error
    }

}

export const event = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        // const event = await Event.findById(id)
        const event = EVENTS[0]
        

        if(!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        return res.status(200).json(event)
        
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

    const { id } = req.params

    try {

        const event = await Event.findById(id)

        if(!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        await Event.findByIdAndDelete(id)

        return res.status(200).json({ message: "Event removed successfully" })
        
    } catch (error) {
        throw error
    }

}

export const updateEvent = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const event = await Event.findById(id)

        if(!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        return res.status(200).json({ message: "updateEvent" })
        
    } catch (error) {
        throw error
    }

} 