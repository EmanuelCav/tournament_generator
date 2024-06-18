import { Schema, model, Types } from 'mongoose'

import { ICategory } from '../interface/Event'

const categorySchema = new Schema({

    category: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    subscription: {
        type: Types.ObjectId,
        ref: 'Subscription'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<ICategory>('Category', categorySchema)