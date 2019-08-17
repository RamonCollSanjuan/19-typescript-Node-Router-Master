"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src -> server -> server.ts
const express = require("express");
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
    }
    static init(puerto) {
        return new Server(puerto);
    }
    start() {
        this.app.listen(this.port, (err) => {
            if (err)
                throw new Error(err);
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
exports.default = Server;
