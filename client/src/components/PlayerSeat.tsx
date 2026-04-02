
export default function PlayerSeat({ player }: any) {
  return (
    <div style={{
      border:"2px solid gold",
      margin:10,
      padding:10,
      borderRadius:12,
      animation: player.busted ? "shake 0.3s" : ""
    }}>
      <div style={{fontSize:24}}>{player.avatar}</div>
      <div>{player.name}</div>
      <div>Score: {player.totalScore}</div>
      {player.busted && <div style={{color:"red"}}>💥 BUST</div>}
    </div>
  );
}
