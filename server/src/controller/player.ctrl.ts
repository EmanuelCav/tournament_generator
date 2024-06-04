import { Request, Response } from "express";

import Event from '../models/event';
import Team from '../models/team';
import Player from '../models/player';
import Competitor from '../models/competitor';

import { privileged_role } from "../config/config";

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

export const removePlayer = async (req: Request, res: Response): Promise<Response> => {

    const { pid, cid } = req.body

    try {

        const player = await Team.findById(pid)

        if (!player) {
            return res.status(400).json({ message: "Player does not exists" })
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

        await Player.findByIdAndUpdate(pid, {
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

        await Player.findByIdAndDelete(pid)

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}