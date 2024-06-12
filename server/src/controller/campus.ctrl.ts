import { Request, Response } from "express";

import Event from '../models/event';
import Campus from '../models/campus';
import Competitor from '../models/competitor';

import { privileged_role } from "../config/config";

export const createCampus = async (req: Request, res: Response): Promise<Response> => {

    const { cid } = req.params
    const { name } = req.body

    try {

        const user = await Competitor.findById(cid).populate("role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user.role.role !== `${privileged_role}`) {
            return res.status(401).json({ message: "You cannot create a campus" })
        }

        const event = await Event.findById(user.event)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const newCampus = new Campus({
            name,
            event: event._id
        })

        const campusSaved = await newCampus.save()

        await Event.findByIdAndUpdate(event._id, {
            $push: {
                campus: campusSaved._id
            }
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
            })

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}

export const removeCampus = async (req: Request, res: Response): Promise<Response> => {

    const { id, cid } = req.params

    try {

        const campus = await Campus.findById(id)

        if (!campus) {
            return res.status(400).json({ message: "Campus does not exists" })
        }

        const user = await Competitor.findById(cid).populate("role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user.role.role !== `${privileged_role}`) {
            return res.status(401).json({ message: "You cannot remove a campus" })
        }

        const event = await Event.findById(user.event)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        await Event.findByIdAndUpdate(event._id, {
            $pull: {
                campus: id
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
            })

        await Campus.findByIdAndDelete(id)

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}

export const updateCampus = async (req: Request, res: Response): Promise<Response> => {

    const { id, cid } = req.params
    const { name } = req.body

    try {

        const campus = await Campus.findById(id)

        if (!campus) {
            return res.status(400).json({ message: "Campus does not exists" })
        }

        const user = await Competitor.findById(cid).populate("role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        if (user.role.role !== `${privileged_role}`) {
            return res.status(401).json({ message: "You cannot update a campus" })
        }

        const event = await Event.findById(user.event)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        await Campus.findByIdAndUpdate(id, {
            name
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
            })

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}