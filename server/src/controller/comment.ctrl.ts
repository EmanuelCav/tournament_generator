import { Request, Response } from "express";

import Comment from '../models/comment'
import Event from '../models/event'

export const createComment = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { comment } = req.body

    try {

        if (!comment) {
            return res.status(400).json({ message: "Comment field is empty" })
        }

        const event = await Event.findById(id)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const newComment = new Comment({
            comment,
            user: req.user,
            event: event._id
        })

        const commentSaved = await newComment.save()

        const eventUpdated = await Event.findByIdAndUpdate(id, {
            $push: {
                comments: commentSaved._id
            }
        }, {
            new: true
        }).populate({
            path: "teams",
            populate: [{
                path: "logo",
                select: "image"
            }, {
                path: "players",
                
            }, {
                path: "competitors",
                populate: {
                    path: "user",
                    select: "nickname"
                }
            }]
        }).populate({
            path: "competitors",
            populate: [{
                path: "user",
                select: "nickname"
            }, {
                path: "role",
            }]
        }).populate({
            path: "referees",
            select: "name"
        }).populate("category")
            .populate("status")
            .populate({
                path: "campus",
                select: "name"
            }).populate({
                path: "image",
                select: "image"
            }).populate({
                path: "comments",
                select: "user comment",
                populate: {
                    path: "user",
                    select: "nickname"
                }
            })

        return res.status(200).json(eventUpdated)

    } catch (error) {
        throw error
    }

}