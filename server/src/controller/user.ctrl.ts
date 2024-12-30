import { Request, Response } from "express";

import User from '../models/user'
import Role from '../models/role'
import Subscription from '../models/subscription'

import { default_role, main_subscription } from "../config/config";

import { compareHash, forgotPasswordToken, generateEmailVerification, generateNumberUser, generatePassword, generateUserToken, hashText } from "../helper/encrypt";

import { infoEmail, infoEmailPassword } from "../messages/messages";

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

        if (!user) {
            return res.status(400).json({ message: "Fields do not match" })
        }

        const comparePassword = await compareHash(password, user.password)

        if (!comparePassword) {
            return res.status(400).json({ message: "Fields do not match" })
        }

        const userLoggedIn = await User.findOne({ email }).select("-password -email -phone -subscription -status -role")

        if (!userLoggedIn) {
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

        if (!role) {
            return res.status(400).json({ message: "Role does not exists" })
        }

        const subscription = await Subscription.findOne({ subscription: `${main_subscription}` })

        if (!subscription) {
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

        const user = await User.findById(userSaved._id).select("-password -email -phone -subscription -status -role")

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const token = generateEmailVerification(user._id)

        await infoEmail(email)

        return res.status(200).json({
            message: "Check your email",
            token
        })

    } catch (error) {
        throw error
    }

}

export const createUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { fullname, nickname, email, password, role } = req.body

    try {

        let userRole

        if (role) {
            userRole = await Role.findOne({ role })
        } else {
            userRole = await Role.findOne({ role: `${default_role}` })
        }

        if (!userRole) {
            return res.status(400).json({ message: "Role does not exists" })
        }

        const subscription = await Subscription.findById(id)

        if (!subscription) {
            return res.status(400).json({ message: "Subscription does not exists" })
        }

        const passwordHashed = await hashText(password)

        const newUser = new User({
            fullname,
            nickname,
            email,
            password: passwordHashed,
            subscription: subscription._id,
            role: userRole._id,
            status: true
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

        if (!userRole) {
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

        const user = await User.findById(userSaved._id).select("-password -email -phone -subscription -status -role")

        if (!user) {
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

        const user = await User.findOne({ nickname }).select("-password -phone -email -subscription -status -role")

        if (!user) {
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

export const updateStatus = async (req: Request, res: Response): Promise<Response> => {

    try {

        const user = await User.findById(req.verification)

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const userUpdated = await User.findByIdAndUpdate(user._id, {
            status: true
        }, {
            new: true
        }).select("nickname")

        return res.status(200).json(userUpdated)

    } catch (error) {
        throw error
    }

}

export const forgotUpdatePassword = async (req: Request, res: Response): Promise<Response> => {

    const { email } = req.body

    try {

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "Chequea tu correo electrónico" })
        }

        const code = generateNumberUser()

        const token = forgotPasswordToken(user._id, code)

        await infoEmailPassword(email, code)

        return res.status(200).json({
            message: "Chequea tu correo electrónico",
            token
        })

    } catch (error) {
        throw error
    }

}

export const uploadCode = async (req: Request, res: Response): Promise<Response> => {

    const { code } = req.body

    try {

        if(req.code !== code) {
            return res.status(400).json({ message: "El código es incorrecto" })
        }

        return res.status(200).json({
            message: "Código verificado",
        })

    } catch (error) {
        throw error
    }

}

export const updatePassword = async (req: Request, res: Response): Promise<Response> => {

    const { password } = req.body

    try {

        const user = await User.findById(req.changePassword)

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        const passwordHashed = await hashText(password)

        await User.findByIdAndUpdate(req.changePassword, {
            password: passwordHashed
        }, {
            new: true
        })

        return res.status(200).json({ message: "Se ha cambiado la contraseña exitosamente" })

    } catch (error) {
        throw error
    }

}