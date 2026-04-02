export default function PlayerSeat({ player }: any) {
  return (
    <div style={{
      border: "1px solid white",
      margin: 10,
      padding: 10
    }}>
      <div style={{ fontSize: 24 }}>{player.avatar}</div>
      <div>{player.name}</div>
      <div>Score: {player.totalScore}</div>

      {player.busted && <div>💥 BUST</div>}
    </div>
  );
}