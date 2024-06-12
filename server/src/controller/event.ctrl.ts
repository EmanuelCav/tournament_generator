import { Request, Response } from "express";
import { unlink } from 'fs-extra'

import Event from '../models/event'
import Category from '../models/category'
import Status from '../models/status'
import Image from '../models/image'
import Competitor from '../models/competitor'
import Role from '../models/role'

import { image_default_id, default_role, privileged_role } from "../config/config";

import { EVENTS } from "../helper/mocks";
import { cloud } from "../helper/cloud";
import { generateId } from "../helper/encrypt";

export const events = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showEvents = await Event.find({
            admin: {
                $nin: [req.permission]
            }
        }).populate({
            path: "competitors",
            select: "user",
            populate: {
                path: "user",
                select: "nickname"
            }
        })

        return res.status(200).json(showEvents)

    } catch (error) {
        throw error
    }

}

export const userEvents = async (req: Request, res: Response): Promise<Response> => {

    try {

        const events = await Event.find()
            .populate({
                path: "competitors",
                select: "user",
                populate: {
                    path: "user",
                    select: "nickname"
                }
            })

        const showEvents = events.filter(e => e.competitors.find(c => String(c.user._id) === req.user))

        return res.status(200).json(showEvents)

    } catch (error) {
        throw error
    }

}

export const event = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const event = await Event.findById(id).populate({
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

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        return res.status(200).json(event)

    } catch (error) {
        throw error
    }

}

export const createEvent = async (req: Request, res: Response): Promise<Response> => {

    const { event, description, category, status, qualifiers, amount } = req.body

    try {

        const categoryEvent = await Category.findOne({ category })

        if (!categoryEvent) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        if (categoryEvent.category === "GROUP STAGE") {
            if (Number(qualifiers) === 0 || Number(amount) === 0) {
                return res.status(400).json({ message: "Qualifiers or amount of groups cannot be 0" })
            }

            if (Number(qualifiers) > Number(amount)) {
                return res.status(400).json({ message: "Qualifiers cannot be higher than amount of groups" })
            }
        }

        const statusEvent = await Status.findOne({ status })

        if (!statusEvent) {
            return res.status(400).json({ message: "Status does not exists" })
        }

        let image

        if (req.file) {

            const result = await cloud.uploader.upload(req.file.path)

            await unlink(req.file.path)

            const newImage = new Image({
                image: result.url,
                imageId: result.public_id
            })

            image = await newImage.save()

        } else {

            image = await Image.findById(`${image_default_id}`)

        }

        if (!image) {
            return res.status(400).json({ message: "Image does not exists" })
        }

        const events = await Event.find()

        const newEvent = new Event({
            event,
            description,
            category: categoryEvent._id,
            status: statusEvent._id,
            admin: req.user,
            image: image._id,
            group: {
                amount: categoryEvent.category === "GROUP STAGE" ? Number(amount) : 0,
                qualifiers: categoryEvent.category === "GROUP STAGE" ? Number(qualifiers) : 0,
            },
            id: generateId(events)
        })

        const eventSaved = await newEvent.save()

        const role = await Role.findOne({ role: `${privileged_role}` })

        if (!role) {
            return res.status(400).json({ message: "Role does not exists" })
        }

        const newCompetitor = new Competitor({
            user: req.user,
            role: role._id,
            event: eventSaved._id
        })

        const competitorSaved = await newCompetitor.save()

        const eventTeams = await Event.findByIdAndUpdate(eventSaved._id, {
            $push: {
                competitors: competitorSaved._id
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
        }).populate("category")
            .populate("status")

        if (!eventTeams) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        return res.status(200).json(eventTeams)

    } catch (error) {
        throw error
    }

}

export const removeEvent = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const event = await Event.findById(id).populate("image")

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        if (req.user !== String(event.admin)) {
            return res.status(400).json({ message: "You cannot remove this event" })
        }

        await cloud.uploader.destroy(event.image.imageId)

        await Event.findByIdAndDelete(id)

        return res.status(200).json({ message: "Event removed successfully" })

    } catch (error) {
        throw error
    }

}

export const joinEvent = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const event = await Event.findOne({ id })

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const role = await Role.findOne({ role: `${default_role}` })

        if (!role) {
            return res.status(400).json({ message: "Role does not exists" })
        }

        if (event.competitors.find(c => String(c) === req.user)) {
            return res.status(400).json({ message: "You have alraedy joined to this tournament" })
        }

        const newCompetitor = new Competitor({
            user: req.user,
            event: event._id,
            role: role._id
        })

        const competitorSaved = await newCompetitor.save()

        const eventCompetitor = await Event.findByIdAndUpdate(event._id, {
            $push: {
                competitors: competitorSaved._id
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
        }).populate("category")
            .populate("status")

        return res.status(200).json(eventCompetitor)

    } catch (error) {
        throw error
    }

}

export const updateRole = async (req: Request, res: Response): Promise<Response> => {

    const { eid, cid } = req.params
    const { role } = req.query

    try {

        const event = await Event.findById(eid)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const competitor = await Competitor.findById(cid)

        if (!competitor) {
            return res.status(400).json({ message: "Competitor does not exists" })
        }

        const roleFound = await Role.findOne({ role: String(role) })

        if (!roleFound) {
            return res.status(400).json({ message: "Role does not exists" })
        }

        if (String(event.admin) !== req.user) {
            return res.status(401).json({ message: "You cannot remove a competitor" })
        }

        await Competitor.findByIdAndUpdate(cid, {
            role: roleFound._id
        }, {
            new: true
        })

        const showEvent = await Event.findById(eid).populate({
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

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}

export const removeCompetitor = async (req: Request, res: Response): Promise<Response> => {

    const { eid, cid } = req.params

    try {

        const event = await Event.findById(eid)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const competitor = await Competitor.findById(cid)

        if (!competitor) {
            return res.status(400).json({ message: "Competitor does not exists" })
        }

        if (String(event.admin) !== req.user) {
            return res.status(401).json({ message: "You cannot remove a competitor" })
        }

        const showEvent = await Event.findByIdAndUpdate(eid, {
            $pull: {
                competitors: cid
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
        }).populate("category")
            .populate("status")

        await Competitor.findByIdAndDelete(cid)

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}

export const updateEvent = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { event, description, category, status, qualifiers, amount } = req.body    

    try {

        const eventData = await Event.findById(id).populate("image")

        if (!eventData) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const categoryEvent = await Category.findOne({ category })

        if (!categoryEvent) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        if (categoryEvent.category === "GROUP STAGE") {
            if (Number(qualifiers) === 0 || Number(amount) === 0) {
                return res.status(400).json({ message: "Qualifiers or amount of groups cannot be 0" })
            }

            if (Number(qualifiers) > Number(amount)) {
                return res.status(400).json({ message: "Qualifiers cannot be higher than amount of groups" })
            }
        }

        const statusEvent = await Status.findOne({ status })

        if (!statusEvent) {
            return res.status(400).json({ message: "Status does not exists" })
        }

        if (String(eventData.admin) !== req.user) {
            return res.status(401).json({ message: "You cannot update the event" })
        }

        let image

        if (req.file) {

            await cloud.uploader.destroy(eventData.image.imageId)

            const result = await cloud.uploader.upload(req.file.path)

            await unlink(req.file.path)

            const newImage = new Image({
                image: result.url,
                imageId: result.public_id
            })

            image = await newImage.save()

        }

        if (categoryEvent._id !== eventData.category) {
            await Event.findByIdAndUpdate(id, {
                $set: {
                    matchs: []
                }
            }, {
                new: true
            })
        }

        const showEvent = await Event.findByIdAndUpdate(id, {
            event,
            description,
            status: statusEvent._id,
            category: categoryEvent._id,
            image: image ? image._id : eventData.image._id,
            group: {
                amount: categoryEvent.category === "GROUP STAGE" ? Number(amount) : 0,
                qualifiers: categoryEvent.category === "GROUP STAGE" ? Number(qualifiers) : 0,
            },
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
        }).populate("category")
            .populate("status")

        return res.status(200).json({
            event: showEvent,
            message: "Event updated successfully"
        })

    } catch (error) {
        throw error
    }

}