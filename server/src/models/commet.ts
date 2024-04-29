import { Schema, model } from 'mongoose'

import { IComment } from '../interface/Event'

const commentSchema = new Schema({

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

export default model<IComment>('Comment', commentSchema)