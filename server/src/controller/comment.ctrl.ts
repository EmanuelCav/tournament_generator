import { Request, Response } from "express";

import Comment from '../models/comment'

export const createComment = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "createComment" })
        
    } catch (error) {
        throw error
    }

}

export const removeComment = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const comment = await Comment.findById(id)

        if(!comment) {
            return res.status(400).json({ message: "Comment does not exists" })
        }

        await Comment.findByIdAndDelete(id)

        return res.status(200).json({ message: "Comment removed successfully" })
        
    } catch (error) {
        throw error
    }

}