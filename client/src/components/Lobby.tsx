import { useState, useEffect } from "react";
import { socket } from "../socket";

export default function Lobby({ setRoom }: any) {
  const [name, setName] = useState("");
  const [avatar] = useState("😀");

  useEffect(() => {
    socket.on("start", (room) => {
      console.log("Game started:", room);
      setRoom(room);
    });

    return () => {
      socket.off("start");
    };
  }, []);

  const play = () => {
    console.log("Joining queue...");
    socket.emit("queue", { name, avatar });
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