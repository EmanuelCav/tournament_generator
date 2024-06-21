import { Server, Socket } from 'socket.io';

import { ICommentFetch } from './interface/Event';
import { commentApi } from './api/fetch';

const socketConnect = (io: Server) => {

    io.on('connection', (socket: Socket) => {

        socket.on('comment', async (msg: ICommentFetch) => {
            const data = await commentApi(msg.comment, msg.id, msg.token)
            socket.emit('eventData', data)
            
        })

        socket.on('disconnect', () => {
            console.log("Socket is disconnected");
        })
        
    })

}

export default socketConnect