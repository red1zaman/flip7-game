import { useEffect, useState } from "react";
import { socket } from "../socket";
import PlayerSeat from "./PlayerSeat";

export default function GameTable({ room }: any) {
  const [state, setState] = useState(room);

  useEffect(() => {
    socket.on("update", (data) => {
      setState(data);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Game</h2>

      {state.players.map((p: any) => (
        <PlayerSeat key={p.id} player={p} />
      ))}

      <button
        onClick={() => socket.emit("draw", { code: state.code })}
        style={{ marginTop: 20 }}
      >
        Draw Card
      </button>
    </div>
  );
}