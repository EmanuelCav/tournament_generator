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

    campus: {
        type: Types.ObjectId,
        ref: 'Campus'
    },

    referee: {
        type: Types.ObjectId,
        ref: 'Referee'
    },

    isMatchTrip: Boolean,

    schedule: Date

}, {
    timestamps: true,
    versionKey: false
})

export default model<IMatch>('Match', matchSchema)