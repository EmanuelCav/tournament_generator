import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

import { port } from "./config/config";

const app = express()

app.set('port', port)

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})