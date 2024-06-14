import { Request, Response } from "express";

import Event from '../models/event';
import Team from '../models/team';
import Player from '../models/player';
import Competitor from '../models/competitor';

import { privileged_role } from "../config/config";

import { IPlayer } from "../interface/User";

export const players = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { order } = req.query

    try {

        const event = await Event.findById(id).populate({
            path: "teams",
            populate: {
                path: "players",
                populate: {
                    path: "team",
                    select: "logo",
                    populate: {
                        path: "logo",
                        select: "image"
                    }
                }
            }
        })

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        let playersEvent: IPlayer[] = []

        for (let i = 0; i < event.teams.length; i++) {
            for (let j = 0; j < event.teams[i].players.length; j++) {
                playersEvent.push(event.teams[i].players[j])
            }
        }    

        playersEvent.sort((a, b) => {
            if (String(order) === "points") return b.points - a.points
            if (String(order) === "assists") return b.assists - a.assists
            if (String(order) === "cards") return b.cards - a.cards

            return b.serialCards - a.serialCards
        })
            
        return res.status(200).json(playersEvent)

    } catch (error) {
        throw error
    }

}

export const createPlayer = async (req: Request, res: Response): Promise<Response> => {

    const { tid, cid } = req.params
    const { name, position } = req.body

    try {

        const team = await Team.findById(tid)

        if (!team) {
            return res.status(400).json({ message: "Team does not exists" })
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

        const newPlayer = new Player({
            name,
            position,
            team: team._id
        })

        const playerSaved = await newPlayer.save()

        await Team.findByIdAndUpdate(tid, {
            $push: {
                players: playerSaved._id
            }
        }, {
            new: true
        })

        const showEvent = await Event.findById(user.event).populate({
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
        }).populate("category")
            .populate("status")
            .populate({
                path: "campus",
                select: "name"
            }).populate({
                path: "image",
                select: "image"
            })

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}

export const removePlayer = async (req: Request, res: Response): Promise<Response> => {

    const { pid, cid } = req.params

    try {

        const player = await Player.findById(pid)

        if (!player) {
            return res.status(400).json({ message: "Player does not exists" })
        }

        const user = await Competitor.findById(cid).populate("role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user.role.role !== `${privileged_role}`) {
            return res.status(401).json({ message: "You cannot remove a player" })
        }

        const event = await Event.findById(user.event)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const team = await Team.findById(player.team)

        if (!team) {
            return res.status(400).json({ message: "Team does not exists" })
        }

        await Team.findByIdAndUpdate(player.team, {
            $pull: {
                players: pid
            }
        }, {
            new: true
        })

        const showEvent = await Event.findById(user.event).populate({
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
        }).populate("category")
            .populate("status")
            .populate({
                path: "campus",
                select: "name"
            }).populate({
                path: "image",
                select: "image"
            })

        await Player.findByIdAndDelete(pid)

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}

export const updatePlayer = async (req: Request, res: Response): Promise<Response> => {

    const { pid, cid } = req.params
    const { name, position } = req.body

    try {

        const player = await Player.findById(pid)

        if (!player) {
            return res.status(400).json({ message: "Player does not exists" })
        }

        const user = await Competitor.findById(cid).populate("role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user.role.role !== `${privileged_role}`) {
            return res.status(401).json({ message: "You cannot update a player" })
        }

        const event = await Event.findById(user.event)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        await Player.findByIdAndUpdate(pid, {
            name,
            position
        }, {
            new: true
        })

        const showEvent = await Event.findById(user.event).populate({
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
        }).populate("category")
            .populate("status")
            .populate({
                path: "campus",
                select: "name"
            }).populate({
                path: "image",
                select: "image"
            })

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}

export const updatePlayerData = async (req: Request, res: Response): Promise<Response> => {

    const { pid, cid } = req.params
    const { points, assists, cards, serialCards } = req.body

    try {

        const player = await Player.findById(pid)

        if (!player) {
            return res.status(400).json({ message: "Player does not exists" })
        }

        const user = await Competitor.findById(cid).populate("role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user.role.role !== `${privileged_role}`) {
            return res.status(401).json({ message: "You cannot update a player" })
        }

        const event = await Event.findById(user.event)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        await Player.findByIdAndUpdate(pid, {
            points,
            assists,
            cards,
            serialCards
        }, {
            new: true
        })

        const showEvent = await Event.findById(event._id).populate({
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
        }).populate("category")
            .populate("status")
            .populate({
                path: "campus",
                select: "name"
            }).populate({
                path: "image",
                select: "image"
            })

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}