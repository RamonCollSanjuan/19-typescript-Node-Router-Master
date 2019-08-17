// index.js
import Server from './server/server';
import router from './router/router';
import "./config.js"

const server = Server.init(Number(process.env.PORT));
server.app.use(router);

server.start();