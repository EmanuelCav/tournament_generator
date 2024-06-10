import { Request, Response } from "express";

import Event from '../models/event';
import Referee from '../models/referee';

import { generateMatchdays, shuffle } from "../helper/functions";

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
        } else if(category === "ELIMINATION") {
            matchdays = generateMatchdays(shuffleArr)
        } else if(category === "SWISS") {
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
        })

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}

export const addRefereeMatch = async (req: Request, res: Response): Promise<Response> => {

    const { eid, mid } = req.params
    const { name } = req.query

    try {

        const event = await Event.findById(eid)

        if(!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const referee = await Referee.findOne({ name })

        if(!referee) {
            return res.status(400).json({ message: "Referee does not exists" })
        }

        for (let i = 0; i < event.matchs.length; i++) {
            for (let j = 0; j < event.matchs[i].length; j++) {
                if (String(event.matchs[i][j]._id) === mid) {
                    event.matchs[i][j].referee = name as string;
                    break;
                  }              
                
            }
        }

        const showEvent = await Event.findByIdAndUpdate(eid, {
            $set: {
                matchs: event.matchs
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
        })

        return res.status(200).json(showEvent)
        
    } catch (error) {
        throw error
    }

}