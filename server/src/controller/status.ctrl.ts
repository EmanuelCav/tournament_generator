import { Request, Response } from "express";

import Status from '../models/status'

import { welcomeMessage } from "../messages/messages";

export const status = async (req: Request, res: Response): Promise<Response> => {

    try {

        const status = await Status.find()

        return res.status(200).json(status)
        
    } catch (error) {
        throw error
    }

}

export const welcome = async (req: Request, res: Response): Promise<Response> => {

    try {

        await welcomeMessage()

        return res.status(200).json({ message: "Welcome" })
        
    } catch (error) {
        throw error
    }

}

export const createStatus = async (req: Request, res: Response): Promise<Response> => {

    const { status } = req.body

    try {

        const newStatus = new Status({
            status
        })

        await newStatus.save()

        return res.status(200).json({ message: "Status created successfully" })
        
    } catch (error) {
        throw error
    }

}

export const removeStatus = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const status = await Status.findById(id)

        if(!status) {
            return res.status(400).json({ message: "Status does not exists" })
        }

        await Status.findByIdAndDelete(id)

        return res.status(200).json({ message: "Status removed successfully" })
        
    } catch (error) {
        throw error
    }

}