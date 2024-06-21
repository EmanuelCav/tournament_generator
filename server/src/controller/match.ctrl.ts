import { Request, Response } from "express";

import Event from '../models/event';
import Referee from '../models/referee';
import Team from '../models/team';
import Campus from '../models/campus';

import { generateElimination, generateGroups, generateMatchdays, generateSwiss, shuffle } from "../helper/functions";

export const generateMatch = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { category, round, singleFinal } = req.query

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

        if (category === "FIXTURE") {
            matchdays = generateMatchdays(shuffleArr, String(round))
        } else if (category === "ELIMINATION") {
            matchdays = generateElimination(shuffleArr, String(round), String(singleFinal))
        } else if (category === "SWISS") {
            matchdays = generateSwiss(shuffleArr, String(round), String(singleFinal))
        } else {
            matchdays = generateGroups(shuffleArr, event.group.amount, String(round), String(singleFinal))
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
            }).populate({
                path: "comments",
                select: "user comment",
                populate: {
                    path: "user",
                    select: "nickname"
                }
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
            }).populate({
                path: "comments",
                select: "user comment",
                populate: {
                    path: "user",
                    select: "nickname"
                }
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
            }).populate({
                path: "comments",
                select: "user comment",
                populate: {
                    path: "user",
                    select: "nickname"
                }
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
            }).populate({
                path: "comments",
                select: "user comment",
                populate: {
                    path: "user",
                    select: "nickname"
                }
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

        if (String(category) === 'ELIMINATION') {
            if (!event.isRoundTrip) {
                if (Number(targetVisitant) === Number(targetLocal)) {
                    return res.status(400).json({ message: "the score cannot be a draw" })
                }
            }
        }

        for (let i = 0; i < event.matchs.length; i++) {
            for (let j = 0; j < event.matchs[i].length; j++) {
                if (String(event.matchs[i][j]._id) === mid) {
                    event.matchs[i][j].targetLocal = Number(targetLocal);
                    event.matchs[i][j].targetVisitant = Number(targetVisitant);

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


                    if (event.isRoundTrip) {
                        if ((event.matchs[i].find(m => m.visitant.name === teamLocal.name)?.targetVisitant! + Number(targetLocal)) === (event.matchs[i].find(m => m.local.name === teamVisitant.name)?.targetLocal! + Number(targetVisitant))) {
                            return res.status(400).json({ message: "The global score cannot be a draw" })
                        }
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

                    if (String(category) === 'ELIMINATION' || String(category) === 'SWISS') {
                        
                        if (i < event.matchs.length - 1) {
                            
                            if (!event.isRoundTrip || typeof(event.matchs[i].find(m => (m.isMatchTrip !== event.matchs[i][j].isMatchTrip) && (m.local.name === event.matchs[i][j].visitant.name || m.visitant.name === event.matchs[i][j].local.name))?.targetLocal) !== 'undefined') {
                                
                                let targetLocalHigher = event.isRoundTrip ?
                                    (event.matchs[i].find(m => m.visitant.name === teamLocal.name)?.targetVisitant! + Number(targetLocal)) > (event.matchs[i].find(m => m.local.name === teamVisitant.name)?.targetLocal! + Number(targetVisitant)) :
                                    Number(targetLocal) > Number(targetVisitant)
                                let targetVisitantHigher = event.isRoundTrip ?
                                    (event.matchs[i].find(m => m.local.name === teamVisitant.name)?.targetLocal! + Number(targetVisitant)) > (event.matchs[i].find(m => m.visitant.name === teamLocal.name)?.targetVisitant! + Number(targetLocal)) :
                                    Number(targetVisitant) > Number(targetLocal)

                                if (targetLocalHigher) {

                                    if (j % 2 === 0) {
                                        event.matchs[i + 1][Math.floor(j / 2)].local.logo = teamLocal.logo.image
                                        event.matchs[i + 1][Math.floor(j / 2)].local.name = teamLocal.name
                                    } else {
                                        event.matchs[i + 1][Math.floor(j / 2)].visitant.logo = teamLocal.logo.image
                                        event.matchs[i + 1][Math.floor(j / 2)].visitant.name = teamLocal.name
                                    }

                                    if (event.isRoundTrip) {
                                        if (j % 2 === 0) {
                                            event.matchs[i + 1][event.matchs[i][j].isMatchTrip ? Math.floor(j / 2) - Math.floor(event.matchs[i + 1].length / 2) : Math.floor(j / 2) + Math.floor(event.matchs[i + 1].length / 2)].visitant.logo = teamLocal.logo.image
                                            event.matchs[i + 1][event.matchs[i][j].isMatchTrip ? Math.floor(j / 2) - Math.floor(event.matchs[i + 1].length / 2) : Math.floor(j / 2) + Math.floor(event.matchs[i + 1].length / 2)].visitant.name = teamLocal.name
                                        } else {
                                            event.matchs[i + 1][event.matchs[i][j].isMatchTrip ? Math.floor(j / 2) - Math.floor(event.matchs[i + 1].length / 2) : Math.floor(j / 2) + Math.floor(event.matchs[i + 1].length / 2)].local.logo = teamLocal.logo.image
                                            event.matchs[i + 1][event.matchs[i][j].isMatchTrip ? Math.floor(j / 2) - Math.floor(event.matchs[i + 1].length / 2) : Math.floor(j / 2) + Math.floor(event.matchs[i + 1].length / 2)].local.name = teamLocal.name
                                        }
                                    }
                                }

                                if (targetVisitantHigher) {

                                    if (j % 2 === 0) {
                                        event.matchs[i + 1][Math.floor(j / 2)].local.logo = teamVisitant.logo.image
                                        event.matchs[i + 1][Math.floor(j / 2)].local.name = teamVisitant.name
                                    } else {
                                        event.matchs[i + 1][Math.floor(j / 2)].visitant.logo = teamVisitant.logo.image
                                        event.matchs[i + 1][Math.floor(j / 2)].visitant.name = teamVisitant.name
                                    }

                                    if (event.isRoundTrip) {
                                        if (j % 2 === 0) {
                                            event.matchs[i + 1][event.matchs[i][j].isMatchTrip ? Math.floor(j / 2) - Math.floor(event.matchs[i + 1].length / 2) : Math.floor(j / 2) + Math.floor(event.matchs[i + 1].length / 2)].visitant.logo = teamVisitant.logo.image
                                            event.matchs[i + 1][event.matchs[i][j].isMatchTrip ? Math.floor(j / 2) - Math.floor(event.matchs[i + 1].length / 2) : Math.floor(j / 2) + Math.floor(event.matchs[i + 1].length / 2)].visitant.name = teamVisitant.name
                                        } else {
                                            event.matchs[i + 1][event.matchs[i][j].isMatchTrip ? Math.floor(j / 2) - Math.floor(event.matchs[i + 1].length / 2) : Math.floor(j / 2) + Math.floor(event.matchs[i + 1].length / 2)].local.logo = teamVisitant.logo.image
                                            event.matchs[i + 1][event.matchs[i][j].isMatchTrip ? Math.floor(j / 2) - Math.floor(event.matchs[i + 1].length / 2) : Math.floor(j / 2) + Math.floor(event.matchs[i + 1].length / 2)].local.name = teamVisitant.name
                                        }
                                    }
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
            }).populate({
                path: "comments",
                select: "user comment",
                populate: {
                    path: "user",
                    select: "nickname"
                }
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
            }).populate({
                path: "comments",
                select: "user comment",
                populate: {
                    path: "user",
                    select: "nickname"
                }
            })

        return res.status(200).json(showEvent)

    } catch (error) {
        throw error
    }

}