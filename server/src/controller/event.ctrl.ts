import { Request, Response } from "express";
import { unlink } from 'fs-extra'

import Event from '../models/event'
import Category from '../models/category'
import Status from '../models/status'
import Image from '../models/image'
import Competitor from '../models/competitor'
import Role from '../models/role'
import Team from '../models/team'

import { image_default_id, default_role } from "../config/config";

import { EVENTS } from "../helper/mocks";
import { cloud } from "../helper/cloud";

export const events = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showEvents = await Event.find()

        return res.status(200).json(EVENTS)

    } catch (error) {
        throw error
    }

}

export const userEvents = async (req: Request, res: Response): Promise<Response> => {

    try {

        const events = await Event.find({ admin: req.user })

        return res.status(200).json(EVENTS)

    } catch (error) {
        throw error
    }

}

export const event = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        // const event = await Event.findById(id)
        const event = EVENTS[0]


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

        console.log(event);
        console.log(description);
        console.log(category);
        console.log(status);
        console.log(req.file);        

        // const categoryEvent = await Category.findOne({ category })

        // if (!categoryEvent) {
        //     return res.status(400).json({ message: "Category does not exists" })
        // }

        // const statusEvent = await Status.findOne({ status })

        // if (!statusEvent) {
        //     return res.status(400).json({ message: "Status does not exists" })
        // }

        let image

        if (req.file) {

            console.log("isFile");
            

            // const result = await cloud.uploader.upload(req.file.path)

            // await unlink(req.file.path)

            // const newImage = new Image({
            //     image: result.url,
            //     imageId: result.public_id
            // })

            // image = await newImage.save()

        } else {

            console.log("notFile");

            // image = await Image.findById(`${image_default_id}`)

        }

        // if(!image) {
        //     return res.status(400).json({ message: "Image does not exists" })
        // }

        // const newEvent = new Event({
        //     event,
        //     description,
        //     category: categoryEvent._id,
        //     status: statusEvent._id,
        //     admin: req.user,
        //     image: image._id
        // })

        // const eventSaved = await newEvent.save()

        return res.status(400).json("")

    } catch (error) {
        throw error
    }

}

export const removeEvent = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const event = await Event.findById(id)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

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

export const AddTeam = async (req: Request, res: Response): Promise<Response> => {

    const { name } = req.body
    const { id } = req.params

    try {

        const event = await Event.findById(id)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const newTeam = new Team({
            name,
            event: id 
        })

        const teamSaved = await newTeam.save()

        const eventCompetitor = await Event.findByIdAndUpdate(event._id, {
            $push: {
                teams: teamSaved._id
            }
        }, {
            new: true
        })

        return res.status(200).json(eventCompetitor)

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

        if(!role) {
            return res.status(400).json({ message: "Role does not exists" })
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
        })

        return res.status(200).json(eventCompetitor)

    } catch (error) {
        throw error
    }

}