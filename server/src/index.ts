import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import http from 'http';
import { Server } from 'socket.io';

dotenv.config()

import { origin_client, origin_dev, origin_preview, port } from "./config/config";

import './database/database'
import socketConnect from './socket';

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
import matchRoute from './routes/match.routes'
import campusRoute from './routes/campus.routes'
import subscriptionRoute from './routes/subscription.routes'
import statisticRoute from './routes/statistic.routes'

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: [`${origin_dev}`, `${origin_client}`, `${origin_preview}`],
        credentials: true
    }
})

app.set('port', port)

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'))
} else {
    app.use(morgan('dev'))
}

app.use(cors({
    origin: [`${origin_dev}`, `${origin_client}`, `${origin_preview}`],
    credentials: true
}))
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
app.use(matchRoute)
app.use(campusRoute)
app.use(subscriptionRoute)
app.use(statisticRoute)

app.use(express.static(path.join(__dirname, "../public")))

socketConnect(io)

server.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})