import app from './app';
import { server } from './app';

server.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})