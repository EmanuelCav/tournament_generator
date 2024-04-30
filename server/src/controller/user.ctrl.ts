import { Request, Response } from "express";

import User from '../models/user'
import Role from '../models/role'

import { default_role } from "../config/config";

import { hashText } from "../helper/encrypt";

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const users = await User.find()

        return res.status(200).json(users)

    } catch (error) {
        throw error
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body

    try {

        return res.status(200).json({ message: "login" })

    } catch (error) {
        throw error
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {

    try {

        return res.status(200).json({ message: "register" })

    } catch (error) {
        throw error
    }

}

export const createUser = async (req: Request, res: Response): Promise<Response> => {

    const { fullname, nickname, email, password, role } = req.body

    try {

        let userRole

        if(role) {
            userRole = await Role.findOne({ role })
        } else {
            userRole = await Role.findOne({ role: `${default_role}` })
        }

        const passwordHashed = await hashText(password)
        const emailHashed = await hashText(email)

        const newUser = new User({
            fullname,
            nickname,
            email: emailHashed,
            password: passwordHashed,
            role: userRole?._id
        })

        await newUser.save()

        return res.status(200).json({ message: "User created successfully" })

    } catch (error) {
        throw error
    }

}

export const removeUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const user = await User.findById(id)

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        await User.findByIdAndDelete(id)

        return res.status(200).json({ message: "User removed successfully" })

    } catch (error) {
        throw error
    }

}