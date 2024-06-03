import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

dotenv.config()

import { port } from "./config/config";

import './database/database'

import categoryRoute from './routes/category.routes'
import commentRoute from './routes/comment.routes'
import eventRoute from './routes/event.routes'
import roleRoute from './routes/role.routes'
import statusRoute from './routes/status.routes'
import userRoute from './routes/user.routes'
import imageRoute from './routes/image.routes'
import teamRoute from './routes/team.routes'
import playerRoute from './routes/player.routes'
import refereeRoute from './routes/referee.routes'

const app = express()

app.set('port', port)

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json({ limit: '30mb' }))

app.use(categoryRoute)
app.use(commentRoute)
app.use(eventRoute)
app.use(roleRoute)
app.use(statusRoute)
app.use(userRoute)
app.use(imageRoute)
app.use(teamRoute)
app.use(playerRoute)
app.use(refereeRoute)

app.use(express.static(path.join(__dirname, "../public")))

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})