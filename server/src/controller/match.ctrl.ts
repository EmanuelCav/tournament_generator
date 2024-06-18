import { Request, Response } from "express";

import Event from '../models/event';
import Referee from '../models/referee';
import Team from '../models/team';
import Campus from '../models/campus';

import { generateElimination, generateGroups, generateMatchdays, shuffle } from "../helper/functions";

export const generateMatch = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { category, round } = req.query

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

        let matchdays;

        if (category === "MATCHDAYS") {
            matchdays = generateMatchdays(shuffleArr, String(round))
        } else if (category === "ELIMINATION") {
            matchdays = generateElimination(shuffleArr, String(round))
        } else if (category === "SWISS") {
            matchdays = generateElimination(shuffleArr, String(round))
        } else {
            matchdays = generateGroups(shuffleArr, event.group.amount, String(round))
        }

        const showEvent = await Event.findByIdAndUpdate(id, {
            $set: {
                matchs: matchdays,
                isRoundTrip: String(round) === "trip"
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

export const restartMatch = async (req: Request, res: Response): Promise<Response> => {

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
            return res.status(401).json({ message: "You cannot generate matchs" })
        }

        await Team.updateMany({
            event: id
        }, {
            defeat: 0,
            victory: 0,
            draw: 0,
            points: 0,
            favor: 0,
            against: 0
        })

        const showEvent = await Event.findByIdAndUpdate(id, {
            $set: {
                matchs: []
            },
            done: false
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

export const addRefereeMatch = async (req: Request, res: Response): Promise<Response> => {

    const { eid, mid } = req.params
    const { name } = req.query

    try {

        const event = await Event.findById(eid)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const referee = await Referee.findOne({ name })

        if (!referee) {
            return res.status(400).json({ message: "Referee does not exists" })
        }

        for (let i = 0; i < event.matchs.length; i++) {
            for (let j = 0; j < event.matchs[i].length; j++) {
                if (String(event.matchs[i][j]._id) === mid) {
                    event.matchs[i][j].referee = name as string;
                    break;
                }

            }
        }

        const showEvent = await Event.findByIdAndUpdate(eid, {
            $set: {
                matchs: event.matchs
            },
            done: true
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

export const addCampusMatch = async (req: Request, res: Response): Promise<Response> => {

    const { eid, mid } = req.params
    const { name } = req.query

    try {

        const event = await Event.findById(eid)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        const campus = await Campus.findOne({ name })

        if (!campus) {
            return res.status(400).json({ message: "Campus does not exists" })
        }

        for (let i = 0; i < event.matchs.length; i++) {
            for (let j = 0; j < event.matchs[i].length; j++) {
                if (String(event.matchs[i][j]._id) === mid) {
                    event.matchs[i][j].campus = name as string;
                    break;
                }
            }
        }

        const showEvent = await Event.findByIdAndUpdate(eid, {
            $set: {
                matchs: event.matchs
            },
            done: true
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

export const updateScore = async (req: Request, res: Response): Promise<Response> => {

    const { eid, mid } = req.params
    const { targetLocal, targetVisitant } = req.body
    const { category } = req.query

    try {

        const event = await Event.findById(eid)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        for (let i = 0; i < event.matchs.length; i++) {
            for (let j = 0; j < event.matchs[i].length; j++) {
                if (String(event.matchs[i][j]._id) === mid) {
                    event.matchs[i][j].targetLocal = Number(targetLocal);
                    event.matchs[i][j].targetVisitant = Number(targetVisitant);

                    if (String(category) === 'ELIMINATION') {
                        if (Number(targetVisitant) === Number(targetLocal)) {
                            return res.status(400).json({ message: "the score cannot be a draw" })
                        }
                    }

                    const teamLocal = await Team.findOne({ name: event.matchs[i][j].local.name }).populate("logo")
                    const teamVisitant = await Team.findOne({ name: event.matchs[i][j].visitant.name }).populate("logo")

                    let resultLocal
                    let resultVisitant

                    if (!teamLocal) {
                        return res.status(400).json({ message: "Local team does not exists" })
                    }

                    if (!teamVisitant) {
                        return res.status(400).json({ message: "Visitant team does not exists" })
                    }

                    if (Number(targetLocal) > Number(targetVisitant)) {
                        resultLocal = await Team.findOneAndUpdate({ name: event.matchs[i][j].local.name }, {
                            victory: teamLocal.victory + 1,
                            favor: teamLocal.favor + Number(targetLocal),
                            against: teamLocal.against + Number(targetVisitant)
                        }, {
                            new: true
                        })

                        resultVisitant = await Team.findOneAndUpdate({ name: event.matchs[i][j].visitant.name }, {
                            defeat: teamVisitant.defeat + 1,
                            favor: teamLocal.favor + Number(targetVisitant),
                            against: teamLocal.against + Number(targetLocal)
                        }, {
                            new: true
                        })
                    } else if (Number(targetLocal) < Number(targetVisitant)) {
                        resultLocal = await Team.findOneAndUpdate({ name: event.matchs[i][j].local.name }, {
                            defeat: teamLocal.defeat + 1,
                            favor: teamLocal.favor + Number(targetLocal),
                            against: teamLocal.against + Number(targetVisitant)
                        }, {
                            new: true
                        })

                        resultVisitant = await Team.findOneAndUpdate({ name: event.matchs[i][j].visitant.name }, {
                            victory: teamVisitant.victory + 1,
                            favor: teamLocal.favor + Number(targetVisitant),
                            against: teamLocal.against + Number(targetLocal)
                        }, {
                            new: true
                        })
                    } else {
                        resultLocal = await Team.findOneAndUpdate({ name: event.matchs[i][j].local.name }, {
                            draw: teamLocal.draw + 1,
                            favor: teamLocal.favor + Number(targetLocal),
                            against: teamLocal.against + Number(targetVisitant)
                        }, {
                            new: true
                        })

                        resultVisitant = await Team.findOneAndUpdate({ name: event.matchs[i][j].visitant.name }, {
                            draw: teamVisitant.draw + 1,
                            favor: teamLocal.favor + Number(targetVisitant),
                            against: teamLocal.against + Number(targetLocal)
                        }, {
                            new: true
                        })
                    }

                    await Team.findOneAndUpdate({ name: event.matchs[i][j].local.name }, {
                        points: resultLocal?.draw! + (resultLocal?.victory! * 3)
                    }, {
                        new: true
                    })

                    await Team.findOneAndUpdate({ name: event.matchs[i][j].visitant.name }, {
                        points: resultVisitant?.draw! + (resultVisitant?.victory! * 3)
                    }, {
                        new: true
                    })

                    if (String(category) === 'ELIMINATION') {
                        if (!event.isRoundTrip || event.matchs[i][j].isMatchTrip) {
                            if (!event.matchs[i][j % 2 === 0 ? j + 1 : j - 1].targetLocal) {
                                if (event.matchs[event.matchs.length - 1].length > 1) {
                                    if (Number(targetLocal) > Number(targetVisitant)) {
                                        event.matchs.push([{
                                            isMatchTrip: event.matchs[0][0].isMatchTrip,
                                            local: {
                                                logo: teamLocal.logo.image,
                                                name: teamLocal.name
                                            },
                                            visitant: {
                                                logo: "",
                                                name: ""
                                            }
                                        }])
                                    }

                                    if (Number(targetLocal) < Number(targetVisitant)) {
                                        event.matchs.push([{
                                            isMatchTrip: event.matchs[0][0].isMatchTrip,
                                            local: {
                                                logo: teamVisitant.logo.image,
                                                name: teamVisitant.name
                                            },
                                            visitant: {
                                                logo: "",
                                                name: ""
                                            }
                                        }])
                                    }
                                } else {
                                    if (Number(targetLocal) > Number(targetVisitant)) {
                                        event.matchs[event.matchs.length - 1].splice(Math.floor(j / 2), 0, {
                                            isMatchTrip: event.matchs[0][0].isMatchTrip,
                                            local: {
                                                logo: teamLocal.logo.image,
                                                name: teamLocal.name
                                            },
                                            visitant: {
                                                logo: "",
                                                name: ""
                                            }
                                        })
                                    }

                                    if (Number(targetLocal) < Number(targetVisitant)) {
                                        event.matchs[event.matchs.length - 1].splice(Math.floor(j / 2), 0, {
                                            isMatchTrip: event.matchs[0][0].isMatchTrip,
                                            local: {
                                                logo: teamVisitant.logo.image,
                                                name: teamVisitant.name
                                            },
                                            visitant: {
                                                logo: "",
                                                name: ""
                                            }
                                        })
                                    }
                                }
                            } else {
                                let isMatchExists = event.matchs[event.matchs.length - 1][Math.floor(j / 2)]
                                if (Number(targetLocal) > Number(targetVisitant)) {
                                    event.matchs[event.matchs.length - 1][isMatchExists ? Math.floor(j / 2) : event.matchs[event.matchs.length - 1].length - 1].visitant.logo = teamLocal.logo.image
                                    event.matchs[event.matchs.length - 1][isMatchExists ? Math.floor(j / 2) : event.matchs[event.matchs.length - 1].length - 1].visitant.name = teamLocal.name
                                }
                                if (Number(targetLocal) < Number(targetVisitant)) {
                                    event.matchs[event.matchs.length - 1][isMatchExists ? Math.floor(j / 2) : event.matchs[event.matchs.length - 1].length - 1].visitant.logo = teamVisitant.logo.image
                                    event.matchs[event.matchs.length - 1][isMatchExists ? Math.floor(j / 2) : event.matchs[event.matchs.length - 1].length - 1].visitant.name = teamVisitant.name
                                }
                            }
                        }
                    }

                    break;
                }

            }
        }

        const showEvent = await Event.findByIdAndUpdate(eid, {
            $set: {
                matchs: event.matchs,
                done: true
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

export const updateDate = async (req: Request, res: Response): Promise<Response> => {

    const { eid, mid } = req.params
    const { schedule, day } = req.body

    try {

        const event = await Event.findById(eid)

        if (!event) {
            return res.status(400).json({ message: "Event does not exists" })
        }

        for (let i = 0; i < event.matchs.length; i++) {
            for (let j = 0; j < event.matchs[i].length; j++) {
                if (String(event.matchs[i][j]._id) === mid) {
                    event.matchs[i][j].schedule = new Date(`${day}T${schedule}:00`);
                    break;
                }

            }
        }

        const showEvent = await Event.findByIdAndUpdate(eid, {
            $set: {
                matchs: event.matchs
            },
            done: true
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