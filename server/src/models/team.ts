import { Schema, model, Types } from 'mongoose'

import { ITeam } from '../interface/Event'

const teamSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    logo: {
        type: Types.ObjectId,
        ref: 'Image'
    },

    event: {
        type: Types.ObjectId,
        ref: 'Event'
    },

    victory: {
        type: Number,
        default: 0
    },

    defeat: {
        type: Number,
        default: 0
    },

    draw: {
        type: Number,
        default: 0
    },

    points: {
        type: Number,
        default: 0
    },

    favor: {
        type: Number,
        default: 0
    },

    against: {
        type: Number,
        default: 0
    },

    competitors: [{
        type: Types.ObjectId,
        ref: 'Competitor'
    }],

    players: [{
        type: Types.ObjectId,
        ref: 'Player'
    }],

    status: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<ITeam>('Team', teamSchema)