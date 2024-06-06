import { Request, Response } from "express";

import Event from '../models/event';

import { shuffle } from "../helper/functions";

import { IMatch } from "interface/Event";

export const generateMatch = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

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

        let matchdays: IMatch[][] = []

        for (let i = 0; i < shuffleArr.length - 1; i++) {

            let matchs: IMatch[] = []

            for (let j = 0; j < shuffleArr.length / 2; j++) {
                matchs.push({
                    local: {
                        name: shuffleArr[j].name,
                        logo: shuffleArr[j].logo.image
                    },
                    targetLocal: 0,
                    visitant: {
                        name: shuffleArr[shuffleArr.length - 1 - j].name,
                        logo: shuffleArr[shuffleArr.length - 1 - j].logo.image
                    },
                    targetVisitant: 0
                })
            }

            matchdays.push(matchs)

            const element = shuffleArr.pop()
            shuffleArr.splice(1, 0, element)
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