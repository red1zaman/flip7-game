import express from "express";
import * as http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", socket => {
  socket.on("ping", () => socket.emit("pong"));
});

server.listen(3001);