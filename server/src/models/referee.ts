import { Schema, Types, model } from 'mongoose'

import { IReferee } from '../interface/Event'

const refereeSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    event: {
        type: Types.ObjectId,
        ref: 'Event'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IReferee>('Referee', refereeSchema)