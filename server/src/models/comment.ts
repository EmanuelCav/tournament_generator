import { Schema, model, Types } from 'mongoose'

import { IComment } from '../interface/Event'

const commentSchema = new Schema({

    comment: {
        type: String,
        trim: true
    },

    user: {
        type: Types.ObjectId,
        ref: 'User'
    },

    event: {
        type: Types.ObjectId,
        ref: 'Event'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IComment>('Comment', commentSchema)