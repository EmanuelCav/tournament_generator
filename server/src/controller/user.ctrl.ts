import { Request, Response } from "express";

import User from '../models/user'
import Role from '../models/role'
import Subscription from '../models/subscription'

import { default_role } from "../config/config";

import { compareHash, generateNumberUser, generatePassword, generateUserToken, hashText } from "../helper/encrypt";

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const users = await User.find().limit(5)

        return res.status(200).json(users)

    } catch (error) {
        throw error
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body

    try {

        const user = await User.findOne({ email })

        if(!user) {
            return res.status(400).json({ message: "Fields do not match" })
        }

        const comparePassword = await compareHash(password, user.password)

        if(!comparePassword) {
            return res.status(400).json({ message: "Fields do not match" })
        }

        const userLoggedIn = await User.findOne({ email }).select("-password -email -phone").populate("role")

        if(!userLoggedIn) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const token = generateUserToken(user._id)

        return res.status(200).json({
            token,
            user: userLoggedIn
        })

    } catch (error) {
        throw error
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {

    const { fullname, nickname, email, password } = req.body

    try {

        const role = await Role.findOne({ role: `${default_role}` })

        if(!role) {
            return res.status(400).json({ message: "Role does not exists" })
        }

        const subscription = await Subscription.findOne({ subscription: "FREE" })

        if(!subscription) {
            return res.status(400).json({ message: "Subscription does not exists" })
        }

        const passwordHashed = await hashText(password)

        const newUser = new User({
            fullname,
            nickname,
            email,
            subscription: subscription._id,
            password: passwordHashed,
            role: role._id
        })

        const userSaved = await newUser.save()

        const user = await User.findById(userSaved._id).select("-password -email -phone").populate("role")

        if(!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const token = generateUserToken(user._id)

        return res.status(200).json({
            user,
            token
        })

    } catch (error) {
        throw error
    }

}

export const createUser = async (req: Request, res: Response): Promise<Response> => {

    const { fullname, nickname, email, password, role } = req.body

    try {

        let userRole

        if (role) {
            userRole = await Role.findOne({ role })
        } else {
            userRole = await Role.findOne({ role: `${default_role}` })
        }

        if(!userRole) {
            return res.status(400).json({ message: "Role does not exists" })
        }

        const passwordHashed = await hashText(password)

        const newUser = new User({
            fullname,
            nickname,
            email,
            password: passwordHashed,
            role: userRole._id
        })

        await newUser.save()

        return res.status(200).json({ message: "User created successfully" })

    } catch (error) {
        throw error
    }

}

export const generateUser = async (req: Request, res: Response): Promise<Response> => {

    try {

        const userRole = await Role.findOne({ role: `${default_role}` })

        if(!userRole) {
            return res.status(400).json({ message: "Role does not exists" })
        }

        const password = generatePassword()

        const passwordHashed = await hashText(password)

        const newUser = new User({
            fullname: 'User' + ' ' + generateNumberUser(),
            nickname: 'User' + generateNumberUser(),
            password: passwordHashed,
            role: userRole._id
        })

        const userSaved = await newUser.save()

        const user = await User.findById(userSaved._id).select("-password -email -phone").populate("role")

        if(!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const token = generateUserToken(user._id)

        return res.status(200).json({
            user,
            token
        })
        
    } catch (error) {
        throw error
    }

}

export const autoLogin = async (req: Request, res: Response): Promise<Response> => {

    const { nickname } = req.params

    try {

        const user = await User.findOne({ nickname }).select("-password -phone -email").populate("role")

        if(!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const token = generateUserToken(user._id)

        return res.status(200).json({
            user,
            token
        })
        
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