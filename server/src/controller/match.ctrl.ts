import { Request, Response } from "express";

import Event from '../models/event';

import { generateMatchdays, shuffle } from "../helper/functions";

import { IMatch } from "interface/Event";

export const generateMatch = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { category } = req.query

    try {

        const event = await Event.findById(id).populate({
            path: "teams",
            populate: {
                path: "logo",
                select: "image"
            }
        })

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        if (String(event.admin) !== req.user) {
            return res.status(400).json({ message: "You cannot generate matchs" })
        }

        const shuffleArr = shuffle(event.teams)

        let matchdays;
        
        if(category === "MATCHDAYS") {
            matchdays = generateMatchdays(shuffleArr)
        } else if(category === "MATCHDAYS") {
            matchdays = generateMatchdays(shuffleArr)
        } else if(category === "MATCHDAYS") {
            matchdays = generateMatchdays(shuffleArr)
        } else {
            matchdays = generateMatchdays(shuffleArr)
        }

        const showEvent = await Event.findByIdAndUpdate(id, {
            $set: {
                matchs: matchdays
            }
        }, {
            new: true
        }).populate({
            path: "teams",
            populate: [{
                path: "logo",
                select: "image"
            }, {
                path: "players"
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
        })

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}