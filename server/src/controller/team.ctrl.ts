import { Request, Response } from "express";
import { unlink } from "fs-extra";

import Team from '../models/team'
import Event from '../models/event'
import Competitor from '../models/competitor'
import Image from '../models/image'
import User from '../models/user'
import Subscription from '../models/subscription'

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

        const userLoggedIn = await User.findById(req.user)

        if (!userLoggedIn) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const subscription = await Subscription.findById(userLoggedIn.subscription)

        if(!subscription) {
            return res.status(400).json({ message: "Subscription does not exists" })
        }

        if(subscription.hierarchy <= 1) {
            if(event.teams.length >= 32) {
                return res.status(400).json({ message: "You cannot add more than 32 teams" })
            }
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
                populate: [{
                    path: "logo",
                    select: "image"
                }, {
                    path: "players",
                    populate: {
                        path: "statistics"
                    }
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
            }).populate({
                path: "comments",
                select: "user comment",
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
                populate: [{
                    path: "logo",
                    select: "image"
                }, {
                    path: "players",
                    populate: {
                        path: "statistics"
                    }
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
            }).populate({
                path: "comments",
                select: "user comment",
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
            populate: [{
                path: "logo",
                select: "image"
            }, {
                path: "players",
                populate: {
                    path: "statistics"
                }
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
            }).populate({
                path: "comments",
                select: "user comment",
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

export const joinTeam = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const team = await Team.findById(id)

        if (!team) {
            return res.status(400).json({ message: "Team does not exists" })
        }

        const competitor = await Competitor.findOne({ user: req.user, event: team.event })

        if (!competitor) {
            return res.status(400).json({ message: "Competitor does not exists" })
        }

        if (team.competitors.find((c) => String(c) === String(competitor._id))) {
            await Team.findByIdAndUpdate(id, {
                $pull: {
                    competitors: competitor._id
                }
            }, {
                new: true
            })
        } else {
            await Team.findByIdAndUpdate(id, {
                $push: {
                    competitors: competitor._id
                }
            }, {
                new: true
            })
        }

        const event = await Event.findById(team.event).populate({
            path: "teams",
            populate: [{
                path: "logo",
                select: "image"
            }, {
                path: "players",
                
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
            .populate({
                path: "image",
                select: "image"
            }).populate({
                path: "comments",
                select: "user comment",
                populate: {
                    path: "user",
                    select: "nickname"
                }
            })

        return res.status(200).json(event)

    } catch (error) {
        throw error
    }

}

export const generatePositions = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const event = await Event.findById(id).populate("teams")

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const showTeams = await Event.aggregate([
            {
                $match: { _id: event._id }
            },
            {
                $lookup: {
                    from: Team.collection.name,
                    localField: 'teams',
                    foreignField: '_id',
                    as: 'teams'
                }
            },
            {
                $unwind: "$teams"
            },
            {
                $lookup: {
                    from: Image.collection.name,
                    localField: 'teams.logo',
                    foreignField: '_id',
                    as: 'teams.logo'
                }
            },
            {
                $unwind: "$teams.logo"
            },
            {
                $sort: { "teams.points": -1 }
            },
            {
                $group: {
                    _id: "$_id",
                    teams: { $push: "$teams" }
                }
            }
        ]);

        return res.status(200).json(showTeams[0].teams)

    } catch (error) {
        throw error
    }

}