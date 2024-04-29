import mongoose from 'mongoose'

import { mongo_uri } from "../config/config";

(async () => {

    try {

        const connection = await mongoose.connect(`${mongo_uri}`)

        if(connection.STATES.connected) {
            console.log("Database is running");
        }
        
    } catch (error) {
        console.log(error);
    }

})()

