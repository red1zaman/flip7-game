import { useState } from "react";
import { socket } from "../socket";

export default function Lobby({ setRoom }: any) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("😀");

  const play = () => {
    socket.emit("queue", { name, avatar });

    socket.on("start", (room) => {
      setRoom(room);
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Flip7</h1>

      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={play}>🎮 Play</button>
      </div>
    </div>
  );
}