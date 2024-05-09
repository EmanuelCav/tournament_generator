import { Schema, Types, model } from 'mongoose'

import { ICompetitor } from '../interface/User'

const competitorSchema = new Schema({

    user: {
        type: Types.ObjectId,
        ref: 'User'
    },

    event: {
        type: Types.ObjectId,
        ref: 'Event'
    },

    role: {
        type: Types.ObjectId,
        ref: 'Role'
    },

    status: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<ICompetitor>('Competitor', competitorSchema)