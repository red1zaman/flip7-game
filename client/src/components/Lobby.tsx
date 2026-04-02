
import { useState, useEffect } from "react";
import { socket } from "../socket";

export default function Lobby({ setRoom }: any) {
  const [name, setName] = useState("");

  useEffect(() => {
    socket.on("start", (room) => setRoom(room));
    return () => socket.off("start");
  }, []);

  return (
    <div style={{ padding:20 }}>
      <h1>Flip7</h1>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/>
      <br/><br/>
      <button onClick={()=>socket.emit("queue",{name})}>Play</button>
    </div>
  );
}
