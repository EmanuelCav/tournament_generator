import { Request, Response, NextFunction } from "express";

import User from '../../models/user'
import Role from '../../models/role'

import { privileged_role } from "../../config/config";

const admin = async (req: Request, res: Response, next: NextFunction) => {
    
    const user = await User.findById(req.user).select("role")

    if(!user) {
        return res.status(400).json({ message: "User does not exists" })
    }

    const role = await Role.findById(user.role)

    if(!role) {
        return res.status(400).json({ message: "Role does not exists" })
    }

    if(role.role !== `${privileged_role}`) {
        return res.status(401).json({ message: "Doing this is not allowed" })
    }

    next()

}

export default admin