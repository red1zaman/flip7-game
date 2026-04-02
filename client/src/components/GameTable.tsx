
import { useState, useEffect } from "react";
import { socket } from "../socket";
import PlayerSeat from "./PlayerSeat";

export default function GameTable({ room }: any) {
  const [state, setState] = useState(room);

  useEffect(()=>{
    socket.on("update",(data)=>setState(data));
  },[]);

  return (
    <div style={{ padding:20 }}>
      <h2>Game Table</h2>

      <div style={{ display:"flex", flexWrap:"wrap" }}>
        {state.players.map((p:any)=><PlayerSeat key={p.id} player={p}/>)}
      </div>

      <button onClick={()=>socket.emit("draw")}>Draw Card</button>
    </div>
  );
}
