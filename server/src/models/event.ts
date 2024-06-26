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

    id: {
        type: String,
        required: true,
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

    referees: [{
        type: Types.ObjectId,
        ref: 'Referee'
    }],

    teams: [{
        type: Types.ObjectId,
        ref: 'Team'
    }],

    campus: [{
        type: Types.ObjectId,
        ref: 'Campus'
    }],

    matchs: [[{
        local: {
            name: String,
            logo: String
        },
        targetLocal: Number,
        visitant: {
            name: String,
            logo: String
        },
        isMatchTrip: Boolean,
        targetVisitant: Number,
        referee: String,
        campus: String,
        schedule: Date
    }]],

    done: {
        type: Boolean,
        default: false
    },

    comments: [{
        type: Types.ObjectId,
        ref: 'Comment'
    }],

    isRoundTrip: {
        type: Boolean,
        default: false
    },

    group: {
        qualifiers: Number,
        amount: Number
    },

    champion: {
        type: Types.ObjectId,
        ref: 'Team'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IEvent>('Event', eventSchema)