import { Schema, model } from 'mongoose'

import { IImage } from '../interface/Event'

const imageSchema = new Schema({

    image: String,

    imageId: String

}, {
    timestamps: true,
    versionKey: false
})

export default model<IImage>('Image', imageSchema)