import { Schema, model } from 'mongoose'

import { IStatus } from '../interface/Event'

const statusSchema = new Schema({

    status: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IStatus>('Status', statusSchema)