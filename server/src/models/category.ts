import { Schema, model } from 'mongoose'

import { ICategory } from '../interface/Event'

const categorySchema = new Schema({

    category: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<ICategory>('Category', categorySchema)