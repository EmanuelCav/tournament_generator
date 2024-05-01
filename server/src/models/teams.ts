import { Schema, model, Types } from 'mongoose'

import { ITeam } from '../interface/Event'

const teamSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
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
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<ITeam>('Team', teamSchema)