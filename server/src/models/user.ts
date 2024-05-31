import { Schema, Types, model } from 'mongoose'

import { IUser } from '../interface/User'

const userSchema = new Schema({

    fullname: {
        type: String,
        required: true,
        trim: true
    },

    nickname: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    email: {
        type: String,
        trim: true,
        unique: true
    },

    role: {
        type: Types.ObjectId,
        ref: 'Role'
    },

    phone: {
        type: String,
        trim: true
    },

    status: {
        type: Boolean,
        default: false
    },

    password: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IUser>('User', userSchema)