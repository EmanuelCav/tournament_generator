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

        const events = await Event.find({ admin: req.user })
        .populate({
            path: "competitors",
            select: "user",
            populate: {
                path: "user",
                select: "nickname"
            }
        })

        return res.status(200).json(events)

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

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        return res.status(200).json(event)

    } catch (error) {
        throw error
    }

}

export const createEvent = async (req: Request, res: Response): Promise<Response> => {

    const { event, description, category, status } = req.body

    try {

        const categoryEvent = await Category.findOne({ category })

        if (!categoryEvent) {
            return res.status(400).json({ message: "Category does not exists" })
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
            id: generateId(events)
        })

        const eventSaved = await newEvent.save()

        const role = await Role.findOne({ role: `${privileged_role}` })

        if(!role) {
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

export const updateEvent = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const event = await Event.findById(id)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        return res.status(200).json({ message: "updateEvent" })

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

        return res.status(200).json(eventCompetitor)

    } catch (error) {
        throw error
    }

}