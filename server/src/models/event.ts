import { Schema, model, Types } from 'mongoose'

import { IEvent } from '../interface/Event'

const eventSchema = new Schema({

    event: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    image: {
        type: Types.ObjectId,
        ref: 'Image'
    },

    category: {
        type: Types.ObjectId,
        ref: 'Category'
    },

    admin: {
        type: Types.ObjectId,
        ref: 'User'
    },

    status: {
        type: Types.ObjectId,
        ref: 'Status'
    },

    competitors: [{
        type: Types.ObjectId,
        ref: 'Competitor'
    }],

    teams: [{
        type: Types.ObjectId,
        ref: 'Team'
    }],

    matchs: [{
        type: Types.ObjectId,
        ref: 'Match'
    }],

    comments: [{
        type: Types.ObjectId,
        ref: 'Comment'
    }]

}, {
    timestamps: true,
    versionKey: false
})

export default model<IEvent>('Event', eventSchema)