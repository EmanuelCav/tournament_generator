import { Schema, Types, model } from 'mongoose'

import { IPlayer } from '../interface/User'

const playerSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    points: {
        type: Number,
        default: 0
    },

    assists: {
        type: Number,
        default: 0
    },

    cards: {
        type: Number,
        default: 0
    },

    serialCards: {
        type: Number,
        default: 0
    },

    position: {
        type: String,
        trim: true,
        required: true
    },

    team: {
        type: Types.ObjectId,
        ref: 'Team'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IPlayer>('Player', playerSchema)