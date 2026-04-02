
import { useState } from "react";
import Lobby from "./components/Lobby";
import GameTable from "./components/GameTable";

export default function App() {
  const [room, setRoom] = useState(null);
  return !room ? <Lobby setRoom={setRoom}/> : <GameTable room={room}/>;
}
