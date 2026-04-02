import express from "express";
import * as http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://flip7-game-rho.vercel.app"],
    methods: ["GET", "POST"]
  }
});

io.on("connection", socket => {
  socket.on("ping", () => socket.emit("pong"));
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log("Server running on " + PORT);
});