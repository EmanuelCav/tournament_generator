import jwt from 'jsonwebtoken'
import { genSalt, hash, compare } from "bcryptjs";
import { Types } from 'mongoose';

import { jwt_user } from '../config/config';

export const hashText = async (password: string): Promise<string> => {

    const salt = await genSalt(8)

    return await hash(password, salt)

}

export const compareHash = async (password: string, hash: string): Promise<boolean> => {

    return await compare(password, hash)

}

export const generateUserToken = (id: Types.ObjectId): string => {

    return jwt.sign({ id }, `${jwt_user}`, {
        expiresIn: '90d'
    })

}