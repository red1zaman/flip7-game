import { useEffect, useState } from "react";
import { socket } from "../socket";
import PlayerSeat from "./PlayerSeat";
import "../styles/table.css";

export default function GameTable({ room }: any) {
  const [state, setState] = useState(room);

  useEffect(() => {
    socket.on("update", (data) => setState(data));
  }, []);

  return (
    <div className="table">
      <div className="center">
        <div className="deck">🂠</div>
        <button onClick={() => socket.emit("draw")}>Draw</button>
      </div>

      {state.players.map((p: any, i: number) => (
        <PlayerSeat key={p.id} player={p} index={i} total={state.players.length} />
      ))}
    </div>
  );
}