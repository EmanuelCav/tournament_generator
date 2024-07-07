import mongoose from 'mongoose';

import app from '../src/app'
import requrest from 'supertest'

describe('All Controllers', () => {

    let token: string

    beforeAll(async () => {
        const response = await requrest(app)
            .post('/users/login')
            .send({
                username: 'cavallinema@gmail.com',
                password: 'password1'
            });

        token = response.body.token
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    describe('Events API', () => {

        it('Should response with a 200 code status', async () => {
            const response = await requrest(app).get("/events").set("Authorization", `Bearer ${token}`)
            expect(response.statusCode).toBe(200)
        })

    })

})