"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.js
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
require("./config.js");
const server = server_1.default.init(Number(process.env.PORT));
server.app.use(router_1.default);
server.start();
