
import express from "express";
import * as http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

let players: any[] = [];

io.on("connection", (socket) => {

  socket.on("queue", ({ name }) => {
    players.push({
      id: socket.id,
      name,
      avatar: "😀",
      totalScore: 0,
      busted: false
    });

    if (players.length >= 1) {
      players.forEach(p => {
        const s = io.sockets.sockets.get(p.id);
        if (s) {
          s.emit("start", { players });
        }
      });
    }
  });

  socket.on("draw", () => {
    players = players.map(p => ({
      ...p,
      busted: Math.random() < 0.3
    }));

    io.emit("update", { players });
  });

});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log("Server running on " + PORT));
