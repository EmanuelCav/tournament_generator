import { Schema, model } from 'mongoose'

import { ISubscription } from '../interface/User'

const subscriptionSchema = new Schema({

    subscription: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    price: {
        type: Number,
        required: true
    },

    descriptions: [{
        type: String,
        trim: true
    }],

    hierarchy: {
        type: Number,
        required: true
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<ISubscription>('Subscription', subscriptionSchema)