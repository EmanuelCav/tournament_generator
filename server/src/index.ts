import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

dotenv.config()

import { port } from "./config/config";

import './database/database'

import categoryCtrl from './routes/category.routes'
import commentCtrl from './routes/comment.routes'
import eventCtrl from './routes/event.routes'
import roleCtrl from './routes/role.routes'
import userCtrl from './routes/user.routes'

const app = express()

app.set('port', port)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use(categoryCtrl)
app.use(commentCtrl)
app.use(eventCtrl)
app.use(roleCtrl)
app.use(userCtrl)

app.use(express.static(path.join(__dirname, "../public")))

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})