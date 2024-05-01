import { Schema, Types, model } from 'mongoose'

import { IMatch } from '../interface/Event'

const matchSchema = new Schema({

    local: {
        type: Types.ObjectId,
        ref: 'Team'
    },

    targetLocal: {
        type: Number,
        default: 0
    },

    visitant: {
        type: Types.ObjectId,
        ref: 'Team'
    },

    targetVisitant: {
        type: Number,
        default: 0
    },

    schedule: Date

}, {
    timestamps: true,
    versionKey: false
})

export default model<IMatch>('Match', matchSchema)