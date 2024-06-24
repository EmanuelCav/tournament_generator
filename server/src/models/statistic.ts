import { Schema, model, Types } from 'mongoose'

import { IStatistic } from 'interface/Event'

const statisticSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    value: {
        type: Number,
        default: 0
    },

    event: {
        type: Types.ObjectId,
        ref: 'Event'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IStatistic>('Statistic', statisticSchema)