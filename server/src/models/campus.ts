import { Schema, Types, model } from 'mongoose'

import { ICampus } from '../interface/Event'

const campusSchema = new Schema({

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

export default model<ICampus>('Campus', campusSchema)