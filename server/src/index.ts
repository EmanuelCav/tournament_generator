import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

import { port } from "./config/config";

import './database/database'

const app = express()

app.set('port', port)

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})