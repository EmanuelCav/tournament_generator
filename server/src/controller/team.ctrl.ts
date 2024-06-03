import { Request, Response } from "express";
import { unlink } from "fs-extra";

import Team from '../models/team'
import Event from '../models/event'
import Image from '../models/image'

import { image_default_id } from "../config/config";

import { cloud } from "../helper/cloud";

export const addTeam = async (req: Request, res: Response): Promise<Response> => {

    const { name } = req.body
    const { id } = req.params

    try {

        const event = await Event.findById(id)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const teams = await Team.find({
            event: id
        })

        if (teams.find((t) => t.name === name)) {
            return res.status(400).json({ message: "Team is already added. Try another" })
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

        const newTeam = new Team({
            name,
            event: id,
            logo: image._id
        })

        const teamSaved = await newTeam.save()

        const eventCompetitor = await Event.findByIdAndUpdate(event._id, {
            $push: {
                teams: teamSaved._id
            }
        }, {
            new: true
        })
            .populate({
                path: "teams",
                populate: {
                    path: "logo",
                    select: "image"
                }
            }).populate({
                path: "competitors",
                populate: {
                    path: "user",
                    select: "nickname"
                }
            })

        return res.status(200).json(eventCompetitor)

    } catch (error) {
        throw error
    }

}

export const removeTeam = async (req: Request, res: Response): Promise<Response> => {

    const { tid, eid } = req.params

    try {

        const team = await Team.findById(tid).populate("logo")

        if (!team) {
            return res.status(400).json({ message: "Team does not exists" })
        }

        const event = await Event.findById(eid)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        if (event.admin.toString() !== req.user) {
            return res.status(400).json({ message: "You cannot remove this team" })
        }

        const showEvent = await Event.findByIdAndUpdate(eid, {
            $pull: {
                teams: tid
            }
        }, {
            new: true
        })
            .populate({
                path: "teams",
                populate: {
                    path: "logo",
                    select: "image"
                }
            }).populate({
                path: "competitors",
                populate: {
                    path: "user",
                    select: "nickname"
                }
            })

        await cloud.uploader.destroy(team.logo.imageId)

        await Team.findByIdAndDelete(tid)

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}

export const updateTeam = async (req: Request, res: Response): Promise<Response> => {

    const { tid, eid } = req.params
    const { name } = req.body

    try {

        const team = await Team.findById(tid)

        if (!team) {
            return res.status(400).json({ message: "Team does not exists" })
        }

        const event = await Event.findById(eid)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        if (event.admin.toString() !== req.user) {
            return res.status(400).json({ message: "You cannot remove this team" })
        }

        if (req.file) {

            const image = await Image.findById(team.logo)

            if (!image) {
                return res.status(400).json({ message: "Image does not exists" })
            }

            await cloud.uploader.destroy(image.imageId)

            const result = await cloud.uploader.upload(req.file.path)

            await Image.findByIdAndUpdate(team.logo, {
                image: result.url,
                imageId: result.public_id
            }, {
                new: true
            })

            await unlink(req.file.path)

        }

        await Team.findByIdAndUpdate(tid, {
            name
        }, {
            new: true
        })

        const eventShow = await Event.findById(eid).populate({
            path: "teams",
            populate: {
                path: "logo",
                select: "image"
            }
        }).populate({
            path: "competitors",
            populate: {
                path: "user",
                select: "nickname"
            }
        })

        if (!eventShow) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        return res.status(200).json(eventShow)

    } catch (error) {
        throw error
    }

}