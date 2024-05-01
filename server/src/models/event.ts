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
        types: Types.ObjectId,
        ref: 'User'
    },

    status: {
        types: Types.ObjectId,
        ref: 'Status'
    },

    competitors: [{
        types: Types.ObjectId,
        ref: 'Competitor'
    }],

    teams: [{
        types: Types.ObjectId,
        ref: 'Team'
    }],

    matchs: [{
        types: Types.ObjectId,
        ref: 'Match'
    }],

    comments: [{
        types: Types.ObjectId,
        ref: 'Comment'
    }]

}, {
    timestamps: true,
    versionKey: false
})

export default model<IEvent>('Event', eventSchema)