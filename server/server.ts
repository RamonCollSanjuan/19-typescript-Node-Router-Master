// src -> server -> server.ts
import express = require('express');

export default class Server {

    public app: express.Application;

    public port: number;

    constructor(puerto: number) {

        this.port = puerto;
        this.app = express();

    }

    static init(puerto: number) {

        return new Server(puerto);

    }
    
    start() {

        this.app.listen(this.port, (err) => {

            if (err) throw new Error(err);
                console.log(`Servidor corriendo en puerto ${this.port}`);

        });

    }


}