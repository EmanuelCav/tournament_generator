import { Request, Response } from "express";

import Event from '../models/event';
import Referee from '../models/referee';
import Competitor from '../models/competitor';

import { privileged_role } from "../config/config";

export const createReferee = async (req: Request, res: Response): Promise<Response> => {

    const { cid } = req.params
    const { name } = req.body

    try {

        const user = await Competitor.findById(cid).populate("role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user.role.role !== `${privileged_role}`) {
            return res.status(401).json({ message: "You cannot create a player" })
        }

        const event = await Event.findById(user.event)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const newReferee = new Referee({
            name,
            event: event._id
        })

        const refereeSaved = await newReferee.save()

        const showEvent = await Event.findByIdAndUpdate(event._id, {
            $push: {
                referees: refereeSaved._id
            }
        }, {
            new: true
        }).populate({
            path: "teams",
            populate: {
                path: "logo",
                select: "image"
            }
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
        })

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}

export const removeReferee = async (req: Request, res: Response): Promise<Response> => {

    const { rid, cid } = req.body

    try {

        const referee = await Referee.findById(rid)

        if(!referee) {
            return res.status(400).json({ message: "Referee does not exists" })
        }

        const user = await Competitor.findById(cid).populate("role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user.role.role !== `${privileged_role}`) {
            return res.status(401).json({ message: "You cannot create a player" })
        }

        const event = await Event.findById(user.event)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const showEvent = await Event.findByIdAndUpdate(event._id, {
            $pull: {
                referees: rid
            }
        }, {
            new: true
        }).populate({
            path: "teams",
            populate: {
                path: "logo",
                select: "image"
            }
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
        })

        await Referee.findByIdAndDelete(rid)

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}