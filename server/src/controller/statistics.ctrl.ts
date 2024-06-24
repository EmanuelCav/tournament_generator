import { Request, Response } from "express";

import Event from '../models/event';
import Statistic from '../models/statistic';
import Player from '../models/player';
import Competitor from '../models/competitor';

import { privileged_role } from "../config/config";
import { IPlayer } from "interface/Event";

export const createStatistics = async (req: Request, res: Response): Promise<Response> => {

    const { eid, cid } = req.params
    const { name } = req.body

    try {

        const user = await Competitor.findById(cid).populate("role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user.role.role !== `${privileged_role}`) {
            return res.status(401).json({ message: "You cannot create a player" })
        }

        const event = await Event.findById(eid)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const newStatistic = new Statistic({
            event: event._id,
            name
        })

        const statisticSaved = await newStatistic.save()

        await Player.updateMany({
            event: event._id
        }, {
            $push: {
                statistics: statisticSaved._id
            }
        })

        const showEvent = await Event.findById(eid).populate({
            path: "teams",
            populate: {
                path: "players",
                populate: [{
                    path: "team",
                    select: "logo",
                    populate: {
                        path: "logo",
                        select: "image"
                    }
                }, {
                    path: "statistics"
                }]
            }
        })

        if (!showEvent) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        let playersEvent: IPlayer[] = []

        for (let i = 0; i < showEvent.teams.length; i++) {
            for (let j = 0; j < showEvent.teams[i].players.length; j++) {
                playersEvent.push(showEvent.teams[i].players[j])
            }
        }

        return res.status(200).json(playersEvent)

    } catch (error) {
        throw error
    }

}

export const removeStatistics = async (req: Request, res: Response): Promise<Response> => {

    const { sid, cid } = req.params

    try {

        const statistic = await Statistic.findById(sid)

        if (!statistic) {
            return res.status(400).json({ message: "Statistic does not exists" })
        }

        const user = await Competitor.findById(cid).populate("role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user.role.role !== `${privileged_role}`) {
            return res.status(401).json({ message: "You cannot remove a referee" })
        }

        const event = await Event.findById(user.event)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        await Player.updateMany({ event: event._id }, {
            $pull: {
                statistics: sid
            }
        })

        const showEvent = await Event.findById(event._id).populate({
            path: "teams",
            populate: {
                path: "players",
                populate: [{
                    path: "team",
                    select: "logo",
                    populate: {
                        path: "logo",
                        select: "image"
                    }
                }, {
                    path: "statistics"
                }]
            }
        })

        if (!showEvent) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        let playersEvent: IPlayer[] = []

        for (let i = 0; i < showEvent.teams.length; i++) {
            for (let j = 0; j < showEvent.teams[i].players.length; j++) {
                playersEvent.push(showEvent.teams[i].players[j])
            }
        }

        await Statistic.findByIdAndDelete(sid)

        return res.status(200).json(playersEvent)

    } catch (error) {
        throw error
    }

}

export const updateStatistics = async (req: Request, res: Response): Promise<Response> => {

    const { sid, cid } = req.params
    const { name } = req.body

    try {

        const statistic = await Statistic.findById(sid)

        if (!statistic) {
            return res.status(400).json({ message: "Statistic does not exists" })
        }

        const user = await Competitor.findById(cid).populate("role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user.role.role !== `${privileged_role}`) {
            return res.status(401).json({ message: "You cannot update a referee" })
        }

        const event = await Event.findById(user.event)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        await Statistic.findByIdAndUpdate(sid, {
            name
        }, {
            new: true
        })

        const showEvent = await Event.findById(event._id).populate({
            path: "teams",
            populate: {
                path: "players",
                populate: [{
                    path: "team",
                    select: "logo",
                    populate: {
                        path: "logo",
                        select: "image"
                    }
                }, {
                    path: "statistics"
                }]
            }
        })

        if (!showEvent) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        let playersEvent: IPlayer[] = []

        for (let i = 0; i < showEvent.teams.length; i++) {
            for (let j = 0; j < showEvent.teams[i].players.length; j++) {
                playersEvent.push(showEvent.teams[i].players[j])
            }
        }

        return res.status(200).json(playersEvent)

    } catch (error) {
        throw error
    }

}