export default function PlayerSeat({ player, index, total }: any) {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 130;

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <div
      className={`seat ${player.busted ? "busted" : ""}`}
      style={{
        top: "50%",
        left: "50%",
        transform: `translate(${x}px, ${y}px)`
      }}
    >
      <div style={{ fontSize: 22 }}>{player.avatar}</div>
      <div style={{ fontSize: 12 }}>{player.name}</div>
      <div style={{ fontSize: 12 }}>Score: {player.totalScore}</div>

      {player.busted && <div style={{ color: "red" }}>💥</div>}
    </div>
  );
}