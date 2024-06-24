import { Schema, Types, model } from 'mongoose'

import { IPlayer } from '../interface/Event'

const playerSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    position: {
        type: String,
        trim: true,
        required: true
    },

    statistics: [{
        type: Types.ObjectId,
        ref: 'Statistic'
    }],

    team: {
        type: Types.ObjectId,
        ref: 'Team'
    },

    event: {
        type: Types.ObjectId,
        ref: 'Event'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IPlayer>('Player', playerSchema)